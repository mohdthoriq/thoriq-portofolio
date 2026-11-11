export const TRANSLATIONS = {
  EN: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume',
      contactMe: 'Contact Me',
    },
    hero: {
      role: 'Software Developer',
      greeting: "HI, I'M",
      tagline: 'I Create Digital Solutions with Passion.',
      description:
        'I am a software developer specializing in building modern web & mobile applications. Focused on developing efficient, accessible, and scalable digital solutions from concept to deployment.',
      viewWork: 'View My Work',
      exploreAbout: 'About Me',
      years: '1+ Years',
      experienceBadge: 'Experience',
    },
    about: {
      title: 'About Me',
      p1: 'Hello! My name is Muhammad Thoriq. I am a software developer with a strong focus on building responsive, interactive, and user-friendly web and mobile applications.  with primary expertise in React, Next.js, React Native, TypeScript, and modern styling with Tailwind CSS, alongside Node.js for backend services.',
      p2: 'Currently, my day-to-day work involves creating practical digital products such as hotel reservation platforms, supply chain management systems (SCM), and responsive eCommerce point-of-sale apps. I take pride in writing maintainable code, integrating APIs smoothly, and delivering pleasant user experiences.',
      experienceCard: {
        years: '1+ Years',
        title: 'Development Experience',
        desc: 'Actively building web solutions & mentoring junior developers',
      },
      skillsCard: {
        title: 'Core Stack',
        desc: 'React, Next.js, Node.js, TypeScript & Tailwind CSS',
      },
    },
    skills: {
      title: 'Skills & Technologies',
      description: "Here are a few technologies and tools I've been working with recently:",
      highlights: {
        frontend: 'Frontend & Mobile Development',
        backend: 'Backend & RESTful APIs',
        modern: 'Modern Web Architectures',
      },
    },
    experience: {
      title: 'My Experiences',
      description: 'My professional journey, teaching background, and work experience:',
      present: 'Present',
    },
    projects: {
      title: 'Featured Projects',
      description: "A showcase of applications and digital solutions I've developed:",
      livePreview: 'Live Preview',
      detailsComingSoon: 'Project details coming soon...',
    },
    footer: {
      collab: 'Open for Collaboration',
      headline1: "LET'S BUILD SOMETHING",
      headline2: 'GREAT',
      headline3: 'TOGETHER.',
      description:
        "I'm always open to collaboration, new projects, or just chatting about technology. Don't hesitate to say hello!",
      sayHello: 'Say Hello via Email',
      getInTouch: 'Get In Touch',
      location: 'Bogor, Jawa Barat, Indonesia',
      socials: 'Socials',
      rights: 'ALL RIGHTS RESERVED',
      builtWith: 'Built with React & Vite',
    },
  },
  ID: {
    nav: {
      about: 'Tentang',
      skills: 'Keahlian',
      experience: 'Pengalaman',
      projects: 'Proyek',
      contact: 'Kontak',
      resume: 'Resume',
    },
    hero: {
      role: 'Software Developer',
      greeting: 'HALO, SAYA',
      tagline: 'Menciptakan Solusi Digital dengan Penuh Antusias.',
      description:
        'Saya adalah seorang software developer yang berfokus membangun aplikasi web & mobile modern. Berdedikasi menghadirkan solusi digital yang efisien, mudah diakses, dan scalable dari tahap perancangan hingga deployment.',
      viewWork: 'Lihat Karya Saya',
      exploreAbout: 'Tentang Saya',
      years: '1+ Tahun',
      experienceBadge: 'Pengalaman',
    },
    about: {
      title: 'Tentang Saya',
      p1: 'Halo! Nama saya Muhammad Thoriq. Saya adalah seorang software developer yang berfokus pada pengembangan aplikasi web dan mobile yang responsif, interaktif, dan nyaman digunakan. Dengan keahlian utama pada React, Next.js, React Native, TypeScript, styling modern dengan Tailwind CSS, serta Node.js untuk integrasi layanan backend.',
      p2: 'Saat ini, aktivitas saya berpusat pada pembuatan produk digital praktis seperti sistem reservasi kamar hotel, manajemen rantai pasok (SCM) gudang, dan aplikasi point of sale e-commerce. Saya berfokus pada penulisan kode yang mudah dipelihara, integrasi API yang lancar, serta menghadirkan pengalaman pengguna yang cepat dan andal.',
      experienceCard: {
        years: '1+ Tahun',
        title: 'Pengalaman Pengembangan',
        desc: 'Aktif membangun solusi web dan menjadi mentor web development',
      },
      skillsCard: {
        title: 'Tech Stack Utama',
        desc: 'React, Next.js, Node.js, TypeScript & Tailwind CSS',
      },
    },
    skills: {
      title: 'Keahlian & Teknologi',
      description: 'Berikut beberapa teknologi dan tools yang aktif saya gunakan belakangan ini:',
      highlights: {
        frontend: 'Pengembangan Frontend & Mobile',
        backend: 'Backend & RESTful API',
        modern: 'Arsitektur Web Modern',
      },
    },
    experience: {
      title: 'Pengalaman Saya',
      description: 'Riwayat perjalanan profesional, pengajaran, dan pengalaman kerja saya:',
      present: 'Sekarang',
    },
    projects: {
      title: 'Proyek Unggulan',
      description: 'Kumpulan aplikasi dan solusi digital yang telah saya rancang dan kembangkan:',
      livePreview: 'Lihat Proyek',
      detailsComingSoon: 'Detail proyek segera hadir...',
    },
    footer: {
      collab: 'Terbuka untuk Kolaborasi',
      headline1: 'MARI BANGUN KARYA',
      headline2: 'HEBAT',
      headline3: 'BERSAMA.',
      description:
        'Saya selalu terbuka untuk kolaborasi, proyek baru, atau sekadar berbincang seputar teknologi. Jangan ragu untuk menyapa!',
      sayHello: 'Sapa Saya lewat Email',
      getInTouch: 'Hubungi Saya',
      location: 'Bogor, Jawa Barat, Indonesia',
      socials: 'Media Sosial',
      rights: 'HAK CIPTA DILINDUNGI',
      builtWith: 'Dibuat dengan React & Vite',
    },
  },
} as const;

export const PROJECTS_DATA = {
  EN: [
    {
      id: 1,
      title: 'Hotel Multazam',
      description:
        'An online hotel reservation and room booking system featuring real-time room availability tracking, room type management, and secure payment processing.',
      image: 'https://res.cloudinary.com/djls97ux0/image/upload/v1793239620/portfolio/image1.png',
      tags: ['Node.js', 'React.js'],
      link: 'https://hotel-multazam.vercel.app',
    },
    {
      id: 2,
      title: 'scm manajemen',
      description:
        'A comprehensive Supply Chain Management (SCM) system designed for warehouse efficiency, featuring inventory flow tracking, inbound/outbound logistics logs, and automated stock reporting.',
      image: 'https://res.cloudinary.com/djls97ux0/image/upload/v1793239621/portfolio/image2.png',
      tags: ['Next.js'],
      link: 'https://scm-manajemen.vercel.app',
    },
    {
      id: 3,
      title: 'Shop-cart',
      description:
        'A responsive Point of Sale (POS) and e-commerce web platform equipped with an interactive shopping cart, instant transaction calculations, and seamless product catalog management.',
      image: 'https://res.cloudinary.com/djls97ux0/image/upload/v1793239623/portfolio/image3.png',
      tags: ['react.js'],
      link: 'https://shop-cart-ten-sable.vercel.app',
    },
    {
      id: 4,
      title: 'Finup',
      description:
        'An interactive financial management dashboard that provides insightful visualizations of spending patterns, user expense trend analytics, and structured cash flow summaries.',
      image: 'https://res.cloudinary.com/djls97ux0/image/upload/v1794294707/dashboard-finup_kjygfs.webp',
      tags: ['Next.js'],
      link: 'https://financiallevelup.vercel.app',
    },
  ],
  ID: [
    {
      id: 1,
      title: 'Hotel Multazam',
      description:
        'Sistem reservasi dan pemesanan kamar hotel online dengan pemantauan ketersediaan kamar secara real-time, manajemen tipe kamar, dan integrasi transaksi pembayaran yang aman.',
      image: 'https://res.cloudinary.com/djls97ux0/image/upload/v1793239620/portfolio/image1.png',
      tags: ['Node.js', 'React.js'],
      link: 'https://hotel-multazam.vercel.app',
    },
    {
      id: 2,
      title: 'scm manajemen',
      description:
        'Sistem Supply Chain Management (SCM) untuk efisiensi operasional pergudangan, mencakup pelacakan arus inventaris, logistik masuk/keluar, dan laporan stok otomatis.',
      image: 'https://res.cloudinary.com/djls97ux0/image/upload/v1793239621/portfolio/image2.png',
      tags: ['Next.js'],
      link: 'https://scm-manajemen.vercel.app',
    },
    {
      id: 3,
      title: 'Shop-cart',
      description:
        'Aplikasi Point of Sale (POS) dan e-commerce berbasis web dengan keranjang belanja interaktif, kalkulasi transaksi otomatis, dan manajemen katalog produk yang responsif.',
      image: 'https://res.cloudinary.com/djls97ux0/image/upload/v1793239623/portfolio/image3.png',
      tags: ['react.js'],
      link: 'https://shop-cart-ten-sable.vercel.app',
    },
    {
      id: 4,
      title: 'Finup',
      description:
        'Dashboard manajemen keuangan interaktif yang menyajikan visualisasi data pengeluaran, analisis tren finansial pengguna, serta ringkasan arus kas secara terstruktur dan informatif.',
      image: 'https://res.cloudinary.com/djls97ux0/image/upload/v1794294707/dashboard-finup_kjygfs.webp',
      tags: ['Next.js'],
      link: 'https://financiallevelup.vercel.app',
    },
  ],
};

export const COMPANY_EXPERIENCES_DATA = {
  EN: [
    {
      company: 'Pondok IT',
      link: 'https://pondokit.com',
      jobs: [
        {
          role: 'Asst-Mentor',
          type: 'On-site · Contract',
          period: 'July 2026 — Present',
          duration: '11 mos',
          location: 'Bantul Regency, Yogyakarta, Indonesia',
          description: [
            'Guiding students in learning web development from fundamentals to developing real-world projects.',
          ],
        },
      ],
    },
  ],
  ID: [
    {
      company: 'Pondok IT',
      link: 'https://pondokit.com',
      jobs: [
        {
          role: 'Asst-Mentor',
          type: 'On-site · Kontrak',
          period: 'Juli 2026 — Sekarang',
          duration: '11 bln',
          location: 'Kabupaten Bantul, D.I. Yogyakarta, Indonesia',
          description: [
            'Membimbing para santri belajar pengembangan web dari materi dasar hingga membangun proyek di dunia nyata.',
          ],
        },
      ],
    },
  ],
};

