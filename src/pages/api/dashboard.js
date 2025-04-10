import { connectToDB } from "../../lib/mongodb";
import User from "@/models/User";
import Coupon from "@/models/coupon";
import Form from "@/models/form";

const campaignId = "gold-scheme";
const DEFAULT_PAGE_SIZE = 10;

export default async function handler(req, res) {
  await connectToDB();
  if (req.method === "GET") {
    try {
      // Get pagination parameters from query
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || DEFAULT_PAGE_SIZE;
      const skip = (page - 1) * limit;

      // Get date range filters
      const startDate = req.query.startDate
        ? new Date(req.query.startDate)
        : null;
      const endDate = req.query.endDate ? new Date(req.query.endDate) : null;

      // Get location filters
      const city = req.query.city?.trim();
      const state = req.query.state?.trim();

      // First find users matching location filters if any
      let filteredUserIds = [];
      if (city || state) {
        const userQuery = {};
        if (city) {
          userQuery["address.city"] = new RegExp(city, "i");
        }
        if (state) {
          userQuery["address.state"] = new RegExp(state, "i");
        }
        const filteredUsers = await User.find(userQuery);
        filteredUserIds = filteredUsers.map((user) => user.userId);
      }

      // Build query conditions
      const queryConditions = { campaignId };

      // Add date range conditions if provided
      if (startDate || endDate) {
        queryConditions.createdAt = {};
        if (startDate) {
          queryConditions.createdAt.$gte = startDate;
        }
        if (endDate) {
          queryConditions.createdAt.$lte = endDate;
        }
      }

      // Add user location filter if city or state was specified
      if ((city || state) && filteredUserIds.length > 0) {
        queryConditions.userId = { $in: filteredUserIds };
      } else if ((city || state) && filteredUserIds.length === 0) {
        // If location filters were applied but no users found, return empty result
        return res.status(200).json({
          data: [],
          pagination: {
            total: 0,
            page,
            limit,
            totalPages: 0,
            hasNextPage: false,
            hasPrevPage: false,
          },
        });
      }

      // Get total count for pagination
      const total = await Form.countDocuments(queryConditions);

      // Get paginated forms
      const forms = await Form.find(queryConditions)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      // Get all unique userIds and couponIds
      const userIds = [...new Set(forms.map((form) => form.userId))];
      const couponIds = [...new Set(forms.map((form) => form.couponId))];

      // Fetch all users and coupons
      const [users, coupons] = await Promise.all([
        User.find({ userId: { $in: userIds } }),
        Coupon.find({ _id: { $in: couponIds } }),
      ]);

      // Create lookup maps
      const userMap = users.reduce((acc, user) => {
        acc[user.userId] = user;
        return acc;
      }, {});

      const couponMap = coupons.reduce((acc, coupon) => {
        acc[coupon._id.toString()] = coupon;
        return acc;
      }, {});

      // Combine the data
      const enrichedForms = forms.map((form) => ({
        firstName: userMap[form.userId]?.firstName,
        lastName: userMap[form.userId]?.lastName,
        email: userMap[form.userId]?.email,
        phone: userMap[form.userId]?.phone,
        line1: userMap[form.userId]?.address?.line1,
        line2: userMap[form.userId]?.address?.line2,
        city: userMap[form.userId]?.address?.city,
        state: userMap[form.userId]?.address?.state,
        pincode: userMap[form.userId]?.address?.pincode,
        code: couponMap[form.couponId.toString()]?.code,
        campaignId: couponMap[form.couponId.toString()]?.campaignId,
        createdAt: form.createdAt,
      }));

      res.status(200).json({
        data: enrichedForms,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
          hasNextPage: page * limit < total,
          hasPrevPage: page > 1,
        },
        filters: {
          startDate: startDate?.toISOString(),
          endDate: endDate?.toISOString(),
          city,
          state,
        },
      });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to fetch dashboard data", e: error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
