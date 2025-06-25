import React, { useState } from "react";

// Data Galeri UI/UX Projects
const galleryData = [
  {
    title: "Website PT Shabi Lombok Bersaudara",
    image: "/shabi.png",
    description: "Desain antarmuka website lowongan kerja dan rekrutmen PMI",
    details: ["/shabi/1.png", "/shabi/2.png", "/shabi/3.png", "/shabi/4.png", "/shabi/5.png", "/shabi/6.png"]},
  {
    title: "AkuSehat FKTP BPJS",
    image: "/fktp.png",
    description: "Desain sistem administrasi terintegrasi untuk FKTP",
    details: ["/fktp/1.png", "/fktp/2.png", "/fktp/3.png", "/fktp/4.png", "/fktp/6.png", "/fktp/5.png", ]
  },
  {
    title: "Absensi Mahasiswa MSIB",
    image: "/Seameo.png",
    description: "Desain aplikasi absensi berbasis web.",
    details: ["/seaqil/1.png", "/seaqil/2.png", "/seaqil/3.png", "/seaqil/4.png", "/seaqil/5.png", "/seaqil/6.png", "/seaqil/7.png", "/seaqil/8.png", "/seaqil/9.png", "/seaqil/10.png"]
  },
  {
    title: "Al-Qur'an Inspire",
    image: "/1.png",
    description: "Desain aplikasi Qur'an dengan fitur inovatif.",
    details: ["/alquran/2.png", "/alquran/3.png", "/alquran/4.png", "/alquran/5.png", "/alquran/6.png", "/alquran/7.png", "/alquran/8.png", "/alquran/9.png", "/alquran/10.png"]
  },
  {
    title: "Freelance UI/UX Projects",
    image: "/freelance/cover.png",
    description: "Berbagai proyek desain antarmuka aplikasi dan website.",
    details: ["/freelance/1.png", "/freelance/2.png", "/freelance/3.png", "/freelance/4.png", "/freelance/5.png", "/freelance/6.png", "/freelance/7.png", "/freelance/8.png", "/freelance/9.png", "/freelance/10.png"]
  }
];

export default function UIUXExperience() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const tools = ["Figma", "Adobe XD", "Canva", "Notion", "Photoshop"];

  const groupedExperience = [
    {
      company: "PT Shabi Lombok Bersaudara",
      role: "UI/UX Designer",
      duration: "Desember 2023 – Sekarang",
      description:
        "Merancang tampilan website rekrutmen pekerja migran dari wireframe, prototipe hingga validasi desain.",
      tools: ["Figma", "Adobe XD", "Photoshop"]
    },
    {
      company: "Bidokkes Polda NTB",
      role: "UI/UX Designer",
      duration: "Maret – Oktober 2024",
      description:
        "Mendesain antarmuka aplikasi AkuSehat untuk sistem administrasi FKTP terintegrasi BPJS.",
      tools: ["Figma", "Adobe XD", "Photoshop"]
    },
    {
      company: "Absensi Mahasiswa MSIB di Seameo Qitep in Language berbasis Web",
      role: "UI/UX Designer",
      duration: "Agustus – Desember 2023",
      description:
        "Mendesain antarmuka aplikasi absensi mahasiswa berbasis web untuk memudahkan pengelolaan data kehadiran.",
      tools: ["Figma", "Adobe XD", "Photoshop"]
    },
    {
      company: "Al-Qur'an Inspire",
      role: "UI/UX Designer",
      duration: "Januari – Maret 2023",
      description:
        "Mendesain antarmuka aplikasi Qur'an dengan fitur inspiratif dan interaktif.",
      tools: ["Figma", "Adobe XD", "Photoshop"]
    },
    {
      company: "Freelance – UI/UX Designer",
      role: "UI/UX Designer",
      duration: "Juli 2021 – Desember 2024",
      description:
        "Mendesain antarmuka aplikasi dan website dengan fokus pada kemudahan penggunaan.",
      tools: ["Figma", "Adobe XD", "Canva", "Photoshop"]
    }
  ];

  const gallery = galleryData;

  const handleSelectGallery = (index) => {
    setActiveGalleryIndex(index === activeGalleryIndex ? null : index);
  };

  const openModal = (img) => {
    setModalImage(img);
  };

  const closeModal = () => {
    setModalImage(null);
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
          <h3 className="text-xl font-semibold text-center mb-4 text-indigo-400">
            Detail Preview: {gallery[activeGalleryIndex].title}
          </h3>
          <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-600 px-2">
            {gallery[activeGalleryIndex].details.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Detail ${idx + 1}`}
                onClick={() => openModal(img)}
                className=" w-96 h-96 object-cover rounded-lg flex-shrink-0 cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </section>
      )}

      {/* Modal Fullscreen Preview */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Full Preview"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-950 text-center py-4 text-sm text-gray-500 mt-10">
        © 2025 Muhamad Halimudin Nova. All rights reserved.
      </footer>
    </div>
  );
}
