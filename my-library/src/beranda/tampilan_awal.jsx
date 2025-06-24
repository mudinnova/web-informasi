import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const toolIcons = {};

export default function PortfolioNova() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const projects = [
    {
      title: "PT SHABI LOMBOK BERSAUDARA",
      desc: "Website untuk informasi lowongan kerja luar negeri & pendaftaran pekerja migran.",
      tools: ["Figma", "Photoshop", "VSCode"],
      tech: ["UI Design", "UX Design", "React JS", " Tailwind CSS"],
      url: "https://www.Shabilombokbersaudara.com",
    },
    {
      title: "AkuSehat",
      desc: "Website administrasi FKTP terintegrasi BPJS untuk manajemen data pasien.",
      tools: ["Figma", "Photoshop", "VSCode"],
      tech: ["UI Design", "UX Design", "React JS", " Tailwind CSS"],
      url: "https://www.AkuSehat.com",
    },
    {
      title: "Al-Qur’an Inspire",
      desc: "Aplikasi Qur'an untuk kompetisi MTQM dengan perbaikan fitur & UX.",
      tools: ["Figma", "Photoshop"],
      tech: ["UI Design", "UX Design"],
    },
  ];

  const tools = [
    "Figma", "Adobe XD", "Photoshop", "Canva", "VSCode", "Tailwind CSS", "React JS", "Illustrator", "Capcut", "Filmora"
  ];

  return (
    <div className="bg-gray-900 text-white font-sans">
      <header className="relative text-white py-20 px-6 overflow-hidden">
        {/* Background image with blur and opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 blur-sm"
          style={{ backgroundImage: "url('/LinkedIn.png')" }}
        ></div>

        {/* Overlay content */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-6xl font-bold mb-4">Muhamad Halimudin Nova</h1>
            <p className="text-xl">UI/UX Designer | Front-End Developer | Social Media </p>
            <p className="mt-2 text-sm">
              Graduate of Informatics Engineering - University of Mataram
            </p>
            <div className="mt-4">
              <a
                href="/cv/Muhamad Halimudin Nova.pdf"
                download
                className="inline-block px-4 py-2 bg-indigo-700 text-white rounded-full hover:bg-indigo-900"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/2 flex justify-center items-end mt-3 md:mt-0">
            <img
              src="/nova.png"
              alt="Muhamad Halimudin Nova"
              className="w-96 h-auto rounded-xl object-cover"
              style={{ marginBottom: "-6rem" }} // agar lebih turun
            />
          </div>
        </div>
      </header>


      {/* About */}
      <section className="px-6 py-12 max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-6 text-center">About Me</h2>
        <p className="text-center leading-relaxed text-lg max-w-3xl mx-auto">
          I design responsive, user-centered web and mobile interfaces. Experienced in academic, freelance,
          and organizational projects. Improved user satisfaction by up to 80% and team productivity by 70%.
          Passionate about creating impactful and inclusive digital solutions.
        </p>
      </section>

      {/* Tools */}
      <section className="py-12 px-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-center mb-6">Tools I Use</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="flex items-center gap-2 bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 px-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((proj, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-white">{proj.title}</h3>
              <p className="mb-3 text-sm text-gray-300">{proj.desc}</p>
              <p className="text-xs text-gray-400 mb-1">Tools: {proj.tools.join(", ")}</p>
              <p className="text-xs text-gray-400 mb-2">Tech: {proj.tech.join(", ")}</p>
              {proj.url && (
                <a
                  href={proj.url}
                  className="text-indigo-400 text-sm underline"
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
      <section className="py-12 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center mb-12">Experience</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div onClick={() => navigate("/UI/UXDesigner")} className="cursor-pointer bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-white">UI/UX Designer</h3>
            <p className="text-sm text-gray-400">Klik untuk lihat detail</p>
          </div>
          <div onClick={() => navigate("/Front-End")} className="cursor-pointer bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-white">Front-End Developer</h3>
            <p className="text-sm text-gray-400">Klik untuk lihat detail</p>
          </div>
          <div onClick={() => navigate("/Medsos")} className="cursor-pointer bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-white">Media Sosial & Branding Intern</h3>
            <p className="text-sm text-gray-400">Klik untuk lihat detail</p>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-12 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center mb-8">Achievements & Certifications</h2>
        <div className="max-w-5xl mx-auto space-y-6 text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-white">
              <li>
                🏆 Juara 2 MTQ Mahasiswa Nasional – Desain Aplikasi Komputer Al-Qur’an (2023)
              </li>
              <li>
                🥉 Juara 3 Lomba Fotografi Nasional Stikzarfest (2023)
              </li>
              <li>
                🎓 Sertifikat UI/UX Design – Rakamin.ID
              </li>
              <li>
                🎤 Speaker at Mandalika International MultiConference on Science and Engineering
              </li>
              <li>
                📜 Sertifikat MSIB Magang Web Design – SEAMEO QITEP in Language
              </li>
            </ul>

          </ul>
        </div>
      </section>

      {/* Language Skills */}
      <section className="py-12 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center mb-8">Language Proficiency</h2>
        <div className="flex flex-col items-center text-gray-300">
          <ul className="list-none space-y-2 text-center">
            <li>🇮🇩 Bahasa Indonesia – Native</li>
            <li>🇬🇧 English – Intermediate (Conversational & Writing)</li>
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

<footer className="bg-gray-800 text-center py-4 text-sm text-gray-400">
  © 2025 Muhamad Halimudin Nova. All rights reserved.
</footer>

    </div>
  );
}
