"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FlowerNavigation from "@/components/FlowerNavigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function MonIntelligenceSensoriellePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative overflow-hidden bg-transparent text-slate-50">
      {/* Fond étoiles comme sur les autres pages */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[1600px] w-[2200px] -translate-x-1/2 bg-[url('/img/BackgroundStars.svg')] bg-top bg-repeat-x" />
      </div>

      <main className="relative z-10 pb-32">
        {/* Hero – Mon intelligence sensorielle */}
        <section
          className="relative flex min-h-screen w-full flex-col bg-cover bg-top bg-no-repeat pt-0 pb-32 lg:pb-24 overflow-hidden"
        >
          {/* Image de fond desktop */}
          <div 
            className="hidden lg:block absolute inset-0 bg-cover bg-top bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/img/MonIntelligenceSensorielle/BackgroundHero.webp')",
              backgroundSize: "100% auto",
              backgroundPosition: "top center",
            }}
          />
          {/* Image de fond mobile avec rotation */}
          <img
            src="/img/MonIntelligenceSensorielle/BackgroundHero.webp"
            alt=""
            aria-hidden="true"
            className="lg:hidden absolute left-1/2 top-0 h-screen w-auto object-cover -translate-x-1/2  origin-top"
            style={{
              minWidth: "100vh",
            }}
          />
          <div className="relative z-10 flex min-h-screen w-full flex-col">
          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10 xl:px-16">
            <Header />
          </div>

          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10 xl:px-16">
            <div className="relative mt-24 flex flex-1 flex-col items-center text-center pb-16 lg:mt-32 lg:pb-24">
            {/* Effet HalloIntelligence flottant sous le header */}
            {[1, 2, 3].map((num, index) => {
              const baseLeft = `calc(30% + ${(index - 1) * 40}px)`;

              const animateX =
                index === 0
                  ? [-200, 40, -200] // 1 : gauche → droite
                  : index === 1
                  ? [300, -30, 300] // 2 : droite → gauche
                  : [50, -200, 50]; // 3 : léger décalage

              return (
                <motion.img
                  key={num}
                  src={`/img/home/HalloIntelligence${num}.webp`}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none hallo-intelligence-top hallo-intelligence-left w-[520px] h-auto sm:w-[560px] lg:w-[1200px]"
                  style={{
                    position: "absolute",
                    top: isMobile ? "10%" : "-10%",
                    left: "10%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 5,
                  }}
                  animate={{ x: animateX }}
                  transition={{
                    duration: 6 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              );
            })}

            <div className="relative z-10">
              <h1 className="mt-32 max-w-4xl text-balance text-[40px] font-normal leading-tight tracking-tight text-white sm:mt-48 sm:text-[52px] lg:text-[84px]">
                Mon intelligence <br /> sensorielle
              </h1>
            </div>
            
              <div className="relative z-10">
                <p className="mt-6 max-w-3xl text-[20px] leading-relaxed text-slate-200/90 sm:text-[32px]">
                  Pas de clique sur des boutons.
                  <br />
                  J’écoute et j’observe pour comprendre.
                </p>
              </div>
            
            </div>
          </div>
          </div>
          {/* Bloc principal */}
          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10 xl:px-16">
            <section className="mx-auto mt-24 max-w-5xl">
            {/* Ligne verticale + points + blocs */}

          <div className="relative flex flex-col items-center">
            {/* Ligne verticale pleine hauteur */}
            <div
              className="pointer-events-none absolute inset-0 flex justify-center"
              aria-hidden="true"
            >
              <div className="h-50 w-px bg-white/25 z-0" />
            </div>

            <ScrollReveal direction="up">
{/* Point orange animé */}
<div className="mt-30 mb-20 flex items-center justify-center">
              <motion.img
              style={{
                position: "absolute",
                 top: "180px",
                 zIndex: 5,
                
              }}
                src="/img/MonIntelligenceSensorielle/pointOrange.webp"
                alt=""
                aria-hidden="true"
                className="h-12 w-12"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

              <article className="relative w-full rounded-[32px] bg-white/5 px-6 py-10 text-left text-slate-50 backdrop-blur-[32px] shadow-[0_40px_120px_rgba(0,0,0,0.75)] sm:px-10 lg:px-14">
                {/* Lueur de fond sous le bloc */}
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />

                <div className="relative space-y-4">
                  <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Je reconnais les sons
                  </h2>
                  <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Les sons font partie de ta vie quotidienne : <br />ta voix, celles des proches,
                    les bruits familiers de la maison.
                  </p>
                </div>

                {/* 3 icônes + textes */}

                <div className="relative mt-10 grid gap-8 sm:grid-cols-3">
                  {[
                    {
                      icon: "/img/Memoy-Icons/Grow.svg",
                      body: "Je reconnais ta voix pour te parler de manière plus personnelle.",
                    },
                    {
                      icon: "/img/Memoy-Icons/Grandir.svg",
                      body: "Je détecte les sons inhabituels : une chute, une alarme, un appel à l’aide, pour alerter si besoin.",
                    },
                    {
                      icon: "/img/Memoy-Icons/Square.svg",
                      body: "Je reconnais les bruits du quotidien : la porte qui s’ouvre, la cuisine qui s’active, la douche qui coule.",
                    },
                  ].map((item) => (
                    <div
                      key={item.body}
                      className="flex flex-col items-center text-center gap-4"
                    >
                      <img
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-[102px] w-[102px] object-contain opacity-95"
                      />
                      <p className="text-[15px] leading-relaxed text-slate-200/85">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollReveal>

            

            {/* Bloc principal */}
{/* Ligne + point pour le bloc suivant */}


            <ScrollReveal direction="up">

            <div className="flex flex-col items-center">
              <div className="relative z-10 h-30 w-px bg-white/40" />
              <div className="mt-2 mb-2 flex items-center justify-center">
                <motion.img
                style={{
                       top: "-30px",
                       zIndex: 5,
                    }}
                  src="/img/MonIntelligenceSensorielle/pointPink.webp"
                  alt=""
                  aria-hidden="true"
                  className="relative z-10 h-12 w-12"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    
                  }}
                />
              </div>
            </div>

              <article className="-mt-16 relative w-full rounded-[32px] bg-white/5 px-6 py-10 text-left text-slate-50 backdrop-blur-[32px] shadow-[0_40px_120px_rgba(0,0,0,0.75)] sm:px-10 lg:px-14">
                {/* Lueur de fond sous le bloc */}
                <img
                  src="/img/CardBackgroundPink.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />

                <div className="relative space-y-4">
                  <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                  J’observe tes habitudes
                  </h2>
                  <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Chaque personne a ses routines, ses rythmes, ses préférences.
                  </p>
                </div>

                {/* 3 icônes + textes */}
                <div className="relative mt-10 grid gap-8 sm:grid-cols-3">
                  {[
                    {
                      icon: "/img/Memoy-Icons/Time.svg",
                      body: "Je remarque quand tu te lèves, quand tu manges, quand tu dors.",
                    },
                    {
                      icon: "/img/Memoy-Icons/Repeat2.svg",
                      body: "Je reconnais tes activités habituelles : une promenade, un appel, du temps passé au jardin.",
                    },
                    {
                      icon: "/img/Memoy-Icons/Change.svg",
                      body: "Je détecte quand quelque chose change : tu dors moins, tu bouges moins, ta routine change.",
                    },
                  ].map((item) => (
                    <div key={item.body} className="flex flex-col items-center text-center gap-4">
                      <img
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-[102px] w-[102px] object-contain opacity-95"
                      />
                      <p className="text-[15px] leading-relaxed text-slate-200/85">{item.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollReveal>

            
            {/* Bloc principal */}
            <ScrollReveal direction="up">

              {/* Ligne + point pour le bloc suivant */}
            <div className="flex flex-col items-center">
              <div className="relative z-10 h-30 w-px bg-white/40" />
              <div className="mt-2 mb-2 flex items-center justify-center">
                <motion.img
                style={{
                       top: "-30px",
                       zIndex: 5,
                    }}
                  src="/img/MonIntelligenceSensorielle/pointBlue.webp"
                  alt=""
                  aria-hidden="true"
                  className="relative z-10 h-12 w-12"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    
                  }}
                />
              </div>
            </div>

              <article className="-mt-16 relative w-full rounded-[32px] bg-white/5 px-6 py-10 text-left text-slate-50 backdrop-blur-[32px] shadow-[0_40px_120px_rgba(0,0,0,0.75)] sm:px-10 lg:px-14">
                {/* Lueur de fond sous le bloc */}
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />

                <div className="relative space-y-4">
                  <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Je comprends tes rythmes
                  </h2>
                  <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Le temps n’est pas abstrait pour moi. Je vois tes rythmes réels : <br /> jour/nuit, semaine/week-end, saisons.
                  </p>
                </div>

                {/* 3 icônes + textes */}
                <div className="relative mt-10 grid gap-8 sm:grid-cols-3">
                  {[
                    {
                      icon: "/img/Memoy-Icons/Empty.svg",
                      body: "Je sais quand tu es généralement plus alerte ou plus confus·e.",
                    },
                    {
                      icon: "/img/Memoy-Icons/noon.svg",
                      body: "Je reconnais tes moments importants : les visites du lundi, l’appel hebdomadaire, les anniversaires.",
                    },
                    {
                      icon: "/img/Memoy-Icons/Confuse.svg",
                      body: "J’adapte ma présence à tes rythmes naturels, pas à une logique de machine.",
                    },
                  ].map((item) => (
                    <div key={item.body} className="flex flex-col items-center text-center gap-4">
                      <img
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-[102px] w-[102px] object-contain opacity-95"
                      />
                      <p className="text-[15px] leading-relaxed text-slate-200/85">{item.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollReveal>


            {/* Bloc principal */}
            <ScrollReveal direction="up">

              {/* Ligne + point pour le bloc suivant */}
<div className="flex flex-col items-center">
              <div className="relative z-10 h-30 w-px bg-white/40" />
              <div className="mt-2 mb-2 flex items-center justify-center">
                <motion.img
                style={{
                       top: "-30px",
                       zIndex: 5,
                    }}
                  src="/img/MonIntelligenceSensorielle/pointOrange.webp"
                  alt=""
                  aria-hidden="true"
                  className="relative z-10 h-12 w-12"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    
                  }}
                />
              </div>
            </div>
              <article className="-mt-16 relative w-full rounded-[32px] bg-white/5 px-6 py-10 text-left text-slate-50 backdrop-blur-[32px] shadow-[0_40px_120px_rgba(0,0,0,0.75)] sm:px-10 lg:px-14">
                {/* Lueur de fond sous le bloc */}
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />

                <div className="relative space-y-4">
                  <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                  Je reste discrète
                  </h2>
                  <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                  Mon intelligence sensorielle n’est pas une intrusion.
                  </p>
                </div>

                {/* 3 icônes + textes */}
                <div className="relative mt-10 grid gap-8 sm:grid-cols-3">
                  {[
                    {
                      icon: "/img/Memoy-Icons/Together.svg",
                      body: "Je n’écoute que ce qui m’aide à mieux t’accompagner.",
                    },
                    {
                      icon: "/img/Memoy-Icons/Report.svg",
                      body: "Je ne crée pas des listes de surveillance ou des rapports pour quelqu’un d’autre.",
                    },
                    {
                      icon: "/img/Memoy-Icons/Lotus.svg",
                      body: "Je suis au service de ta sécurité et de ton bien-être, pas d’un contrôle administratif.",
                    },
                  ].map((item) => (
                    <div key={item.body} className="flex flex-col items-center text-center gap-4">
                      <img
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-[102px] w-[102px] object-contain opacity-95"
                      />
                      <p className="text-[15px] leading-relaxed text-slate-200/85">{item.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollReveal>

            
            </div>
          </section>
          </div>
        </section>

        <ScrollReveal>
          <FlowerNavigation />
        </ScrollReveal>

        <Footer />
      </main>
    </div>
  );
}

