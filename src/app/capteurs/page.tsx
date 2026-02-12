"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import FlowerNavigation from "@/components/FlowerNavigation";

export default function CapteursPage() {
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
        {/* Hero – Capteurs */}
        <section
          className="relative flex min-h-screen w-full flex-col bg-cover bg-top bg-no-repeat pt-0 pb-24"
          style={{
            backgroundImage: "url('/img/Capteurs/BackgroundCapteurs.webp')",
            backgroundSize: "100% auto",
            backgroundPosition: "top center",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10 xl:px-16">
            <Header />
          </div>

          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10 xl:px-16">
            <div className="relative mt-24 flex flex-1 flex-col items-center justify-center text-center lg:mt-32">
            
              <h1 className="mt-12 max-w-4xl text-balance text-[40px] font-normal leading-tight tracking-tight text-white sm:text-[52px] lg:text-[84px]">
              Capteurs et montres
              </h1>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-24 sm:gap-16 lg:gap-48">
              <img
                src="/img/Capteurs/watch.svg"
                alt="Montre connectée"
                className="h-40 w-auto sm:h-56 lg:h-72"
              />
              <img
                src="/img/Capteurs/Balance.svg"
                alt="Balance connectée"
                className="h-40 w-auto sm:h-56 lg:h-72"
              />
              <img
                src="/img/Capteurs/Tensiometre.svg"
                alt="Tensiomètre connecté"
                className="h-40 w-auto sm:h-56 lg:h-72"
              />
            </div>
            <div>
              <p className="mt-24 max-w-4xl text-[20px] leading-relaxed text-slate-200/90 sm:text-[32px]">
              Memoy peut s’enrichir avec des capteurs connectées pour observer certains signaux importants de ton quotidien.
              </p>
            </div>
            <ScrollReveal direction="up" delay={0.2} className="mt-32">
              <div className="mx-auto max-w-4xl rounded-lg border-2 border-amber-400/80 px-4 py-3 sm:px-6 sm:py-4">
                <p className="text-center text-[14px] font-medium leading-relaxed text-amber-400 sm:text-[16px]">
                  Pour l'instant, nous travaillons sur ces intégrations. Elles arriveront bientôt.
                </p>
              </div>
            </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section Pourquoi des capteurs */}
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10 xl:px-16">
          <section className="mt-24 py-20">
          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-center">
              {/* Texte à gauche */}
              <div className="space-y-6">
                <ScrollReveal direction="up">
                  <h2 className="text-[32px] font-normal leading-tight text-white sm:text-[40px] lg:text-[48px]">
                    Pourquoi des capteurs et des montres ?
                  </h2>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.1}>
                  <p className="text-[18px] leading-relaxed text-white/90 sm:text-[16px]">
                    Une montre ou un capteur peut donner des informations simples sur ta journée.
                  </p>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[18px] leading-relaxed text-white/90 sm:text-[16px]">
                    Ces informations aident MEMOY à mieux te connaître et à mieux veiller sur toi.
                  </p>
                </ScrollReveal>
              </div>

              {/* Cartes à droite */}
              <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <ScrollReveal direction="up" delay={0.15}>
                  <article className="relative flex h-full w-full flex-col items-center rounded-[32px] bg-white/5 p-6 backdrop-blur-[32px] shadow-[0_40px_120px_rgba(0,0,0,0.75)] sm:p-8">
                    <img
                      src="/img/CardBackground.webp"
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                    />
                    <h3 className="relative z-10 mb-6 text-center text-[18px] font-medium leading-tight text-white sm:text-[20px]">
                      Combien de temps tu as marché ou bougé.
                    </h3>
                    <div className="relative z-10 flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40">
                      <img
                        src="/img/Memoy-Icons/Empty.svg"
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-contain opacity-95"
                      />
                    </div>
                  </article>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.25}>
                  <article className="relative flex h-full w-full flex-col items-center rounded-[32px] bg-white/5 p-6 backdrop-blur-[32px] shadow-[0_40px_120px_rgba(0,0,0,0.75)] sm:p-8">
                    <img
                      src="/img/CardBackground.webp"
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                    />
                    <h3 className="relative z-10 mb-6 text-center text-[18px] font-medium leading-tight text-white sm:text-[20px]">
                      Comment tu as dormi : combien d'heures, si tu as eu une nuit agitée.
                    </h3>
                    <div className="relative z-10 flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40">
                      <img
                        src="/img/Memoy-Icons/Bed.svg"
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-contain opacity-95"
                      />
                    </div>
                  </article>
                </ScrollReveal>
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
              <h2 className="mb-0 text-center text-[52px] font-normal tracking-tight text-white">
              Pas de surveillance, une présence utile
                </h2>
              <p className="mb-0 text-center"> Les capteurs et montres restent des outils au service de ta dignité.</p>
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
                  Ils ne servent pas à te contrôler.
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
                  Tes données restent chez toi, elles ne sont pas vendues à des tiers.
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

        <ScrollReveal>
          <FlowerNavigation />
        </ScrollReveal>

        <Footer />
      </main>
    </div>
  );
}
