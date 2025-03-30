import Image from "next/image";

const testimonials = [
  {
    quote: "Working with Your Brand transformed our business operations. They&apos;re amazing!",
    author: "Sarah Johnson",
    title: "CEO, TechCorp",
    image: "/images/testimonials/testimonial-1.jpg"
  },
  {
    quote: "The team at &quot;Your Brand&quot; provided exceptional support throughout our digital transformation journey.",
    author: "Michael Chen",
    title: "CTO, InnovateCo",
    image: "/images/testimonials/testimonial-2.jpg"
  },
  {
    quote: "Your Brand's solutions are intuitive, powerful, and backed by a team that truly cares about our success.",
    author: "Emily Rodriguez",
    title: "Operations Director, GlobalFirm",
    image: "/images/testimonials/testimonial-3.jpg"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from some of our satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm relative"
            >
              <div className="mb-6">
                <svg className="h-10 w-10 text-blue-600 opacity-20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 dark:text-gray-300 relative z-10">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 