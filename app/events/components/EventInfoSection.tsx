export default function EventInfoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Content */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Leaders with Passion!
          </h2>
          <p className="text-xl text-gray-600">
            The training focused on building the leaders of Tomorrow who can lead Can-Opus to higher vision. 
            An opportunity to equip the emerging leaders of Can-Opus with the skills to transition from a 
            high performer into a passionate leader.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left Content */}
            <div className="lg:col-span-2 p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                High Performing Team
              </h3>
              <p className="text-gray-600 text-lg">
                Helping build high performing team with the right attitudes and actions across all the 
                levels of organization through structured approaches and proven methodologies.
              </p>
            </div>
            
            <div className="lg:col-span-3 bg-white border-l border-gray-200 p-8 lg:p-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Key Focus Areas</h4>
              <div className="space-y-2">
                <div className="text-gray-700 font-medium">• Organizational Alignment</div>
                <div className="text-gray-700 font-medium">• Ownership & Accountability</div>
                <div className="text-gray-700 font-medium">• Leadership Style</div>
                <div className="text-gray-700 font-medium">• Collaboration and Cohesiveness</div>
                <div className="text-gray-700 font-medium">• Building High Trust Relationships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
