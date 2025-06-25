import React, { useState } from "react";

// UI/UX Project Gallery Data
const galleryData = [
  {
    title: "PT Shabi Lombok Bersaudara Website",
    image: "/shabi.png",
    description: "Interface design for job recruitment and PMI application website",
    details: ["/shabi/1.png", "/shabi/2.png", "/shabi/3.png", "/shabi/4.png", "/shabi/5.png", "/shabi/6.png"]},
  {
    title: "AkuSehat FKTP BPJS",
    image: "/fktp.png",
    description: "Integrated administration system design for FKTP",
    details: ["/fktp/1.png", "/fktp/2.png", "/fktp/3.png", "/fktp/4.png", "/fktp/6.png", "/fktp/5.png"]
  },
  {
    title: "MSIB Student Attendance",
    image: "/Seameo.png",
    description: "Web-based student attendance app interface design.",
    details: ["/seaqil/1.png", "/seaqil/2.png", "/seaqil/3.png", "/seaqil/4.png", "/seaqil/5.png", "/seaqil/6.png", "/seaqil/7.png", "/seaqil/8.png", "/seaqil/9.png", "/seaqil/10.png"]
  },
  {
    title: "Al-Qur'an Inspire",
    image: "/1.png",
    description: "Qur'an application design with innovative features.",
    details: ["/alquran/2.png", "/alquran/3.png", "/alquran/4.png", "/alquran/5.png", "/alquran/6.png", "/alquran/7.png", "/alquran/8.png", "/alquran/9.png", "/alquran/10.png"]
  },
  {
    title: "Freelance UI/UX Projects",
    image: "/freelance/cover.png",
    description: "Various UI/UX design projects for apps and websites.",
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
      duration: "December 2023 – Present",
      description:
        "Designed recruitment website from wireframe, prototype, to design validation.",
      tools: ["Figma", "Adobe XD", "Photoshop"]
    },
    {
      company: "Bidokkes Polda NTB",
      role: "UI/UX Designer",
      duration: "March – October 2024",
      description:
        "Designed UI for AkuSehat application, integrated with BPJS for FKTP admin system.",
      tools: ["Figma", "Adobe XD", "Photoshop"]
    },
    {
      company: "MSIB Student Attendance at SEAMEO QITEP in Language",
      role: "UI/UX Designer",
      duration: "August – December 2023",
      description:
        "Designed web-based student attendance interface for streamlined presence management.",
      tools: ["Figma", "Adobe XD", "Photoshop"]
    },
    {
      company: "Al-Qur'an Inspire",
      role: "UI/UX Designer",
      duration: "January – March 2023",
      description:
        "Designed Qur'an application with interactive and inspirational features.",
      tools: ["Figma", "Adobe XD", "Photoshop"]
    },
    {
      company: "Freelance – UI/UX Designer",
      role: "UI/UX Designer",
      duration: "July 2021 – December 2024",
      description:
        "Designed intuitive application and website interfaces with a focus on usability.",
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
                <strong>Description:</strong> {exp.description}
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
