import React from "react";

const Features = () => {
  const features = [
    { title: "Speaking Practice", desc: "1:1 sessions with expert trainers" },
    { title: "Mock Tests", desc: "Simulate real IELTS exam conditions" },
    { title: "AI Band Score", desc: "Get AI-based predicted scores" },
    { title: "Study Material", desc: "Curated resources for all modules" },
  ];

  return (
    <section id="features" className="bg-white py-16 px-8">
      <h3 className="text-3xl font-bold text-center mb-10 text-purple-900">Our Features</h3>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((f, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">{f.title}</h4>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
