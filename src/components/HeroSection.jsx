import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center bg-white text-black px-4 sm:px-8 lg:px-16 overflow-x-hidden">
      <header className="fixed top-0 left-0 w-full flex justify-between items-center bg-white shadow-md px-6 sm:px-12 lg:px-16 py-2 sm:py-4 text-black z-50">
        <button className="text-black text-xl p-2 sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu />
        </button>
        
        <nav className="hidden sm:flex flex-grow justify-center">
          <ul className="flex flex-row space-x-6 md:space-x-10 text-base sm:text-lg font-semibold uppercase tracking-widest">
            <li><a href="https://drive.google.com/drive/folders/1VoNoKGUAUS_iuV0MGnvWgLISWiTUY7dT?usp=sharing" target="_blank" className="text-black hover:underline underline-offset-8 transition">Photo Gallery</a></li>
            <li><a href="https://drive.google.com/drive/folders/1VoNoKGUAUS_iuV0MGnvWgLISWiTUY7dT?usp=sharing" target="_blank" className="text-black hover:underline underline-offset-8 transition">Upload Photo</a></li>
          </ul>
        </nav>
      </header>
    
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center z-40 sm:hidden">
          <ul className="flex flex-col space-y-4 text-base font-semibold uppercase tracking-widest">
            <li><a href="https://drive.google.com/drive/folders/1VoNoKGUAUS_iuV0MGnvWgLISWiTUY7dT?usp=sharing" target="_blank" className="text-black hover:underline underline-offset-8 transition">Photo Gallery</a></li>
            <li><a href="https://drive.google.com/drive/folders/1VoNoKGUAUS_iuV0MGnvWgLISWiTUY7dT?usp=sharing" target="_blank" className="text-black hover:underline underline-offset-8 transition">Upload Photo</a></li>
          </ul>
        </div>
      )}
    
      <div className="relative text-center flex flex-col items-center z-20 mt-20 sm:mt-16">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-wide mt-4">Sanesh & Akshata</h1>
        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-widest">12 · 04 · 25</p>
      </div>

      <div className="relative flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-2 z-20">
        <img src="/bride-groom-left.JPG" alt="Bride and Groom Left" className="w-40 h-52 sm:w-64 sm:h-80 object-cover shadow-lg" />
        <img src="/bride-groom-center.JPG" alt="Bride and Groom Center" className="w-52 h-64 sm:w-96 sm:h-96 object-cover shadow-lg" />
        <img src="/bride-groom-right.JPG" alt="Bride and Groom Right" className="w-40 h-52 sm:w-64 sm:h-80 object-cover shadow-lg" />
      </div>
      
      <p className="text-sm sm:text-lg font-light text-center max-w-lg sm:max-w-2xl mt-6 sm:mt-8 z-20">
        Join us as we embark on a journey of love, joy, and eternal happiness.
      </p>
    </div>
  );
}
