import React, { useEffect, useRef, useState } from "react";

const socialLinks = [
  { name: "X", href: "https://x.com/Richardx122", icon: "𝕏" },
  { name: "GitHub", href: "https://github.com/Richard12021", icon: "GH" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/quoc-vu-le-985135228/", icon: "IN" },
];

const artImages = Array.from({ length: 16 }, (_, i) => `/art/art-${i + 1}.jpg`);

const featuredProjects = [
  {
    name: "ArcSub",
    tag: "Stablecoin Subscription Payments",
    desc: "A subscription payment dApp built around recurring stablecoin payments, merchant plans, coupons, trials, grace periods, and multi-token support.",
    demo: "https://richard12021.github.io/Arcsubb/",
    github: "https://github.com/Richard12021/ArcsubV3",
  },
  {
    name: "Concrete Yield Ladder",
    tag: "DeFi Vault Strategy",
    desc: "A DeFi concept focused on auto-rollover yield strategies, vault infrastructure, capital efficiency, and sustainable onchain yield.",
    demo: "https://richard12021.github.io/concrete/",
    github: "https://github.com/Richard12021/concrete",
  },
  {
    name: "Seismic Adventure Game",
    tag: "Encrypted Blockchain Community",
    desc: "Community content, memes, testnet education, and ecosystem awareness around Seismic's privacy-focused blockchain narrative.",
    demo: "https://richard12021.github.io/seismic/",
    github: "https://github.com/Richard12021/seismic",
  },
];

const text = {
  en: {
    tag: "Web3 Profile",
    title: "Hello. I'm Richard",
    subtitle: "Fulltime web3. Researcher & Moderator",
    desc: "I help web3 projects build stronger communities, support users, research ecosystems, and communicate complex ideas in a simple way.",
    connect: "Connect with me",
    aboutTitle: "About me",
    about:
      "I am a fulltime Researcher and Moderator in the web3 space, with active involvement since 2021. Over the years, I have gained extensive experience in community management, user support, and project research within the blockchain ecosystem.",
    modTitle: "Moderator/Ambassador/Contributor",
    mod:
      "I have worked as a Moderator for several well known web3 projects, including ZkSync, Starknet, Arbitrum, Orbiter, and Rialo, where I was responsible for maintaining community engagement, resolving user issues, and ensuring a positive and informative environment.",
    artTitle: "My art",
    artDesc: "A collection of digital artworks, memes, and creative Web3 artwork I have created.",
  },
  vi: {
    tag: "Hồ sơ Web3",
    title: "Xin chào. Tôi là Richard",
    subtitle: "Fulltime web3. Researcher & Moderator",
    desc: "Tôi giúp các dự án Web3 xây dựng cộng đồng mạnh hơn, hỗ trợ người dùng, nghiên cứu hệ sinh thái và truyền tải những ý tưởng phức tạp theo cách đơn giản.",
    connect: "Kết nối với tôi",
    aboutTitle: "Giới thiệu",
    about:
      "Tôi là một Researcher và Moderator fulltime trong lĩnh vực Web3, hoạt động tích cực từ năm 2021. Trong nhiều năm qua, tôi đã tích lũy nhiều kinh nghiệm về quản lý cộng đồng, hỗ trợ người dùng và nghiên cứu dự án trong hệ sinh thái blockchain.",
    modTitle: "Moderator/Ambassador/Contributor",
    mod:
      "Tôi đã từng làm Moderator cho nhiều dự án Web3 nổi bật như ZkSync, Starknet, Arbitrum, Orbiter và Rialo. Công việc của tôi bao gồm duy trì sự tương tác cộng đồng, giải quyết vấn đề của người dùng và xây dựng môi trường tích cực, hữu ích.",
    artTitle: "My art",
    artDesc: "Bộ sưu tập các hình ảnh kĩ thuật số, meme và artwork Web3 mà tôi đã tạo.",
  },
};

export default function App() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState("en");
  const [musicOn, setMusicOn] = useState(false);
const bgMusicRef = useRef(null);
const clickSoundRef = useRef(null);
  const [visitors, setVisitors] = useState(0);

  const t = text[lang];

  const playClickSound = () => {
  if (clickSoundRef.current) {
    clickSoundRef.current.currentTime = 0;
    clickSoundRef.current.play().catch(() => {});
  }
};

const toggleMusic = () => {
  playClickSound();

  if (!bgMusicRef.current) return;

  if (musicOn) {
    bgMusicRef.current.pause();
  } else {
    bgMusicRef.current.volume = 0.35;
    bgMusicRef.current.play().catch(() => {});
  }

  setMusicOn(!musicOn);
};

  useEffect(() => {
  fetch("/api/visitors")
    .then((res) => res.json())
    .then((data) => setVisitors(data.visitors))
    .catch(() => setVisitors(0));
}, []);

  return (
    <main className={`min-h-screen transition ${dark ? "bg-[#07070b] text-white" : "bg-[#f4fbff] text-[#101014]"}`}>
      <audio ref={bgMusicRef} loop>
  <source src="/audio/bg-music.mp3" type="audio/mpeg" />
</audio>

<audio ref={clickSoundRef}>
  <source src="/audio/click.mp3" type="audio/mpeg" />
</audio>
      <style>
  {`
    @keyframes marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 25s linear infinite;
    }
  `}
</style>

      <div className="fixed right-6 top-6 z-50 flex gap-3">
        <button
          onClick={() => setLang(lang === "en" ? "vi" : "en")}
          className={`rounded-full px-4 py-2 text-sm font-bold shadow-lg ${
            dark ? "bg-white/10 text-white" : "bg-white text-black"
          }`}
        >
          {lang === "en" ? "EN" : "VI"}
        </button>

        <button
          onClick={() => setDark(!dark)}
          className={`rounded-full px-4 py-2 text-xl shadow-lg ${
            dark ? "bg-white/10 text-white" : "bg-white text-black"
          }`}
        >
          🌙
        </button>

        <button
  onClick={toggleMusic}
  className={`rounded-full px-4 py-2 text-sm font-bold shadow-lg ${
    dark ? "bg-white/10 text-white" : "bg-white text-black"
  }`}
>
  {musicOn ? "🔊" : "🔇"}
</button>
      </div>

      <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:justify-between md:px-12 lg:px-20">
        <div className="max-w-2xl text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            {t.tag}
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            {t.title}
          </h1>

          <p className={`mt-5 text-2xl font-semibold md:text-3xl ${dark ? "text-white/75" : "text-black/70"}`}>
            {t.subtitle}
          </p>

          <p className={`mt-6 max-w-xl text-lg leading-8 ${dark ? "text-white/55" : "text-black/60"}`}>
  {t.desc}
</p>

<p
  className={`mt-4 text-sm font-semibold ${
    dark ? "text-cyan-300" : "text-cyan-600"
  }`}
>
  Visitors: {visitors}
</p>
        </div>

        <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-br from-cyan-300/20 via-white/10 to-violet-500/20 shadow-[0_0_80px_rgba(34,211,238,0.25)] md:h-96 md:w-96">
          <div className="absolute inset-5 rounded-full border border-white/20" />
          <img
            src="/mascot.jpg"
            alt="Richard mascot"
            className="relative z-10 h-56 w-56 rounded-full object-cover md:h-72 md:w-72"
          />
        </div>
      </section>

      <section className="w-full overflow-hidden py-6">
  <div
    className={`border-y py-4 ${
      dark
        ? "border-white/10 bg-white/[0.06]"
        : "border-black/10 bg-white"
    }`}
  >
    <div className="marquee-track text-2xl font-black uppercase tracking-wide text-cyan-400">
      {Array.from({ length: 8 }).map((_, index) => (
        <span key={index} className="whitespace-nowrap px-10">
          Moderator <span className="mx-6">•</span>
          Ambassador <span className="mx-6">•</span>
          Contributor <span className="mx-6">•</span>
          NFT <span className="mx-6">•</span>
          Meme <span className="mx-6">•</span>
        </span>
      ))}
    </div>
  </div>
</section>

<section className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:px-20">
  <div className="mb-8">
    <h2 className="text-3xl font-black">Featured Projects</h2>
    <p className={`mt-3 ${dark ? "text-white/55" : "text-black/55"}`}>
      Selected Web3 projects, dApps, and ecosystem work I have contributed to.
    </p>
  </div>

  <div className="grid gap-5 md:grid-cols-2">
    {featuredProjects.map((project) => (
      <div
        key={project.name}
        className={`rounded-[2rem] border p-6 transition hover:-translate-y-1 ${
          dark
            ? "border-white/10 bg-white/[0.06]"
            : "border-black/10 bg-white"
        }`}
      >
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
          {project.tag}
        </p>

        <h3 className="text-2xl font-black">{project.name}</h3>

        <p className={`mt-4 leading-7 ${dark ? "text-white/60" : "text-black/60"}`}>
          {project.desc}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-black"
          >
            View Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`rounded-xl border px-5 py-3 text-sm font-bold ${
              dark
                ? "border-white/10 text-white"
                : "border-black/10 text-black"
            }`}
          >
            GitHub
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:px-20">
  <div className={`rounded-[2rem] border p-8 md:p-10 ${dark ? "border-white/10 bg-white/[0.06]" : "border-black/10 bg-white"}`}>
    <h2 className="text-3xl font-black">Contact me</h2>

    <form
      action="https://formspree.io/f/xzdqbkpy"
      method="POST"
      className="mt-6 grid gap-4"
    >
      <input
        name="name"
        placeholder="Your name"
        required
        className="rounded-2xl border border-black/10 p-4 text-black"
      />

      <input
        name="email"
        type="email"
        placeholder="Your email"
        required
        className="rounded-2xl border border-black/10 p-4 text-black"
      />

      <textarea
        name="message"
        placeholder="Your message"
        required
        rows="5"
        className="rounded-2xl border border-black/10 p-4 text-black"
      />

      <button
        type="submit"
        className="rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-black"
      >
        Send message
      </button>
    </form>
  </div>
</section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:px-20">
        <div className={`rounded-[2rem] border p-8 ${dark ? "border-white/10 bg-white/[0.06]" : "border-black/10 bg-white"}`}>
          <h2 className="text-3xl font-black">{t.connect}</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {socialLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center justify-between rounded-2xl border p-5 transition ${
                  dark
                    ? "border-white/10 bg-black/20 text-white/75 hover:border-cyan-300/40 hover:text-white"
                    : "border-black/10 bg-black/[0.03] text-black/70 hover:border-cyan-400 hover:text-black"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${dark ? "bg-white/10" : "bg-black/10"}`}>
                    {icon}
                  </span>
                  {name}
                </span>
                <span className="opacity-40 transition group-hover:opacity-100">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:px-20">
        <div className={`rounded-[2rem] border p-8 md:p-10 ${dark ? "border-white/10 bg-white/[0.06]" : "border-black/10 bg-white"}`}>
          <h2 className="text-3xl font-black">{t.aboutTitle}</h2>
          <p className={`mt-5 max-w-4xl text-lg leading-8 ${dark ? "text-white/65" : "text-black/65"}`}>
            {t.about}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:px-20">
        <div className={`rounded-[2rem] border p-8 md:p-10 ${dark ? "border-white/10 bg-white/[0.06]" : "border-black/10 bg-white"}`}>
          <h2 className="text-3xl font-black">{t.modTitle}</h2>
          <p className={`mt-5 max-w-4xl text-lg leading-8 ${dark ? "text-white/65" : "text-black/65"}`}>
            {t.mod}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 pb-20 md:px-12 lg:px-20">
        <div className="mb-8">
          <h2 className="text-3xl font-black">{t.artTitle}</h2>
          <p className={`mt-3 ${dark ? "text-white/55" : "text-black/55"}`}>
            {t.artDesc}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {artImages.map((src, index) => (
            <div key={src} className={`overflow-hidden rounded-3xl border p-3 ${dark ? "border-white/10 bg-white/[0.06]" : "border-black/10 bg-white"}`}>
              <img
                src={src}
                alt={`Richard art ${index + 1}`}
                className="h-64 w-full rounded-2xl object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}