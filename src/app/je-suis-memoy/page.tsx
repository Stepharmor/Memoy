"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import VivusIcon from "@/components/VivusIcon";
import FlowerNavigation from "@/components/FlowerNavigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function JeSuisMemoyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-transparent text-slate-50">
      {/* Fond étoiles comme sur la home */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[1600px] w-[2200px] -translate-x-1/2 bg-[url('/img/BackgroundStars.svg')] bg-top bg-repeat-x" />
      </div>

      <main className="relative z-10 pb-32">
        <section className="mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 pt-0 lg:px-10 xl:px-16">
          <Header />

          {/* Hero Je suis Memoy */}
          <div className="mt-0 relative flex flex-col items-center gap-16 text-center">
            {/* Visuel centré en premier */}
           
              <div className="relative flex flex-col items-center justify-center gap-10 w-full">
                {/* Wrapper carré pour les stars + mobile */}
                <div className="relative flex h-[600px] w-full max-w-[1008px] items-center justify-center sm:h-[800px] lg:h-[1008px]">
                  {/* Stars centrées derrière le mobile, rotation continue avec vitesses/directions variées */}
                  <motion.img
                    src="/img/JeSuisMemoy/Star 1.webp"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 m-auto"
                    initial={mounted ? { rotate: 0 } : false}
                    animate={mounted ? { rotate: 360 } : false}
                    transition={{
                      duration: 80,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.img
                    src="/img/JeSuisMemoy/Star 2.webp"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 m-auto"
                    initial={mounted ? { rotate: 45 } : false}
                    animate={mounted ? { rotate: -360 } : false}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.img
                    src="/img/JeSuisMemoy/Star 3.webp"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 m-auto"
                    initial={mounted ? { rotate: -30 } : false}
                    animate={mounted ? { rotate: 360 } : false}
                    transition={{
                      duration: 90,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.img
                    src="/img/JeSuisMemoy/Star 4.webp"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 m-auto"
                    initial={mounted ? { rotate: 90 } : false}
                    animate={mounted ? { rotate: -360 } : false}
                    transition={{
                      duration: 70,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Mobile au premier plan */}
                  <motion.img
                    src="/img/JeSuisMemoy/mobileFlat.webp"
                    alt="Aperçu de l’application Memoy"
                    className="relative z-30 h-auto w-[260px] sm:w-[300px] lg:w-[340px]"
                    initial={mounted ? undefined : false}
                    animate={mounted ? { y: [0, -10, 0] } : false}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <div className="-mt-16 mx-auto w-full max-w-3xl space-y-6 px-4 sm:px-6">
                  <p className="text-[18px] leading-relaxed text-slate-200/85 sm:text-[22px] break-words">
                    Quand la mémoire vacille, les repères deviennent plus fragiles : les dates,
                    les habitudes, les personnes, parfois même les lieux familiers. Je suis là
                    pour rendre ce quotidien plus doux, plus compréhensible, plus sécurisé,
                    pour toi et pour tes proches.
                  </p>
                </div>
              </div>
            

          

            {/* Blur en fond, en bas à droite du hero */}
            <img
              src="/img/JeSuisMemoy/blurHero.webp"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-16 left-0 h-[1000px] w-auto opacity-80 -z-10"
            />
          </div>

          {/* Section valeurs / promesse */}
          <section className="relative mt-48 pb-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] lg:items-start">
              {/* Texte à gauche */}
              <ScrollReveal direction="up">
                <div className="max-w-xl text-left">
                  <h2 className="text-[40px] font-normal tracking-tight text-white sm:text-[48px]">
                    Une intelligence douce
                  </h2>
                  <p className="mt-4 text-[18px] leading-relaxed text-slate-200/85">
                    Je parle simplement, je m’adapte, j’observe sans juger.
                    Mon rôle est d’accompagner, de soutenir, de rassurer.
                  </p>
                </div>
              </ScrollReveal>

              {/* Cards à droite */}
              <div className="grid gap-8 pt-4 sm:grid-cols-2">
                {[
                  {
                    title:
                      "Je t’aide à te repérer quand la mémoire devient plus fragile.",
                    body: "",
                    icon: "/img/Memoy-Icons/Boussole.svg",
                  },
                  {
                    title:
                      "Je suis là pour que tu ne te sentes pas seul·e face aux oublis.",
                    body: "",
                    icon: "/img/Memoy-Icons/Bulles.svg",
                  },
                ].map((card, index) => (
                  <ScrollReveal key={card.title} delay={0.2 + index * 0.1}>
                    <article className="rounded-[24px] bg-[linear-gradient(-25deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_31%,rgba(255,255,255,1)_100%)] p-[1px]">
                      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-[22px] bg-[#1f202b] bg-[url('/img/CardBackground.webp')] bg-cover bg-center p-6 text-center shadow-[0_18px_50px_rgba(15,23,42,0.90)] backdrop-blur-[39px]">
                        <h3 className="text-[24px] font-normal text-white">
                          {card.title}
                        </h3>
                        <img
                          src={card.icon}
                          alt=""
                          aria-hidden="true"
                          className="h-[160px] w-[160px] object-contain"
                        />
                        {card.body && (
                          <p className="mt-1 text-[14px] leading-relaxed text-slate-200/85">
                            {card.body}
                          </p>
                        )}
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <img
              src="/img/JeSuisMemoy/BackgroundBlue.webp"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 -left-32 h-[820px] w-auto opacity-80 -z-10"
            />
            
          </section>


{/* Mon intelligence sensorielle */}
<section className="relative mt-16 -mx-6 min-h-[900px] overflow-hidden py-16 lg:-mx-10 xl:-mx-16">
            <ScrollReveal>
              <div className="relative flex min-h-[900px] flex-col items-center justify-center px-6 lg:px-10 xl:px-16">
                <img
                  src="/img/intelligence.webp"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Images flottantes HalloIntelligence */}
                {[1, 2, 3].map((num, index) => {
                  const baseLeft = `calc(35% + ${(index - 1) * 40}px)`;

                  // Images qui se croisent : gauche→droite, droite→gauche, etc.
                  const animateX =
                    index === 0
                      ? [-300, 40, -300] // 1 : gauche → droite
                      : index === 1
                      ? [ 300, -30, 300] // 2 : droite → gauche (inverse)
                      : [50, -300, 50]; // 3 : encore un léger décalage

                  return (
                    <motion.img
                      key={num}
                      src={`/img/home/HalloIntelligence${num}.webp`}
                      alt=""
                      aria-hidden="true"
                      className="absolute pointer-events-none hallo-intelligence-top hallo-intelligence-left"
                      style={{
                        left: baseLeft,
                        transform: "translate(-50%, -50%)",
                        zIndex: 5,
                      }}
                      initial={mounted ? undefined : false}
                      animate={mounted ? { x: animateX } : false}
                      transition={{
                        duration: 6 + index, // vitesses légèrement différentes
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}

                <div className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center text-center">
                  <h2 className="mb-0 -mt-32 text-center text-[28px] font-normal tracking-tight text-white sm:text-[40px] lg:text-[52px]">
                    Une présence fondée sur la confiance et la dignité
                  </h2>
                  <p className="mt-4 text-[18px] leading-relaxed text-slate-200/85">
                    Je suis construite autour de principes simples et respectueux de la vie privée.
                  </p>

                  {/* Icônes home / heart avec texte en dessous */}
                  <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2">
                    {[
                      {
                        icon: "/img/Memoy-Icons/Home.svg",
                        text: "Tes données restent chez toi.",
                      },
                      {
                        icon: "/img/Memoy-Icons/heart.svg",
                        text: "Je suis conçue pour prendre soin, avec dignité.",
                      },
                    ].map((item, index) => (
                      <ScrollReveal key={item.text} delay={0.1 + index * 0.1}>
                        <div className="flex flex-col items-center text-center">
                          <img
                            src={item.icon}
                            alt=""
                            aria-hidden="true"
                            className="h-[120px] w-[120px] object-contain text-white"
                          />
                          <p className="mt-4 max-w-xs text-[16px] leading-relaxed text-slate-200/90">
                            {item.text}
                          </p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
                <img
              src="/img/JeSuisMemoy/BackgroundBlue.webp"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 -left-32 h-[820px] w-auto opacity-80 -z-10"
            />
              </div>
            </ScrollReveal>
            <img
              src="/img/JeSuisMemoy/BackgroundBlue.webp"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-40 -left-32 h-[620px] w-auto opacity-80 -z-10"
            />

            {/* Section texte seule – Découvrir Memoy */}
          <section className="mt-32 px-6 text-center lg:px-10 xl:px-16">
            <ScrollReveal direction="up">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-normal leading-tight tracking-tight text-white">
                Découvrir Memoy, c’est essayer une autre façon de prendre soin de la mémoire.
              </h1>
            </ScrollReveal>
          </section>
          </section>

          

        </section>

        {/* Navigation fleur avant le footer */}
        <FlowerNavigation />
        <Footer />
      </main>
    </div>
  );
}

