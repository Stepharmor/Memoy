"use client";

import FlowerNavigation from "@/components/FlowerNavigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export default function PourLesPatientsPage() {
  return (
    <div className="relative overflow-hidden bg-transparent text-slate-50">
      <main className="relative z-10 pb-32">
        <section
          className="mx-auto flex max-w-[1600px] flex-col bg-contain bg-top bg-no-repeat px-6 pt-0 pb-24 lg:px-10 xl:px-16"
          style={{ backgroundImage: "url('/img/PourLesPatients/BackgroundHero.webp')" }}
        >
          <Header />

          {/* Hero – Pour les patients */}
          <div className="mt-32 flex flex-col items-center text-center">
            
              <div className="mx-auto max-w-4xl space-y-6">
                <h1 className="text-[40px] font-normal leading-tight tracking-tight text-white sm:text-[52px] lg:text-[64px]">
                Je t'aide au quotidien
                </h1>
                <h2 className="text-[35px] leading-relaxed text-slate-200/85">
                Je suis là pour rendre chaque moment plus simple, plus rassurant.
                </h2>
              </div>
           
          </div>

          {/* matin */}
          <section
            className="relative mt-32 bg-no-repeat bg-center bg-[length:80%_auto] px-6 py-32 lg:px-10 xl:px-16"
            style={{ backgroundImage: "url('/img/PourLesPatients/Sunrise.webp')" }}
          >
            
              <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
                <div className="space-y-3">
                  <h2 className="text-[32px] sm:text-[32px] font-normal tracking-tight text-white">
                    Le matin :<br /> je t'aide à retrouver tes repères
                  </h2>
                  <p className="text-[24px] leading-relaxed text-slate-200/90">
                    Quand tu te réveilles, les choses peuvent sembler confuses. <br />
                    Je suis là pour clarifier.
                  </p>
                </div>
              </div>
           
          </section>

          {/* Trois cartes d'accompagnement – empilées puis déployées */}
          <section className="mt-24 px-6 lg:px-10 xl:px-16">
            <div className="mx-auto grid max-w-5xl gap-8 pt-4 sm:grid-cols-3">
              {([
                {
                  title: "Je te rappelle où tu es, quel jour c'est, ce qui t'attend aujourd'hui.",
                  body: "",
                  icon: "/img/Memoy-Icons/Boussole.svg",
                  stackX: "100%",
                  rotate: -5,
                },
                {
                  title: "Je reconnais tes habitudes du matin : petit-déjeuner, routine de toilette, vêtements.",
                  body: "",
                  icon: "/img/Memoy-Icons/Routine.svg",
                  stackX: "0%",
                  rotate: 0,
                },
                {
                  title: "Je te donne des repères visuels ou sonores que tu reconnais, pour te sentir en sécurité.",
                  body: "",
                  icon: "/img/Memoy-Icons/Repeat.svg",
                  stackX: "-100%",
                  rotate: 12,
                },
              ] as const).map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ x: card.stackX, opacity: 1, scale: 0.92, rotate: card.rotate}}
                  whileInView={{ x: "0%", opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-350px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + index * 0.12,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <article className="h-full rounded-[24px] bg-[linear-gradient(-25deg,rgba(255, 255, 255, 0)_0%,rgba(255,255,255,0)_31%,rgba(255,255,255,0.12)_100%)] p-[1px]">
                    <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-[22px] bg-white/5 p-6 text-center backdrop-blur-[0px]">
                      <img
                        src="/img/CardBackgroundPink.webp"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-[35%] h-full w-full min-w-[140%] -translate-x-1/2 object-cover object-center opacity-70"
                      />
                      <motion.div
                        className="relative z-10 space-y-2"
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
              ))}
            </div>
          </section>

          {/* journée – backgroundSun + Sun */}
          <section className="relative mt-128 px-6 pb-24 lg:px-10 xl:px-16">
            {/* Fond backgroundSun juste sous le soleil */}
            <img
              src="/img/PourLesPatients/backgroundSun.webp"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 -top-250 h-[2000px] w-auto max-w-none -translate-x-1/2 opacity-90 -z-10"
            />
            <img
              src="/img/PourLesPatients/Oiseaux.webp"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-0 -top-100 h-[300px] w-auto max-w-none -z-10"
            />
            {/* Soleil décoratif au-dessus du fond avec effet de scale + rotation lente */}
            <motion.img
              src="/img/PourLesPatients/Sun.webp"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-[1260px] w-auto -translate-x-1/2 -translate-y-1/3 opacity-90 -z-30"
              animate={{ scale: [0.9, 1, 0.9], rotate: [0, 360] }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
              <ScrollReveal direction="up">
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-normal leading-tight tracking-tight text-white">
                La journée : <br /> Je t'accompagne dans tes activités
                </h2>
              </ScrollReveal>

              <div className="grid w-full gap-8 pt-4 sm:grid-cols-3">
                {[
                  {
                    title: "Je te rappelle doucement ce que tu étais en train de faire si tu as oublié.",
                    body: "",
                    icon: "/img/Memoy-Icons/Spirale.svg",
                  },
                  {
                    title: "Je t'aide à te souvenir des personnes importantes qui te visitent, ou qui t'appellent.",
                    body: "",
                    icon: "/img/Memoy-Icons/Grow.svg",
                  },
                  {
                    title: "Je reconnais tes activités habituelles : manger, te lever, sortir et je m'adapte si les choses changent..",
                    body: "",
                    icon: "/img/Memoy-Icons/Square.svg",
                  },
                ].map((card, index) => (
                  <ScrollReveal key={card.title} delay={0.1 + index * 0.1}>
                    <article className="h-full rounded-[24px] bg-[linear-gradient(-25deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_31%,rgba(255, 255, 255, 0.12)_100%)] p-[1px]">
                      <div className="flex h-full flex-col justify-between gap-4 rounded-[22px] bg-white/5 ] bg-cover bg-center p-6 text-center backdrop-blur-[39px]">
                        <div className="space-y-2">
                          <h3 className="text-[20px] font-normal text-white">
                            {card.title}
                          </h3>
                          {card.body && (
                            <p className="mt-1 text-[15px] leading-relaxed text-slate-200/85">
                              {card.body}
                            </p>
                          )}
                        </div>
                        {card.icon && (
                          <img
                            src={card.icon}
                            alt=""
                            aria-hidden="true"
                            className="mx-auto h-[140px] w-[140px] object-contain"
                          />
                        )}
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

        {/* Soir – titre, sous-titre et 3 cartes */}
        <section className="relative mx-auto mt-128 max-w-[1000px] px-6 lg:px-10 xl:px-16">
          {/* Étoile en fond */}
          <img
            src="/img/BackgroundStars.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 w-auto -translate-x-1/2 -translate-y-1/3 opacity-70 -z-10"
          />
          {/* Moon background – sous la lune */}
          <img
            src="/img/PourLesPatients/moonBackground.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-100 -right-60 h-auto w-auto -z-20"
          />
          {/* Lune en bas à droite */}
          <img
            src="/img/PourLesPatients/moon.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute w-[600px] h-auto -bottom-50 -right-30 opacity-80 -z-10"
          />

          <div className="relative max-w-4xl">
            <ScrollReveal direction="up">
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-normal leading-tight tracking-tight text-white opacity-70">
              La nuit :
              <br />Je veille discrètement
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <p className="mt-4 text-[18px] leading-relaxed text-slate-200/85">
                Je reste présente même quand tu dors.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                title: "Je reconnais les changements dans ta nuit : si tu bouges beaucoup, si tu te lèves plusieurs fois.",
                body: "",
                icon: "/img/Memoy-Icons/Bed.svg",
              },
              {
                title: "Je peux alerter discrètement si quelque chose sort de l'ordinaire, sans te réveiller inutilement.",
                body: "",
                icon: "/img/Memoy-Icons/Grandir.svg",
              },
              {
                title: "Je veille sur ta sécurité : lumières douces, présence rassurante.",
                body: "",
                icon: "/img/Memoy-Icons/Flower.svg",
              },
            ].map((card, index) => (
              <ScrollReveal key={card.title} delay={0.1 + index * 0.1}>
                <article className="h-full rounded-[24px]">
                  <div className="flex h-full flex-col justify-between gap-4 rounded-[22px] bg-white/10 bg-[url('/img/CardBackground.webp') bg-center p-6 text-left]">
                    <div className="space-y-2">
                      <h3 className="text-left text-[20px] font-normal text-white">{card.title}</h3>
                      <p className="mt-1 text-left text-[15px] leading-relaxed text-slate-200/85">
                        {card.body}
                      </p>
                    </div>
                    {card.icon && (
                      <img
                        src={card.icon}
                        alt=""
                        aria-hidden="true"
                        className="mx-auto h-[140px] w-[140px] object-contain"
                      />
                    )}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Section finale – titre + sous-titre */}
        {/* Fonctionnement hors connexion */}
        <section
          className="relative mt-84 grid gap-10 bg-center bg-no-repeat pt-16 lg:items-center"
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
              Les moments difficiles :
              <br />Je t'apporte une présence rassurante
              </h2>
              <p className="mb-0 text-center"> Quand la confusion arrive, ou quand tu cherches à te repérer, je ne juge pas.</p>
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
                  Je suis douce et patiente, même si tu me poses la même question plusieurs fois.
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
                  Je te donne des réponses cohérentes, toujours les mêmes repères, pour que tu puisses te fier à moi.
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
                  <br />Je te rassure : tu n'es pas seul·e.
                  </p>
                </div>
              </motion.article>
            </div>


          </section>

        </section>

          <ScrollReveal>
            <FlowerNavigation />
          </ScrollReveal>

        <Footer />
      </main>
    </div>
  );
}
