// pages/api/blogs/[id].ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const blog = await prisma.blog.findUnique({
        where: { id: Number(id) },
        include: { author: true },
      });

      if (!blog) {
        return res.status(404).json({ error: "Blog not found" });
      }

      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog" });
    }
  } else if (req.method === "PUT") {
    try {
      const { title, content } = req.body;
      const updatedBlog = await prisma.blog.update({
        where: { id: Number(id) },
        data: { title, content },
      });

      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(500).json({ error: "Failed to update blog" });
    }
  } else if (req.method === "DELETE") {
    try {
      await prisma.blog.delete({
        where: { id: Number(id) },
      });
      res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete blog" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
