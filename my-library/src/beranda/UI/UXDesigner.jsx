import React, { useState } from "react";

export default function UIUXExperience() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null);

  const tools = ["Figma", "Adobe XD", "Canva", "Notion", "Photoshop"];

  const groupedExperience = [
    {
      company: "PT Shabi Lombok Bersaudara",
      role: "UI/UX Designer",
      duration: "Desember 2023 – Sekarang",
      description:
        "Merancang tampilan website rekrutmen pekerja migran dari wireframe, prototipe hingga validasi desain.",
      tools: ["Figma", "Adobe XD", "Photoshop"],
    },
    {
      company: "Bidokkes Polda NTB",
      role: "UI/UX Designer",
      duration: "Maret – Oktober 2024",
      description:
        "Mendesain antarmuka aplikasi AkuSehat untuk sistem administrasi FKTP terintegrasi BPJS.",
      tools: ["Figma",  "Adobe XD", "Photoshop"],
    },
    {
      company: "Absensi Mahasiswa MSIB di Seameo Qitep in Language berbasis Web",
      role: "UI/UX Designer",
      duration: "Agustus – Desember 2023",
      description:
        "Mendesain antarmuka aplikasi absensi mahasiswa berbasis web untuk memudahkan pengelolaan data kehadiran.",
      tools: ["Figma",  "Adobe XD", "Photoshop"],
    },
    {
      company: "Al-Qur'an Inspire",
      role: "UI/UX Designer",
      duration: "Januari – Maret 2023",
      description:
        "Mendesain antarmuka aplikasi absensi mahasiswa berbasis web untuk memudahkan pengelolaan data kehadiran.",
      tools: ["Figma",  "Adobe XD", "Photoshop"],
    },
    {
      company: "Freelance – UI/UX Designer",
      role: "UI/UX Designer",
      duration: " Juli 2021 – Desember 2024",
      description:
        "Mendesain antarmuka aplikasi dan website dengan fokus pada kemudahan penggunaan.",
      tools: ["Figma", "Adobe XD", "Canva", "Photoshop"],
    },
  ];

  const gallery = [
    {
      title: "Website PT Shabi Lombok Bersaudara",
      image: "/shabi.png",
      description: "Desain antarmuka website lowongan kerja dan rekrutmen PMI",
      details: ["/shabi1.png", "/shabi2.png"],
    },
    {
      title: "AkuSehat FKTP BPJS",
      image: "/fktp.png",
      description: "Desain sistem administrasi terintegrasi untuk FKTP",
      details: ["/fktp1.png", "/fktp2.png"],
    },
    {
      title: "Absensi Mahasiswa MSIB",
      image: "/Seameo.png",
      description: "Desain aplikasi absensi berbasis web.",
      details: ["/seameo1.png", "/seameo2.png"],
    },
    {
      title: "Al-Qur'an Inspire",
      image: "/quran.png",
      description: "Desain aplikasi Qur'an dengan fitur inovatif.",
      details: ["/quran1.png", "/quran2.png"],
    },
    {
      title: "Freelance UI/UX Projects",
      image: "/freelance.png",
      description: "Berbagai proyek desain antarmuka aplikasi dan website.",
      details: ["/freelance1.png", "/freelance2.png"],
    },
  ];

  const handleSelectGallery = (index) => {
    setActiveGalleryIndex(index === activeGalleryIndex ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-700 to-gray-800 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">UI/UX Experience</h1>
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
      <section className="py-12 px-6">
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

      {/* Main Gallery */}
      <section className="py-12 px-6 bg-gray-900">
        <h2 className="text-2xl font-semibold text-center mb-10">UI/UX Project Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {gallery.map((proj, index) => (
            <div
              key={index}
              onClick={() => handleSelectGallery(index)}
              className="cursor-pointer bg-gray-800 rounded-xl shadow hover:shadow-lg overflow-hidden transition"
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

      {/* Horizontal Detail Gallery */}
      {activeGalleryIndex !== null && (
        <section className="px-6 pb-12 bg-gray-900">
          <h3 className="text-xl font-semibold text-center mb-4 text-indigo-400">Detail Preview: {gallery[activeGalleryIndex].title}</h3>
          <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-600 px-2">
            {gallery[activeGalleryIndex].details.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Detail ${idx + 1}`}
                className="h-52 w-80 object-cover rounded-lg flex-shrink-0"
              />
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-950 text-center py-4 text-sm text-gray-500 mt-10">
        © 2025 Muhamad Halimudin Nova. All rights reserved.
      </footer>
    </div>
  );
}
