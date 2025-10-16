{
  "name": "namanverma-clone-starter",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}

/* next.config.js */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["www.namanverma.com"],
  },
};

/* tailwind.config.js */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

/* postcss.config.js */
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };

/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #__next { height: 100%; }
body { font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }

/* pages/_app.tsx */
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

/* components/Header.tsx */
import Link from 'next/link';

export default function Header(){
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/10 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold">NV</div>
        <nav className="flex gap-6 text-sm text-white">
          <Link href="/">HOME</Link>
          <Link href="/galleries">GALLERIES</Link>
          <Link href="/stories">STORIES</Link>
          <Link href="/testimonials">TESTIMONIALS</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/enquire">ENQUIRE</Link>
        </nav>
      </div>
    </header>
  );
}

/* components/GalleryGrid.tsx */
import Image from 'next/image';

export default function GalleryGrid({ images }: { images: string[] }){
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {images.map((src,i)=> (
        <div key={i} className="aspect-[4/5] relative overflow-hidden">
          <Image src={src} alt={`img-${i}`} fill style={{objectFit:'cover'}} />
        </div>
      ))}
    </div>
  );
}

/* pages/index.tsx */
import Head from 'next/head';
import Header from '../components/Header';
import GalleryGrid from '../components/GalleryGrid';

const IMGS = [
  'https://www.namanverma.com/DSC_7323-2-2.jpg',
  'https://www.namanverma.com/DSC00135.jpg',
  'https://www.namanverma.com/Naman_Verma_Shotkit2.jpg',
  'https://www.namanverma.com/02_NVP_NIKKIKELVIN_WEDDING-1520-2 copy 2.jpg',
];

export default function Home(){
  return (
    <>
      <Head>
        <title>Naman Verma — Clone Starter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="min-h-screen bg-black text-white pt-24">
        <section className="max-w-6xl mx-auto p-6">
          <h1 className="text-4xl font-light mb-6">You Feel. I Focus. We Frame</h1>
          <p className="mb-6 text-sm max-w-2xl">A wedding is a validation coupled with the showcase of Love...</p>
          <GalleryGrid images={IMGS} />
        </section>
      </main>
    </>
  );
}

/* pages/galleries.tsx */
import Head from 'next/head';
import Header from '../components/Header';
import GalleryGrid from '../components/GalleryGrid';

export default function Galleries(){
  // replicate other gallery image list
  const IMGS = new Array(12).fill(0).map((_,i)=>`https://www.namanverma.com/DSC_7323-2-2.jpg`);
  return (
    <>
      <Head><title>Galleries</title></Head>
      <Header />
      <main className="min-h-screen bg-black text-white pt-24 max-w-6xl mx-auto p-6">
        <h2 className="text-3xl mb-6">GALLERIES</h2>
        <GalleryGrid images={IMGS} />
      </main>
    </>
  );
}

/* pages/about.tsx */
import Header from '../components/Header';

export default function About(){
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl mb-4">About</h2>
        <p className="text-sm">Short about copy — replace with real text.</p>
      </main>
    </div>
  );
}

/* pages/testimonials.tsx */
import Header from '../components/Header';

export default function Testimonials(){
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl mb-4">Testimonials</h2>
      </main>
    </div>
  );
}

/* pages/enquire.tsx */
import Header from '../components/Header';

export default function Enquire(){
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl mb-4">Enquire</h2>
        <form className="space-y-4">
          <input className="w-full p-3 bg-white/5 border" placeholder="Name" />
          <input className="w-full p-3 bg-white/5 border" placeholder="Email" />
          <textarea className="w-full p-3 bg-white/5 border" placeholder="Message" />
          <button className="px-6 py-3 border">Submit</button>
        </form>
      </main>
    </div>
  );
}
