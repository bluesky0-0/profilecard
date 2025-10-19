import React, { useState } from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const name = "WebCaRdS";
  const title = "DESIGNER";
  const phone = "+91 9477 847 604";
  const email = "yourinbox@mail.com";
  const address = "India, WB";
  const website = "https://www.youtube.com/@Web_CaRdS";
  const brandName = "WebCaRdS";
  const tagline = "Designs that Speak";

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes expandWidth { from { width: 0; } to { width: 6rem; } }
        @keyframes textGlow {
          0% { text-shadow: 0 0 10px rgba(251,191,36,0.3); }
          100% { text-shadow: 0 0 20px rgba(251,191,36,0.6), 0 0 30px rgba(251,191,36,0.4); }
        }
        @keyframes float { 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-10px); } }
        @keyframes pulse { 0%,100%{ opacity:0.2 } 50%{ opacity:0.4 } }
        @keyframes letterPop { 0%,100%{ transform:scale(1) } 50%{ transform:scale(1.15) } }

        .contact-item { animation: slideInLeft 0.6s ease-out both; transition: all 0.3s ease; }
        .contact-item:nth-child(1){ animation-delay:0.6s } .contact-item:nth-child(2){ animation-delay:0.7s }
        .contact-item:nth-child(3){ animation-delay:0.8s } .contact-item:nth-child(4){ animation-delay:0.9s }

        .contact-item:hover { transform: translateX(8px) }
        @media (hover:none){ .contact-item:active { transform: translateX(8px) } }

        .contact-icon { transition: all 0.3s ease; }
        .contact-item:hover .contact-icon {
          transform: scale(1.2) rotate(360deg);
          background: linear-gradient(135deg,#f59e0b,#fb923c);
        }
        @media (hover:none){ .contact-item:active .contact-icon {
          transform: scale(1.2) rotate(360deg);
          background: linear-gradient(135deg,#f59e0b,#fb923c);
        } }

        .brand-logo { animation: float 3s ease-in-out infinite; }

        .animated-text:hover span { display:inline-block; animation: letterPop 0.4s ease-in-out; }
        .animated-text span:nth-child(1){ animation-delay:0s } .animated-text span:nth-child(2){ animation-delay:0.05s }
        .animated-text span:nth-child(3){ animation-delay:0.1s } .animated-text span:nth-child(4){ animation-delay:0.15s }
        .animated-text span:nth-child(5){ animation-delay:0.2s } .animated-text span:nth-child(6){ animation-delay:0.25s }
        .animated-text span:nth-child(7){ animation-delay:0.3s } .animated-text span:nth-child(8){ animation-delay:0.35s }
        .animated-text span:nth-child(9){ animation-delay:0.4s } .animated-text span:nth-child(10){ animation-delay:0.45s }
        .animated-text span:nth-child(11){ animation-delay:0.5s } .animated-text span:nth-child(12){ animation-delay:0.55s }
        .animated-text span:nth-child(13){ animation-delay:0.6s } .animated-text span:nth-child(14){ animation-delay:0.65s }
        .animated-text span:nth-child(15){ animation-delay:0.7s }

        @media (hover:none){ .animated-text:active span { display:inline-block; animation: letterPop 0.4s ease-in-out; } }

        @media (max-width:640px){ .card-container { padding:1rem } }
      `}</style>

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 p-4 sm:p-6 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-300/40 via-gray-500/60 to-gray-700/40"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-gray-400/30 to-transparent"></div>
        </div>

        <div className="absolute top-0 left-0 w-96 h-96 opacity-10">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-red-500 to-transparent transform -rotate-45 origin-top-left"></div>
          <div className="absolute top-12 left-0 w-full h-32 bg-gradient-to-br from-green-500 to-transparent transform -rotate-45 origin-top-left"></div>
          <div className="absolute top-24 left-0 w-full h-32 bg-gradient-to-br from-blue-500 to-transparent transform -rotate-45 origin-top-left"></div>
        </div>

        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-tl from-blue-500 to-transparent transform rotate-45 origin-bottom-right"></div>
          <div className="absolute bottom-12 right-0 w-full h-32 bg-gradient-to-tl from-green-500 to-transparent transform rotate-45 origin-bottom-right"></div>
          <div className="absolute bottom-24 right-0 w-full h-32 bg-gradient-to-tl from-red-500 to-transparent transform rotate-45 origin-bottom-right"></div>
        </div>

        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gray-300 rounded-full blur-3xl" style={{ animation: "pulse 4s ease-in-out infinite" }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gray-400 rounded-full blur-3xl" style={{ animation: "pulse 4s ease-in-out infinite 2s" }}></div>
        </div>

        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
                boxShadow: "0 0 4px rgba(255,255,255,0.8)"
              }}
            />
          ))}
        </div>

        <div className="w-full max-w-[95%] sm:max-w-[500px] space-y-4 sm:space-y-6 md:space-y-8 relative z-10">
          {/* FRONT CARD (tilt left on hover) */}
          <div
            className="relative rounded-xl sm:rounded-2xl shadow-2xl aspect-[1.75/1] overflow-hidden transform transition-all duration-700 hover:scale-105 active:scale-105 hover:shadow-3xl hover:-rotate-2 active:-rotate-2"
            onMouseEnter={() => setHoveredCard("front")}
            onMouseLeave={() => setHoveredCard(null)}
            onTouchStart={() => setHoveredCard("front")}
            onTouchEnd={() => setHoveredCard(null)}
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #0a0a0a 100%)",
              animation: "fadeInUp 0.8s ease-out",
              boxShadow: hoveredCard === "front" ? "0 30px 60px rgba(0,0,0,0.5)" : "0 20px 50px rgba(0,0,0,0.4)"
            }}
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 via-transparent to-black/30"></div>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 opacity-15">
              <div className="absolute top-8 right-8 w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform -rotate-45 origin-top-right"></div>
              <div className="absolute top-16 right-16 w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform -rotate-45 origin-top-right"></div>
              <div className="absolute top-24 right-24 w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform -rotate-45 origin-top-right"></div>
            </div>

            <div className="relative z-10 h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-2 sm:space-y-3" style={{ animation: "slideInLeft 0.6s ease-out 0.2s both" }}>
                <div>
                  <h1
                    className="animated-text text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-1 tracking-tight cursor-pointer"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      animation: "textGlow 2s ease-in-out infinite alternate",
                      textShadow: "0 4px 6px rgba(0,0,0,0.5)"
                    }}
                  >
                    {name.split("").map((char, i) => (
                      <span key={i}>{char}</span>
                    ))}
                  </h1>
                  <p className="animated-text text-[10px] sm:text-xs text-gray-300 tracking-[0.2em] sm:tracking-[0.3em] font-semibold cursor-pointer">
                    {title.split("").map((char, i) => (
                      <span key={i}>{char === " " ? "\u00A0" : char}</span>
                    ))}
                  </p>
                </div>

                <div
                  className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                  style={{ animation: "expandWidth 0.8s ease-out 0.4s both" }}
                />
              </div>

              <div className="flex justify-between items-end gap-2 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2.5 flex-1 min-w-0">
                  <div className="contact-item flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-200">
                    <div className="contact-icon w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span className="font-medium truncate">{phone}</span>
                  </div>

                  <div className="contact-item flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-200">
                    <div className="contact-icon w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span className="font-medium truncate">{email}</span>
                  </div>

                  <div className="contact-item flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-200">
                    <div className="contact-icon w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span className="font-medium truncate">{address}</span>
                  </div>

                  <div className="contact-item flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-200">
                    <div className="contact-icon w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span className="font-medium truncate">{website}</span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 sm:gap-3 md:gap-4 flex-shrink-0" style={{ animation: "slideInRight 0.6s ease-out 0.4s both" }}>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white border-2 border-gray-400 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 active:scale-110 hover:rotate-3 active:rotate-3">
                    <div className="w-11 h-11 sm:w-13 sm:h-13 md:w-16 md:h-16 bg-gray-900 rounded grid grid-cols-4 gap-0.5 p-1">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className={`${
                            [0, 1, 2, 4, 5, 7, 8, 10, 13, 14, 15].includes(i) ? "bg-white" : "bg-transparent"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="brand-logo flex items-center gap-1.5 sm:gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <defs>
                          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "#f59e0b", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "#fb923c", stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>
                        <path d="M 40 60 L 60 140 L 80 90 L 100 140 L 120 60" fill="none" stroke="url(#logoGradient)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M 120 60 L 140 140 L 160 60" fill="none" stroke="url(#logoGradient)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="100" cy="100" r="25" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
                        <circle cx="100" cy="100" r="15" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
                        <circle cx="100" cy="100" r="5" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
                        <line x1="100" y1="75" x2="100" y2="125" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
                        <line x1="82" y1="82" x2="118" y2="118" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
                        <line x1="75" y1="100" x2="125" y2="100" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
                        <line x1="82" y1="118" x2="118" y2="82" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
                        <circle cx="112" cy="95" r="3" fill="url(#logoGradient)" />
                        <circle cx="112" cy="102" r="2" fill="url(#logoGradient)" />
                      </svg>
                    </div>
                    <div className="text-right">
                      <p className="animated-text text-xs sm:text-sm font-bold leading-tight cursor-pointer" style={{ background: "linear-gradient(135deg,#f59e0b,#fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {brandName.split("").map((char, i) => (
                          <span key={i}>{char}</span>
                        ))}
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-gray-300 leading-tight font-medium">{tagline}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BACK CARD (tilt right on hover) */}
          <div
            className="relative rounded-xl sm:rounded-2xl shadow-2xl aspect-[1.75/1] overflow-hidden transform transition-all duration-700 hover:scale-105 active:scale-105 hover:shadow-3xl hover:rotate-2 active:rotate-2"
            onMouseEnter={() => setHoveredCard("back")}
            onMouseLeave={() => setHoveredCard(null)}
            onTouchStart={() => setHoveredCard("back")}
            onTouchEnd={() => setHoveredCard(null)}
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #0a0a0a 100%)",
              animation: "fadeInUp 0.8s ease-out 0.2s both",
              boxShadow: hoveredCard === "back" ? "0 30px 60px rgba(0,0,0,0.5)" : "0 20px 50px rgba(0,0,0,0.4)"
            }}
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 via-transparent to-black/30"></div>
            </div>

            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-8 left-8 w-32 h-32 border-4 border-gray-400 rounded-lg transform rotate-12"></div>
                <div className="absolute bottom-12 right-12 w-40 h-40 border-4 border-gray-400 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-gray-400 rounded-lg rotate-45"></div>
              </div>
            </div>

            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-gray-500/10 to-transparent transform -skew-x-12"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-gray-100 px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 transform transition-all duration-500 hover:scale-110 active:scale-110" style={{ animation: "float 3s ease-in-out infinite" }}>
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                  <defs>
                    <filter id="glowLight">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <path d="M 40 60 L 60 140 L 80 90 L 100 140 L 120 60" fill="none" stroke="#e5e7eb" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" filter="url(#glowLight)"/>
                  <path d="M 120 60 L 140 140 L 160 60" fill="none" stroke="#e5e7eb" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" filter="url(#glowLight)"/>
                  <circle cx="100" cy="100" r="30" fill="none" stroke="#d1d5db" strokeWidth="2" opacity="0.9"/>
                  <circle cx="100" cy="100" r="20" fill="none" stroke="#d1d5db" strokeWidth="2" opacity="0.9"/>
                  <circle cx="100" cy="100" r="10" fill="none" stroke="#d1d5db" strokeWidth="2" opacity="0.9"/>
                  <line x1="100" y1="70" x2="100" y2="130" stroke="#d1d5db" strokeWidth="2" opacity="0.9"/>
                  <line x1="78" y1="78" x2="122" y2="122" stroke="#d1d5db" strokeWidth="2" opacity="0.9"/>
                  <line x1="70" y1="100" x2="130" y2="100" stroke="#d1d5db" strokeWidth="2" opacity="0.9"/>
                  <line x1="78" y1="122" x2="122" y2="78" stroke="#d1d5db" strokeWidth="2" opacity="0.9"/>
                  <circle cx="115" cy="95" r="4" fill="#e5e7eb"/>
                  <circle cx="115" cy="104" r="3" fill="#e5e7eb"/>
                  <line x1="115" y1="99" x2="120" y2="96" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="115" y1="99" x2="120" y2="102" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="115" y1="99" x2="110" y2="96" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="115" y1="99" x2="110" y2="102" stroke="#e5e7eb" strokeWidth="1"/>
                </svg>
              </div>

              <h2 className="animated-text text-2xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 tracking-wide cursor-pointer text-gray-100" style={{ fontFamily: "system-ui, -apple-system, sans-serif", textShadow: "0 4px 6px rgba(0,0,0,0.5)", animation: "textGlow 2s ease-in-out infinite alternate" }}>
                {brandName.split("").map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </h2>

              <p className="text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6 opacity-90 tracking-widest font-semibold text-gray-300">{tagline}</p>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gray-400 rounded-full mb-4 sm:mb-5 md:mb-6 opacity-60"></div>
              {/* <p className="text-[10px] sm:text-xs opacity-80 tracking-wider font-medium text-gray-300">{website.toUpperCase()}</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;