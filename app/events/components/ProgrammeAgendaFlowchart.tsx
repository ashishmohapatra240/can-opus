export default function ProgrammeAgendaFlowchart() {
  const agendaItems = [
    {
      title: "Organizational Alignment",
      description: "Deep dive into the organizational goals & value and align themselves to the same."
    },
    {
      title: "Ownership & Accountability",
      description: "Realise the importance of taking ownership and practical frame work to practice work."
    },
    {
      title: "Leadership Style",
      description: "Understanding the personal style of leadership."
    },
    {
      title: "Collaboration and Cohesiveness",
      description: "Understand the various stages of group. Forming, Norming, Storming, Performing."
    },
    {
      title: "Building High Trust Relationships",
      description: "Power of concise, complete & timely communication."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Programme Agenda
          </h2>
          <div className="w-24 h-1 bg-primary/80 mx-auto"></div>
        </div>

        {/* Simple Flowchart */}
        <div className="space-y-0">
          {agendaItems.map((item, index) => (
            <div key={index} className="relative">
              {/* Agenda Item */}
              <div className="bg-white border border-gray-300 p-8 relative">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">{item.description}</p>
                </div>
              </div>

              {/* Arrow Connector */}
              {index < agendaItems.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-px h-8 bg-gray-300 relative">
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-300"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <div className="bg-gray-900 text-white p-8 border border-gray-300">
            <h3 className="text-2xl font-semibold mb-2">Transform Your Leadership Journey</h3>
            <p className="text-gray-300">Complete the programme and unlock your leadership potential</p>
          </div>
        </div>
      </div>
    </section>
  );
}