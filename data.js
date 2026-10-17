// ============================================================
//  EDIT FILE INI SAJA untuk mengganti isi portofolio kamu.
//  Semua teks, proyek, pengalaman, dan link diambil dari sini.
// ============================================================

window.PORTFOLIO = {
  name: "Rizky Maolana Firdaus",
  nickname: "Rizky", // dipakai di "Halo, saya Rizky" dan logo
  role: "Backend Developer", // tampil di badge hero & footer
  headline: "Saya membangun sistem untuk web.",
  tagline:
    "Saya membangun website yang cepat, rapi, dan mudah digunakan — dari desain hingga produk yang siap dipakai.",
  passion: "Building things for the web", // tampil di kartu kode hero
  location: "Indonesia",
  email: "rizkymaulanafrds@gmail.com",
  phone: "", // contoh: "+62 812-3456-7890" — kosongkan jika tidak ingin ditampilkan
  cv: "", // contoh: "assets/cv.pdf" — kosongkan jika belum ada
  photo: "assets/poto.png", // paling bagus PNG berlatar transparan

  // icon = nama ikon dari https://devicon.dev (contoh: "html5", "react", "nodejs")
  // level = persentase untuk skill bar (0–100)
  skills: [
    { name: "HTML", icon: "html5", level: 90 },
    { name: "CSS", icon: "css3", level: 85 },
    { name: "JavaScript", icon: "javascript", level: 85 },
    { name: "Node.js", icon: "nodejs", level: 85 },
    { name: "Express.js", icon: "express", level: 80 },
    { name: "PostgreSQL", icon: "postgresql", level: 75 },
    { name: "React", icon: "react", level: 70 },
    { name: "Tailwind CSS", icon: "tailwindcss", level: 80 },
    { name: "Git & GitHub", icon: "git", level: 80 },
  ],

  about: {
    title: "Saya senang membangun solusi digital",
    text: [
      "Halo! Saya Rizky Maolana Firdaus, seorang developer yang senang mengubah ide menjadi tampilan web yang bersih dan fungsional.",
      "Saya percaya produk yang baik bukan hanya terlihat bagus, tetapi juga nyaman digunakan. Karena itu saya selalu memperhatikan detail, performa, dan pengalaman pengguna di setiap proyek.",
    ],
  },

  // Kartu angka di bagian About. icon: "calendar" | "code" | "smile" | "trophy"
  // Kosongkan [] jika tidak ingin ditampilkan.
  stats: [
    // { value: "3+", label: "Tahun Pengalaman", icon: "calendar" },
    // { value: "10+", label: "Proyek Selesai", icon: "code" },
  ],

  projects: [
    {
      title: "Website E-Ticket",
      category: "Web Development",
      year: "2023",
      description: "Website pemesanan tiket pesawat.",
      // Bisa lebih dari 1 gambar — gambar pertama jadi tampilan utama
      images: [
        "assets/syura-1.png",
        "assets/syura-2.png",
        "assets/syura-3.png",
        "assets/syura-4.png",
        "assets/syura-5.png",
        "assets/syura-6.png",
        "assets/syura-7.png",
      ],
      tags: ["HTML", "Tailwind", "JavaScript", "NodeJS", "PostgreSql", "ExpressJs"],
      demo: "#",
      repo: "#",
    },
    {
      title: "Aplikasi Manajemen Tugas",
      category: "Web App",
      year: "2025",
      description:
        "Aplikasi to-do sederhana dengan fitur kategori, filter, dan penyimpanan lokal.",
      image: "",
      tags: ["React", "CSS"],
      demo: "#",
      repo: "#",
    },
    {
      title: "Redesign Landing Page",
      category: "UI/UX",
      year: "2025",
      description:
        "Redesign landing page untuk meningkatkan keterbacaan informasi dan konversi pengunjung.",
      image: "",
      tags: ["Figma", "UI Design"],
      demo: "#",
      repo: "",
    },
  ],

  experience: [
    {
      period: "2025 — Sekarang",
      title: "Freelance Web Developer",
      place: "Remote",
      description:
        "Membangun website untuk klien UMKM dan personal branding, dari desain hingga deploy.",
    },
    {
      period: "2023",
      title: "Proyek Kelompok — Backend Javascript",
      place: "Bootcamp Binar Academy",
      description: "Bertanggung jawab pada sisi back-end.",
    },
  ],

  education: [
    {
      period: "2026",
      title: "S1 Teknik Informatika",
      place: "Universitas Pamulang",
      description: "Fokus pada pengembangan web dan rekayasa perangkat lunak.",
    },
  ],

  // Testimoni di bagian Contact. Isi null jika belum ada.
  testimonial: null,
  // contoh:
  // testimonial: {
  //   quote: "Rizky developer yang teliti dan selalu tepat waktu.",
  //   name: "Nama Orang",
  //   role: "Jabatan, Perusahaan",
  //   photo: "assets/testimoni.jpg",
  // },

  // label yang dikenali ikonnya: GitHub, LinkedIn, Instagram, Twitter, X
  socials: [
    { label: "GitHub", url: "https://github.com/rizky-mf" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/rizky-maolana-firdaus/" },
    { label: "Instagram", url: "https://www.instagram.com/rizkymaulanafrds/" },
  ],
};
