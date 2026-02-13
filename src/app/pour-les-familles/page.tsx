"use client";

import FlowerNavigation from "@/components/FlowerNavigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function PourLesFamillesPage() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative overflow-hidden bg-transparent text-slate-50">
      {/* Fond étoiles comme sur les autres pages */}
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[1600px] w-[2200px] -translate-x-1/2 bg-[url('/img/BackgroundStars.svg')] bg-top bg-repeat-x" />
      </div>

      <main className="relative z-10 pb-32">
        {/* Hero : hauteur calée sur l'image de fond */}
        <section className="relative w-full pt-0 pb-24">
          <div className="absolute left-0 right-0 top-6 z-50 mx-auto w-full max-w-[1600px] px-6 lg:px-10 xl:px-16">
            <Header />
          </div>

          <div className="flex flex-col items-center text-center">
            {/* Wrapper qui prend toute la largeur, hauteur auto basée sur l'image */}
            <div className="relative w-full">
              {/* Image de fond en <img> pour que la hauteur du hero suive exactement celle de l'image */}
              <img
                src="/img/PourLesFamilles/BackgroundHero.webp"
                alt=""
                aria-hidden="true"
                className="block w-full h-[600px] object-cover sm:h-auto"
              />
                {/* Mains : reveal au chargement, après le texte */}
                <ScrollReveal
                  trigger="mount"
                  direction="left"
                  delay={1}
                  className="pointer-events-none absolute top-0 right-0 h-[280px] w-auto"
                >
                  <motion.img
                    src="/img/PourLesFamilles/HandTop.webp"
                    alt=""
                    aria-hidden="true"
                    className="h-full w-auto opacity-95 object-contain"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  />
                </ScrollReveal>
                <ScrollReveal
                  trigger="mount"
                  direction="right"
                  delay={0.75}
                  className="pointer-events-none absolute top-100 left-0 h-[280px] w-auto"
                >
                  <motion.img
                    src="/img/PourLesFamilles/HandBottom.webp"
                    alt=""
                    aria-hidden="true"
                    className="h-full w-auto opacity-95 object-contain"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  />
                </ScrollReveal>
                {/* Contenu centré par-dessus */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 lg:px-10 xl:px-16 -translate-y-12 lg:-translate-y-40 xl:-translate-y-48 2xl:-translate-y-64">
                  <div className="relative w-full text-center">
                    <ScrollReveal trigger="mount" direction="up">
                      <div className="space-y-4">
                        <h1 className="text-[40px] font-normal leading-tight tracking-tight text-white sm:text-[52px] lg:text-[64px]">
                        Accompagnement <br />des familles
                        </h1>
                        <p className="max-w-3xl text-[26px] leading-relaxed text-slate-200/90 sm:text-[30px] text-center mx-auto">
                          Je ne suis là pour maintenir le lien. <br />
                          Co-créée avec les familles
                        </p>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trois cartes d'accompagnement – empilées puis déployées */}
          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10 xl:px-16">
            <section className="mt-24">
              <ScrollReveal direction="up" delay={0.1}>
              <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
                <div className="space-y-3">
                  <h2 className="text-[32px] sm:text-[32px] font-normal tracking-tight text-white">
                  Rester connecté, même à distance
                  </h2>
                  <p className="text-[18px] leading-relaxed text-slate-200/90">
                  Quand un proche vit loin, ou quand les visites deviennent plus rares, le lien peut se distendre.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl gap-8 pt-4 sm:grid-cols-3">
              {([
                {
                  title: "Tu reçois des signaux simples sur sa journée",
                  body: "",
                  icon: "/img/Memoy-Icons/Sign.svg",
                  stackX: "100%",
                  rotate: -5,
                },
                {
                  title: "Tu sais qu’une présence veille avec lui, tous les jours.",
                  body: "",
                  icon: "/img/Memoy-Icons/Flower2.svg",
                  stackX: "0%",
                  rotate: 0,
                },
                {
                  title: "Tu peux rester en contact sans avoir à appeler.",
                  body: "",
                  icon: "/img/Memoy-Icons/Duo.svg",
                  stackX: "-100%",
                  rotate: 12,
                },
              ] as const).map((card, index) => {
                const shouldAnimate = mounted && !isMobile;
                return (
                <motion.div
                  key={card.title}
                  initial={{ x: card.stackX, opacity: 1, scale: 0.92, rotate: card.rotate }}
                  animate={shouldAnimate ? undefined : { x: 0, opacity: 1, scale: 1, rotate: 0 }}
                  whileInView={shouldAnimate ? { x: "0%", opacity: 1, scale: 1, rotate: 0 } : undefined}
                  viewport={{ once: true, margin: "-350px" }}
                  transition={shouldAnimate ? {
                    duration: 0.8,
                    delay: 0.1 + index * 0.12,
                    ease: [0.25, 0.1, 0.25, 1],
                  } : { duration: 0 }}
                >
                  <article className="h-full rounded-[24px] bg-[linear-gradient(-25deg,rgba(255, 255, 255, 0)_0%,rgba(255,255,255,0)_31%,rgba(255,255,255,0.12)_100%)] p-[1px]">
                    <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-[22px] bg-white/5 p-6 text-center backdrop-blur-[0px]">
                      <img
                        src="/img/CardBackground.webp"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-70"
                      />
                      <div className={`relative z-10 space-y-2 ${mounted && !isMobile ? '' : 'opacity-100'}`}>
                        {mounted && !isMobile ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-350px" }}
                            transition={{
                              duration: 0.45,
                              delay: 0.18 + index * 0.12,
                              ease: [0.25, 0.1, 0.25, 1],
                            }}
                          >
                            <h3 className="text-[22px] font-normal text-white">
                              {card.title}
                            </h3>
                            <p className="mt-1 text-[15px] leading-relaxed text-slate-200/85">
                              {card.body}
                            </p>
                          </motion.div>
                        ) : (
                          <>
                            <h3 className="text-[22px] font-normal text-white">
                              {card.title}
                            </h3>
                            <p className="mt-1 text-[15px] leading-relaxed text-slate-200/85">
                              {card.body}
                            </p>
                          </>
                        )}
                      </div>
                      {card.icon && (
                        <img
                          src={card.icon}
                          alt=""
                          aria-hidden="true"
                          className="relative z-10 mx-auto h-[140px] w-[140px] object-contain"
                        />
                      )}
                    </div>
                  </article>
                </motion.div>
                );
              })}
            </div>
            </section>
          </div>

        {/* Section familles : titre + sous-titre au-dessus, puis photo + 3 briques */}
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10 xl:px-16">
          <section className="mt-32">
          <div className="mx-auto max-w-6xl space-y-10">
            {/* Titre + sous-titre pleine largeur */}
            <div className="text-center lg:text-left">
              <ScrollReveal direction="up">
                <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-normal leading-tight tracking-tight text-white">
                  Rassurer sans surveiller
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <p className="mt-4 text-[18px] leading-relaxed text-slate-200/90">
                  Je donne des informations utiles, pas un contrôle total.
                </p>
              </ScrollReveal>
            </div>

            {/* Photo + 3 briques */}
            <div className="gap-10 lg:flex lg:items-center">
              {/* Photo */}
              <ScrollReveal direction="left">
                <div className="relative flex justify-center">
                  <img
                    src="/img/PourLesFamilles/FemmeLecture.webp"
                    alt="Une proche en train de lire calmement"
                    className="w-full max-w-[1120px] rounded-[32px] object-cover mx-auto"
                  />

                  {/* Briques en overlay sur la photo (desktop) */}
                  <div className="pointer-events-none absolute inset-0 hidden lg:flex flex-col items-end justify-center space-y-4 pr-10">
                    {[
                      {
                        body: "Tu sais ce qui compte vraiment : ta mère est-elle en sécurité ? A-t-elle mangé ? Comment a-t-elle dormi ?",
                      },
                      {
                        body: "Tu n’as pas besoin de caméras.",
                      },
                      {
                        body: "C’est une présence bienveillante, pas une surveillance.",
                      },
                    ].map((brique, index) => (
                      <ScrollReveal
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        direction="up"
                        delay={0.15 + index * 0.1}
                      >
                        <article className="w-[228px] h-[160px] rounded-[24px]">
                          <div className="relative flex h-full flex-col items-center justify-center rounded-[22px] bg-white/10 p-5 text-center backdrop-blur-[30px]">
                            <p className="text-[15px] leading-relaxed text-slate-200/85">
                              {brique.body}
                            </p>
                          </div>
                        </article>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* 3 briques – version empilée sous la photo (mobile) */}
              <div className="space-y-4 mx-auto lg:mx-0 lg:hidden">
                {[
                  {
                    title: "",
                    body: "Tu sais ce qui compte vraiment : ta mère est-elle en sécurité ? A-t-elle mangé ? Comment a-t-elle dormi ?",
                  },
                  {
                    title: "",
                    body: "Tu n’as pas besoin de caméras.",
                  },{
                    title: "",
                    body: "C’est une présence bienveillante, pas une surveillance.",
                  },
                ].map((brique, index) => (
                  <ScrollReveal
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    direction="up"
                    delay={0.15 + index * 0.1}
                  >
                    <article className="w-[228px] h-[160px] rounded-[24px] mx-auto lg:mx-0">
                      <div className="relative flex h-full flex-col items-center justify-center rounded-[22px] bg-white/10 p-5 text-center backdrop-blur-[30px]">
                        <p className="text-[15px] leading-relaxed text-slate-200/85">
                          {brique.body}
                        </p>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
          </section>
        </div>

        {/* Fonctionnement hors connexion */}
        <section
          className="relative mt-32 grid gap-10 bg-center bg-no-repeat pt-16 lg:items-center"
        >
          {/* Blur doré en arrière-plan */}
          <img
            src="/img/PourLesPatients/blurGold.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-130 h-[900px] w-auto -translate-x-1/2 opacity-80 -z-10"
          />
            <ScrollReveal>
              <h2 className="mb-0 text-center text-[32px] font-normal tracking-tight text-white sm:text-[40px] lg:text-[52px]">
              Réduire le stress, l’épuisement, la culpabilité
                </h2>
              <p className="mb-0 text-center"> Accompagner un proche avec des troubles de mémoire, c’est épuisant.</p>
            </ScrollReveal>


            <div className="mx-auto mt-10 grid w-full max-w-5xl gap-0">
              <ScrollReveal delay={0.2}>
                <article
                  className="relative z-10 mx-auto w-full min-h-[728px] max-w-[695px] bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/img/PourLesPatients/Brique1.webp')",
                    backgroundSize: "99% 99%",
                  }}
                >
                <div className="relative mx-auto flex h-full max-w-[288px] flex-col gap-3 rounded-3xl px-6 py-6 text-center text-white lg:max-w-[894]">
                  <p className="px-6 text-[16px] leading-relaxed text-slate-100/90 lg:text-[24px]">
                  Tu n’as pas besoin de vérifier constamment que tout va bien.
                  </p>
                </div>
                </article>
              </ScrollReveal>

              <motion.article
                className="-mt-130 relative z-10 mx-auto w-full min-h-[518px] max-w-[670px] bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/img/PourLesPatients/Brique2.webp')",
                  backgroundSize: "99% 99%",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="relative mx-auto flex h-full max-w-[640px] flex-col gap-3 px-6 py-6 text-center text-white lg:max-w-[600px]">

                  <p className="mt-2 px-6 text-[16px] leading-relaxed text-slate-100/90 lg:text-[24px]">
                  Tu peux te reposer, sachant qu’une présence veille.
                  </p>
                </div>
              </motion.article>

              <motion.article
                className="-mt-70 relative z-20 mx-auto w-full min-h-[288px] max-w-[814px] bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/img/PourLesPatients/Brique3.webp')",
                  backgroundSize: "99% 99%",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="relative mx-auto flex h-full max-w-[288px] flex-col gap-3 px-6 py-6 text-center text-white lg:max-w-[894px]">

                  <p className="mt-2 px-6 text-[16px] leading-relaxed text-slate-100/90 lg:text-[24px]">
                  Tu gardes le lien humain (appels, visites), sans la pression d’être disponible 24h/24.
                  </p>
                </div>
              </motion.article>
            </div>


          </section>

        {/* Section co-création – titre + 3 cartes simples */}
        <section
          className="mt-32 px-6 py-64 lg:px-10 xl:px-16"
          style={{
            backgroundImage: "url('/img/PourLesFamilles/fondCocreation.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "60% auto",
            backgroundPosition: "center top",
          }}
        >
          <div className="mx-auto max-w-5xl space-y-10 text-center">
            <ScrollReveal direction="up">
              <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-normal leading-tight tracking-tight text-white">
                Une co-création avec les familles.
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <p className="mx-auto max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                Memoy a été pensée avec celles et ceux qui accompagnent au quotidien : leurs besoins,
                leurs limites, leurs idées.
              </p>
            </ScrollReveal>

            <div className="mt-8 grid gap-6 sm:grid-cols-3 items-stretch">
              {[
                {
                  title: " ",
                  body: "Nous écoutons vos vrais besoins : ce qui vous aide vraiment, ce qui vous rassure.",
                },
                {
                  title: " ",
                  body: "Nous savons que chaque famille est différente : certaines veulent plus d’infos, d’autres moins.",
                },
                {
                  title: " ",
                  body: "Nous itérons ensemble, pour que Memoy s’adapte à votre situation.",
                },
              ].map((card, index) => (
                <ScrollReveal key={index} direction="up" delay={0.15 + index * 0.1}>
                  <article className="h-full rounded-[24px]">
                    <div className="flex h-full flex-col items-center justify-center rounded-[24px] bg-white/8 p-6 text-center text-slate-50 backdrop-blur-[26px] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
                      {card.title?.trim() && (
                        <h3 className="mb-2 text-[20px] font-normal">{card.title}</h3>
                      )}
                      <p className="text-[15px] leading-relaxed text-slate-200/85">{card.body}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
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

