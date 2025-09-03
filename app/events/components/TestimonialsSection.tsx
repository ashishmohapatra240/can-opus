import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Smruti Sambit Mohapatra",
      position: "Manager-CBM",
      image: "/images/testimonials/Smruti-Sambit.jpg",
      quote: "This has been the best leadership training program I have participated in my whole working period. And am certainly practicing the concept of the course from now on. I found the session to be very insightful and it has developed my thought and practices. Specially the effort of Baandana Maam inspired me a lot"
    },
    {
      name: "Bikash Kumar Jena",
      position: "Sales Co-ordinator",
      image: "/images/testimonials/Bikash-Kum.jpg",
      quote: "Leadership training Program\"Sakksham\" help me to improve my capabilities & fine tune my skills, take aim at my barriers so it can help reach top business Performances."
    },
    {
      name: "Mahavir Prasad Dhal",
      position: "Data Collector -Oil Lab",
      image: "/images/testimonials/Mahavir-Prasad.jpg",
      quote: "Thanks You for Selecting me for \"Sakksham\". It helps me a lot to formulate and implement effective leadership strategies. I have gained more clarity on the career direction I want to take. I identified the need to grow a better understanding of leadership skills and thinking across the business in order to improve our performance."
    },
    {
      name: "Bijay Kumar Singh",
      position: "Manger-Oil Lab",
      image: "/images/testimonials/Bijay-Kumar-Singh.jpg",
      quote: "Leadership Training Programm helped me to better understand the processes. & helps me action my aspirations and to develop areas of opportunity. I have built relationships with my peers as coaching has helped me to 'put myself out there.' Coaching has given me confidence in my role in managing the performance of my team. It helps to motivate and inspire them and it gives them the opportunity to find solutions to challenges."
    },
    {
      name: "Dillip Kumar Nayak",
      position: "Manager Service & Manager",
      image: "/images/testimonials/Dillip-Kumar-Nayak.jpg",
      quote: "I am thankful to entire team who organized such program \"Sakksham\". The learning we had out of the entire session will be helpful indeed. The activities rendered in the training is excellent concluded with learnings which we generally don't get in classrooms/work life. The best thing I learned from the entire session is \"7'C of communication\" & \" The ladder of making things happen\"."
    },
    {
      name: "Hari Prasad Bade",
      position: "Asst. Manager -CBM",
      image: "/images/testimonials/Hari-Prasad-Bade.jpg",
      quote: "I found this \"Sakksham\" really helpful to me. One of the most enjoyable and informative program was conducted, I have ever attended. Thank you for organizing and a very special thanks to the great 3 speakers!\" I also became aware of other leadership styles I could use. The piece on values was very thought-provoking, as I never realized until now how my values affect my decisions and behavior. Time well spent."
    },
    {
      name: "Abhas Patel",
      position: "Senior Engineer",
      image: "/images/testimonials/Abhas.jpg",
      quote: "Thank You for starting me on 'Leadership Training Program'. I have learnt how to create a better work environment by looking at my teams' strengths instead of always focusing on what they cannot do well."
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What Our Leaders Say
          </h2>
          <p className="text-lg text-gray-600">
            Hear from the participants who experienced the transformational journey of SakkSham
          </p>
        </div>

        <div className="overflow-hidden -mx-4" style={{ height: 'auto', overflowY: 'hidden' }}>
          <Marquee
            speed={30}
            gradient={true}
            gradientColor="white"
            gradientWidth={50}
            pauseOnHover={false}
            className="py-4"
            style={{ height: 'auto', overflow: 'hidden' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 p-8 mx-4 w-80 h-80 flex-shrink-0 transition-colors duration-300 relative group flex flex-col"
              >
                <div className="mb-8 flex-1 overflow-hidden">
                  <p className="text-gray-700 text-sm font-regular leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-6 border-t-2 border-gray-100 mt-auto">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-black text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-xs">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>


      </div>
    </section>
  );
}
