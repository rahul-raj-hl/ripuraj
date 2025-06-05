import { connectToDB } from "../../lib/mongodb";
import User from "../../models/User";

async function migrate() {
  try {
    await connectToDB();
    console.log('Connected to database');

    // Get all users
    const users = await User.find({});
    console.log(`Found ${users.length} users to migrate`);
    let count = 0

    for (const user of users) {
      // Create new fields
      const userFinal = JSON.parse(JSON.stringify(user));
      const name = `${userFinal.firstName} ${userFinal.lastName}`.trim();
      const address = userFinal.address.line2 
        ? `${userFinal.address.line1}, ${userFinal.address.line2}`.trim()
        : userFinal.address.line1;
      console.log(count, "---->", name, address,);
      count++;

      // Update user document
      await User.collection.updateOne(
        { _id: user._id },
        {
          $set: {
            name,
            'address.line1': address,
          },
          $unset: {
            firstName: 1,
            lastName: 1,
            'address.line2': 1,
          }
        }
      );
    }

    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
  } 
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
       await migrate();
        res.status(200).json({ message: 'Migration completed successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}



