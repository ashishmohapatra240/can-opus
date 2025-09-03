import Image from 'next/image';

export default function DirectorSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Director Card */}
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Director Image Section */}
            <div className="relative bg-black overflow-hidden">
              <Image
                src="/images/events/director.jpg"
                alt="Anand Kumar Rout"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-12 flex flex-col justify-center">
              <div className="space-y-2">
                <div className="text-8xl text-gray-200 leading-none">
                  &quot;
                </div>

                <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-800 font-light">
                  SakkSham is all about training our Leaders to have a Clear Mindset. A mindset which
                  makes them capable to stay focussed and have positive thinking.
                </blockquote>



                {/* Director Name and Position */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-900">Siddhartha Sharma
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-600 text-lg font-light">Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Context */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
              Leading the Vision Forward
            </h4>
            <p className="text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
              Under visionary leadership, SakkSham represents our commitment to developing the next
              generation of leaders who will drive Can-Opus towards greater heights of success and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
