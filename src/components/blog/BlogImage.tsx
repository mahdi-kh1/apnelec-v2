import Image from "next/image";

type BlogImageProps = {
  id: number;
  title: string;
};

export default function BlogImage({ id, title }: BlogImageProps) {
  // Calculate which image to use based on the blog ID
  // This will cycle through images 1-6 based on the blog ID
  const imageNumber = (id % 6) + 1;
  const imagePath = `/images/blog/blog-${imageNumber}.jpg`;
  
  return (
    <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
      <Image
        src={imagePath}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
  );
} 