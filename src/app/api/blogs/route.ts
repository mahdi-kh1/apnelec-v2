// pages/api/blogs/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const blogs = await prisma.blog.findMany({
        include: { author: true },
      });
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blogs" });
    }
  } else if (req.method === "POST") {
    try {
      const { title, content, authorId } = req.body;
      const newBlog = await prisma.blog.create({
        data: { title, content, authorId },
      });
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(500).json({ error: "Failed to create blog" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
