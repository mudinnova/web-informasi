import React from "react";

export default function FrontEnd() {
  const tools = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];

  const groupedExperience = [
    {
      company: "PT Shabi Lombok Bersaudara",
      role: "Front-End Developer",
      duration: "December 2024 – Present",
      description:
        "Designing the recruitment website interface for migrant workers from wireframe, prototype to design validation.",
      tools: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      company: "Bidokkes Polda NTB",
      role: "Front-End Developer",
      duration: "March – October 2024",
      description:
        "Designing the AkuSehat application interface for the integrated BPJS FKTP administration system.",
      tools: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      company: "Seameo Qitep In Language",
      role: "Web Designer for Literacy Publication Works",
      duration: "August – December 2023",
      description:
        "Designing the AkuSehat application interface for the integrated BPJS FKTP administration system.",
      tools: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
  ];

  const gallery = [
    {
      title: "PT Shabi Lombok Bersaudara Website",
      image: "/shabi.png",
      description: "Interface design for the job vacancy and migrant worker recruitment website.",
    },
    {
      title: "AkuSehat FKTP BPJS",
      image: "/fktp.png",
      description: "Integrated administration system design for FKTP.",
    },
    {
      title: "Seameo Qitep In Language",
      image: "/Seameo.png",
      description: "Interface design for a web-based student attendance application.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-700 to-purple-800 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Front-End Development</h1>
        <p className="text-lg">Muhamad Halimudin Nova – Informatics Engineer & Designer</p>
      </header>

      {/* Tools */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Tools I Use</h2>
        <div className="flex flex-wrap justify-center gap-4 text-white">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="bg-indigo-700 px-4 py-2 rounded-full text-sm shadow hover:bg-indigo-800 transition"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className=" py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Professional Experience</h2>
        <div className="max-w-5xl mx-auto space-y-6">
          {groupedExperience.map((exp, i) => (
            <div
              key={i}
              className="p-6 bg-gray-700 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-indigo-400">{exp.company}</h3>
              <p className="text-sm italic text-gray-300 mb-2">{exp.role} | {exp.duration}</p>
              <p className="text-sm text-gray-200 mb-1">
                <strong>Description:</strong> {exp.description}
              </p>
              <p className="text-sm text-gray-300">
                <strong>Tools:</strong> {exp.tools.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-6 bg-gray-900">
        <h2 className="text-2xl font-semibold text-center mb-10">Website</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {gallery.map((proj, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl shadow hover:shadow-lg overflow-hidden"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{proj.title}</h3>
                <p className="text-sm text-gray-300">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-center py-4 text-sm text-gray-500 mt-10">
        © 2025 Muhamad Halimudin Nova. All rights reserved.
      </footer>
    </div>
  );
}
