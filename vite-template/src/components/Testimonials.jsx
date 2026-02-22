const testimonials = [
  {
    name: "John Doe",
    role: "CEO of Company",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "This product has transformed our workflow. The AI features are incredibly intuitive and have saved us countless hours of development time.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "The seamless integration and user-friendly interface have made it a joy to use. Our team has seen a significant boost in productivity since we started using this tool.",
  },
  {
    name: "Michael Johnson",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content:
      "The customer support is outstanding. Whenever we had questions or needed assistance, the team was quick to respond and always provided helpful solutions.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="-mt-30 max-w-7xl mx-auto ">
        <div className=" items-center gap-8 sm:gap-12 lg:gap-16 py-10">
          {/* header */}
          <div className="w-full text-center">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What developers are saying about us
            </h2>
            <p className="text-gray-400 text-xl sm:text-lg max-w-2xl mx-auto">
              Hear from our satisfied customers who have experienced the power
              of our AI-driven development tools.
            </p>
          </div>
        </div>

          {/* Right side testimonials */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                
              {testimonials.map((testimonial, key) => ( 
                <div
                  key={key}
                  className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 hover:border-blue-400 duration-700 rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="shrink-0 ">
                      <div
                        className="text-2xl sm:text-3xl lg:text-4xl font bold
                                bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text
                                text-transparent"
                      >
                        "
                      </div>
                    </div>
                    <div className="row">
                      <p className="text-white text-xl sm:text:lg leading-relaxed mb-3 sm:mb-4 ">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center space-x-2 sm:space-x-3 ">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                          clas
                        />
                      <div>
                        <h4 className="text-white font-semibold text-sm sm:text-xl">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 font-semibold text-xm sm:text-sm">
                          {testimonial.role}
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}
