import React, { useState, useEffect } from "react";
import {
  Heart,
  Gift,
  Star,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import foto1 from "./images/foto1.JPG";
import foto2 from "./images/foto2.JPG";
import foto3 from "./images/foto3.JPG";
import foto4 from "./images/foto4.JPG";
import foto5 from "./images/foto5.png";
import foto6 from "./images/foto6.png";
import foto7 from "./images/foto7.png";
import foto8 from "./images/foto8.png";
import foto9 from "./images/foto9.png";
import foto10 from "./images/foto10.JPG";

const BirthdayWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBirthdayMessage, setShowBirthdayMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Array gambar - ganti dengan URL gambar Anda atau gunakan placeholder
  const images = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
  ];

  // Auto slide functionality
  useEffect(() => {
    if (!showBirthdayMessage) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          const next = prev + 1;
          if (next >= images.length) {
            setShowBirthdayMessage(true);
            setShowConfetti(true);
            return prev;
          }
          return next;
        });
      }, 3000); // Ganti gambar setiap 3 detik

      return () => clearInterval(interval);
    }
  }, [showBirthdayMessage, images.length]);

  const nextSlide = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setShowBirthdayMessage(true);
      setShowConfetti(true);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const confettiColors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#96ceb4",
    "#feca57",
    "#ff9ff3",
    "#54a0ff",
  ];

  if (showBirthdayMessage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center overflow-hidden relative">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <Star
                className="text-yellow-300 opacity-70"
                size={16 + Math.random() * 20}
              />
            </div>
          ))}
        </div>

        {/* Confetti Animation */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: "-10px",
                  backgroundColor:
                    confettiColors[
                      Math.floor(Math.random() * confettiColors.length)
                    ],
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                  animationIterationCount: "infinite",
                }}
              />
            ))}
          </div>
        )}

        {/* Main Content */}
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          {/* Birthday Cake Image */}
          <div className="mb-8 animate-bounce">
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-gradient-to-b from-pink-300 to-pink-500 rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-6xl md:text-8xl">🎂</div>
              </div>
              <div className="absolute -top-4 -right-4">
                <Sparkles className="text-yellow-400 animate-spin" size={32} />
              </div>
              <div className="absolute -bottom-4 -left-4">
                <Gift className="text-red-400 animate-pulse" size={28} />
              </div>
            </div>
          </div>

          {/* Birthday Message */}
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-pulse">
              🎉 SELAMAT ULANG TAHUN PUANG ANDINI! 🎉
            </h1>

            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30">
              <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                Semoga di hari istimewa ini, semua impian dan harapan terwujud!
                Selamat bertambah usia, semoga selalu diberkahi kesehatan,
                kebahagiaan, dan kesuksesan dalam segala hal! 🎈
              </p>

              <div className="flex justify-center space-x-4 mb-6">
                <Heart className="text-red-400 animate-pulse" size={32} />
                <Gift className="text-blue-400 animate-bounce" size={32} />
                <Star className="text-yellow-400 animate-spin" size={32} />
              </div>

              <p className="text-lg md:text-xl text-pink-100 font-semibold">
                Bahagia selalu! ✨
              </p>
            </div>
          </div>

          {/* Back to slideshow button */}
          <div className="mt-12">
            <button
              onClick={() => {
                setShowBirthdayMessage(false);
                setShowConfetti(false);
                setCurrentSlide(0);
              }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              🔄 Lihat Foto Lagi
            </button>
          </div>
        </div>

        {/* Birthday Balloons */}
        <div className="fixed bottom-0 left-0 right-0 flex justify-around pointer-events-none">
          {["🎈", "🎀", "🎁", "🎊", "🎉"].map((emoji, i) => (
            <div
              key={i}
              className="text-4xl md:text-6xl animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "2s",
              }}
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-300 opacity-60 animate-pulse"
              size={20}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <Sparkles
              className="text-white opacity-30"
              size={12 + Math.random() * 16}
            />
          </div>
        ))}
      </div>

      {/* Main slideshow container */}
      <div className="max-w-4xl mx-auto px-4 text-center z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-pulse">
            🎈 Happy Birthday 🎈
          </h1>
          <p className="text-lg md:text-xl text-pink-100">
            Foto ke {currentSlide + 1} dari {images.length}
          </p>
        </div>

        {/* Image slideshow */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={images[currentSlide]}
              alt={`Foto ${currentSlide + 1}`}
              className="w-full max-h-96 md:max-h-[28rem] object-contain bg-black rounded-2xl transition-all duration-500 mx-auto"
            />

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-6 bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-pink-400 to-purple-500 h-full transition-all duration-300 rounded-full"
              style={{
                width: `${((currentSlide + 1) / images.length) * 100}%`,
              }}
            />
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Skip to birthday message */}
        <div className="mt-8">
          <button
            onClick={() => {
              setShowBirthdayMessage(true);
              setShowConfetti(true);
            }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            🎂 Langsung ke Ucapan!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayWebsite;
