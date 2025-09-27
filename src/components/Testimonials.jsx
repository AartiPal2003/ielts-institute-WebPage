import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "IELTS Student",
      review:
        "IELTSPro helped me boost my confidence. The speaking practice and mock tests felt just like the real exam. I scored Band 8.0!",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      role: "Working Professional",
      review:
        "The AI Band Score feature was a game changer! I could measure my progress after every mock test and improve continuously.",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
      rating: 4,
    },
    {
      name: "Sanya Kapoor",
      role: "IELTS Aspirant",
      review:
        "The trainers are so supportive and the study material is perfectly organized. I loved the interactive learning experience.",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-50 py-16 px-8">
      <h3 className="text-3xl font-bold text-center text-purple-900 mb-12">
        What Our Students Say
      </h3>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 border-4 border-green-200 shadow-md"
              />
              <h4 className="text-xl font-semibold text-gray-800">{t.name}</h4>
              <p className="text-sm text-gray-500 mb-3">{t.role}</p>

              {/* ⭐ Star Ratings */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-700 italic">“{t.review}”</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
