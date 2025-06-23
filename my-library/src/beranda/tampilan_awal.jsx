import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PortfolioNova() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [expandedSection, setExpandedSection] = useState(null);

  const projects = [
    {
      title: "PT SHABI LOMBOK BERSAUDARA",
      desc: "Website untuk informasi lowongan kerja luar negeri & pendaftaran pekerja migran.",
      tools: ["Figma", "Photoshop", "VSCode"],
      tech: ["UI Design", "UX Design", "React JS"],
      url: "https://www.Shabilombokbersaudara.com",
    },
    {
      title: "AkuSehat",
      desc: "Website administrasi FKTP terintegrasi BPJS untuk manajemen data pasien.",
      tools: ["Figma", "Photoshop", "VSCode"],
      tech: ["UI Design", "UX Design", "React JS"],
      url: "https://www.AkuSehat.com",
    },
    {
      title: "Al-Qur’an Inspire",
      desc: "Aplikasi Qur'an untuk kompetisi MTQM dengan perbaikan fitur & UX.",
      tools: ["Figma", "Photoshop"],
      tech: ["UI Design", "UX Design"],
    },
  ];

  const experienceData = {
    "UI/UX Designer": [
      {
        org: "PT Shabi Lombok Bersaudara",
        duration: "2023 – Sekarang",
        tools: "Figma, Adobe XD",
        desc: "Merancang tampilan website rekrutmen pekerja migran (PMI) dari wireframe, prototipe hingga validasi desain.",
      },
      {
        org: "Freelance – UMKM Lokal",
        duration: "2023 – 2024",
        tools: "Figma, Canva, Notion",
        desc: "Mendesain antarmuka aplikasi dan website UMKM lokal dengan fokus pada kemudahan penggunaan.",
      },
    ],
    "Front-End Developer": [
      {
        org: "Bidokkes Polda NTB",
        duration: "2022 – 2023",
        tools: "React JS, Tailwind CSS",
        desc: "Membangun dashboard kesehatan digital internal untuk pengelolaan data tim medis kepolisian.",
      },
    ],
    "Media Sosial & Branding Intern": [
      {
        org: "SEAMEO QITEP in Language",
        duration: "2021 (6 bulan)",
        tools: "Canva, Meta Business Suite",
        desc: "Membuat konten promosi edukatif di media sosial lembaga pendidikan regional Asia Tenggara.",
      },
    ],
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-10 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Muhamad Halimudin Nova</h1>
        <p className="text-xl">UI/UX Designer</p>
        <p className="mt-2 text-sm">Graduate of Informatics Engineering - University of Mataram</p>
      </header>

      {/* About Me */}
      <section className="px-6 py-12 max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-6 text-center">About Me</h2>
        <p className="text-center leading-relaxed text-lg max-w-3xl mx-auto">
          I design responsive, user-centered web and mobile interfaces. Experienced in academic, freelance,
          and organizational projects. Improved user satisfaction by up to 80% and team productivity by 70%.
          Passionate about creating impactful and inclusive digital solutions.
        </p>
      </section>

      {/* Projects */}
      <section className="bg-white py-12 px-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((proj, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="mb-3 text-sm text-gray-700">{proj.desc}</p>
              <p className="text-xs text-gray-500 mb-1">Tools: {proj.tools.join(", ")}</p>
              <p className="text-xs text-gray-500 mb-2">Tech: {proj.tech.join(", ")}</p>
              {proj.url && (
                <a
                  href={proj.url}
                  className="text-indigo-600 text-sm underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white py-12 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center mb-12">Experience</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(experienceData).map(([title, items], idx) => {
            const isOpen = expandedSection === title;
            return (
              <div
                key={idx}
                className="bg-gray-100 relative p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer min-h-[220px] overflow-hidden"
                onClick={() => setExpandedSection(isOpen ? null : title)}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">
                  {isOpen ? "Sembunyikan Detail" : "Tampilkan Detail"}
                </p>
                <div
                  className={`absolute left-0 top-0 w-full h-full bg-gray-100 p-6 rounded-2xl transition-opacity duration-300 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                  } overflow-y-auto z-10`}
                >
                  <div onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-indigo-600 mb-4 cursor-pointer" onClick={() => setExpandedSection(null)}>
                      Tutup Detail
                    </p>
                    {items.map((item, i) => (
                      <div key={i} className="mt-2 border-t pt-4 text-sm text-gray-700">
                        <p className="font-semibold">{item.org}</p>
                        <p className="italic text-xs text-gray-500 mb-1">{item.duration}</p>
                        <p className="text-xs text-gray-600">
                          <strong>Tools:</strong> {item.tools}
                        </p>
                        <p className="text-xs text-gray-600">
                          <strong>Deskripsi:</strong> {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-6 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
        <p className="mb-4">Get in touch so we can talk more</p>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition">
          Contact Me
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © 2025 Muhamad Halimudin Nova. All rights reserved.
      </footer>
    </div>
  );
}
