import { connectToDB } from "@/lib/mongodb";
import User from "@/models/user";

export default async function handler(req, res) {
  await connectToDB();

  if (req.method === "GET") {
    const users = await User.find({});
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const { name, email, age } = req.body;
    const newUser = await User.create({ name, email, age });
    return res.status(201).json(newUser);
  }

  res.status(405).json({ error: "Method not allowed" });
}
