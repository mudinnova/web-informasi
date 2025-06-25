import React from "react";

export default function Medsos() {
  const tools = ["Photoshop", "Illustrator", "Canva", "Capcut", "Meta Business Suite", "Instagram Insights", "Figma"]

  
  const groupedExperience = [
    {
      company: "Forum Mahasiswa Pemerhati Sosial Lombok Timur",
      role: "Kepala Departemen Media Komunikasi dan Informasi",
      duration: "2022 – 2024",
      description:
        "Mengelola media sosial organisasi, membuat konten visual dan video, serta menganalisis performa kampanye.",
      tools: ["Figma", "Adobe XD", "Canva", "Photoshop", "Capcut", "Filmora", "Meta Business Suite", "Instagram Insights"],
    },
    
  ];

  const gallery = [
    {
      title: "Pengelolaan Media Sosial",
      image: "/medsos/medsos.jpg",
      description: " Strategi dan Manajemen Konten untuk Media Sosial",
    },
    {
      title: "Desainer Grafis",
      image: "/medsos/desain.jpg",
      description: "Pembuatan Konten Visual untuk Media Sosial, Poster, dan Infografis",
    },
    {
      title: "Dokumentasi Foto & Video",
      image: "/medsos/foto.jpg",
      description: "Pengambilan dan Pengeditan Foto serta Video untuk Media Sosial",
    },
  ];

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-700 to-purple-800 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Media Social Specialist</h1>
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

      {/* Soft Skills */}
<section className="py-10 px-6 max-w-5xl mx-auto">
  <h2 className="text-2xl font-semibold mb-4 text-center">Soft Skills</h2>
  <div className="flex flex-wrap justify-center gap-4 text-white">
    {[
      "Creative Thinking",
      "Communication",
      "Time Management",
      "Collaboration",
      "Problem Solving",
      "Adaptability",
      "Leadership",
      "Teamwork",
    ].map((skill, i) => (
      <span
        key={i}
        className="bg-pink-700 px-4 py-2 rounded-full text-sm shadow hover:bg-pink-800 transition"
      >
        {skill}
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
                <strong>Deskripsi:</strong> {exp.description}
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
        <h2 className="text-2xl font-semibold text-center mb-10">Gallery Kegiatan</h2>
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

      {/* Achievements & Certifications */}
      <section className="py-12 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center mb-8">Achievements & Certifications</h2>
        <div className="max-w-5xl mx-auto space-y-6 text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
           
            <li>
              🥉 Juara 3 Lomba Fotografi Nasional Stikzarfest (2023)
            </li>
            
          </ul>
        </div>
      </section>
      <section className="relative py-12 px-6 text-center overflow-hidden" data-aos="fade-up">
  {/* Background awan animasi */}
  <div className="absolute inset-0 bg-[url('/clouds.svg')] bg-cover bg-repeat animate-cloud-move opacity-30 z-0"></div>

  {/* Konten utama */}
  <div className="relative z-10">
    <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
    <p className="mb-4">Feel free to reach out via email or social media.</p>
    <div className="flex flex-wrap justify-center gap-4 text-indigo-400">
      <a href="mailto:mudinnova15@email.com" className="hover:underline">mudinnova15@email.com</a>
      <a href="https://www.linkedin.com/in/muhamad-halimudin-nova-101844263/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
      <a href="https://wa.me/6287869854154" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
      <a href="https://www.instagram.com/_casanova03/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
      <a href="https://www.tiktok.com/@mhn_nova?_t=ZS-8xSinSAmYdj&_r=1" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a>
      <a href="https://www.facebook.com/m.nova.73" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-950 text-center py-4 text-sm text-gray-500 mt-10">
        © 2025 Muhamad Halimudin Nova. All rights reserved.
      </footer>
    </div>
  );
}
