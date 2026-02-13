"use client";

import FlowerNavigation from "@/components/FlowerNavigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const { scrollY } = useScroll();

  // Parallaxe douce pour le halo derrière le mobile dans la section "Qui je suis ?"
  const quiJeSuisParallaxY = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <div className="relative overflow-hidden bg-transparent text-slate-50">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden="true"
      >
        <div className="absolute -left-32 -top-40 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[-6rem] h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <main className="relative z-10 pb-24">
        {/* Hero – Je suis Memoy (fond plein écran + menu par-dessus) */}
        <section
          className="hero-lueur relative flex min-h-screen bg-top bg-no-repeat pb-20 pt-0 text-center shadow-[0_40px_120px_rgba(15,23,42,0.95)] scroll-snap-align-start"
          style={{
            backgroundImage: "url('/img/home/Background.webp')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            scrollSnapAlign: "start",
          }}
        >
          <div className="mx-auto flex w-full max-w-[1600px] flex-col px-6 lg:px-10 xl:px-12">
            <Header />

            <div className="flex flex-1 flex-col items-center justify-center pb-8 pt-8">
              <h1 className="mb-2 text-balance text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-[112px]">
                Je suis{" "}
                <span className="relative inline-block">
                  <img
                    src="/img/logo.svg"
                    alt="Memoy"
                    className="relative z-10 inline-block h-[1.2em] sm:-mt-5 w-auto align-bottom"
                    style={{ verticalAlign: "middle" }}
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-[-0.5em] bottom-[-0em] h-[1.2em] -z-10 rounded-full bg-[#FFBE5D]/50 blur-lg"
                  />
                </span>
              </h1>

              <p className="mt-4 max-w-3xl text-pretty text-[28px] leading-relaxed text-slate-200/85">
                Une présence douce qui veille sur la mémoire au quotidien,
                <br className="hidden sm:block" />
                sans jugement ni intrusion.
              </p>
            </div>
          </div>

          {/* Découvrir Memoy + ligne verticale en bas de l'écran */}
          <div className="pointer-events-none absolute inset-x-0 bottom-10 flex flex-col items-center gap-4">
            <p className="text-[16px] font-normal text-white">Découvrir Memoy</p>
            <div className="h-18 w-px bg-gradient-to-b from-white/80 via-white/30 to-transparent" />
          </div>
        </section>

        {/* Contenu principal sous le hero */}
        <div className="mx-auto mt-48 w-full max-w-[1600px] px-10 lg:px-20 xl:px-32">
          {/* Section Je suis toujours là + cartes */}
          <section className="relative space-y-6">
            <div className="mx-auto max-w-4xl">
            <h2 className="mb-0 text-center text-[52px] font-normal tracking-tight text-white">
              Je suis toujours là
            </h2>
            <p className="mx-auto mt-1 max-w-3xl text-center text-[16px] leading-relaxed text-slate-200/85">
              J’accompagne les personnes dont la mémoire vacille et leurs proches,
              <br />
              à la maison comme à distance.
            </p>

            <div className="grid gap-8 pt-4 sm:grid-cols-3">
              {[
                {
                  title: "Souvenirs Infinis",
                  body: "MEMOY est une présence douce qui veille sur toi quand la mémoire vacille.",
                  icon: "/img/Memoy-Icons/CercleInfinis.svg",
                },
                {
                  title: "Garder les repères et le lien, partout",
                  body: "MEMOY aide à garder les repères et le lien avec les proches, même à distance et même sans internet.",
                  icon: "/img/Memoy-Icons/Duo.svg",
                },
                {
                  title: "La technologie au service de la dignité",
                  body: "MEMOY est conçu pour la dignité, la confiance et la vie privée",
                  icon: "/img/Memoy-Icons/Stars.svg",
                },
              ].map((card, index) => (
                <ScrollReveal key={card.title} delay={0.2 + index * 0.1}>
                  <article
                    className="rounded-[24px] bg-[linear-gradient(-25deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_31%,rgba(255,255,255,1)_100%)] p-[1px]"
                  >
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
                    <p className="mt-1 text-[14px] leading-relaxed text-slate-200/85">
                      {card.body}
                    </p>
                  </div>
                </article>
                </ScrollReveal>
              ))}
            </div>
            </div>

            {/* Fond d'étoiles à partir du bas des cartes */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-full h-[1200px] w-screen -translate-x-1/2 -translate-y-24 -z-10 bg-[url('/img/BackgroundStars.svg')] bg-top bg-repeat-x"
            />
          </section>

          {/* Qui je suis ? + mockup mobile */}
          <section className="mt-32 grid gap-10 pt-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <ScrollReveal direction="right">
              <div className="space-y-4">
                <h2 className="text-[32px] font-normal tracking-tight text-slate-50">
                  Qui je suis ?
                </h2>
                <h3 className="text-[22px] font-normal leading-relaxed text-slate-200/85">
                  Je suis une intelligence douce, conçue pour aider à se repérer dans le temps,
                  l’espace et les habitudes, quand la mémoire devient fragile. Je parle en première
                  personne pour rester simple, rassurante et proche de la personne accompagnée.
                </h3>
                <Link href="/je-suis-memoy" className="flex w-full items-center justify-center whitespace-normal rounded-full bg-white p-6 text-center text-[18px] font-medium text-slate-900 hover:bg-white/90 md:inline-flex md:w-auto md:whitespace-nowrap">
                  En savoir plus
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.15}>
              <div className="relative flex justify-center lg:justify-end">
                <motion.img
                  src="/img/home/FondMobile.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-[-240px] left-1/2 h-auto w-[980px] max-w-none -translate-x-[40%] -z-10"
                  style={{ y: quiJeSuisParallaxY }}
                  animate={{
                    x: [-220, 20, -220],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  src="/img/home/Mobile.webp"
                  alt="Aperçu de l'application Memoy sur mobile"
                  className="relative h-auto max-h-[620px] w-auto max-w-full cursor-pointer"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  whileHover={{
                    scale: 1.2,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    scale: {
                      duration: 0.9,
                      ease: "easeOut",
                    },
                  }}
                />
              </div>
            </ScrollReveal>
          </section>

          {/* Pour la personne accompagnée */}
          <section className="mt-64 space-y-10 pt-64">
            <div className="flex flex-col gap-0">
            <ScrollReveal direction="up">
            <div className="relative z-0 -mt-48 flex w-full min-w-0 justify-start overflow-visible rounded-3xl lg:w-full">
            
                <div className="relative z-0 w-full min-w-0 overflow-visible rounded-3xl flex justify-start">
                
                <img
                  src="/img/home/femme canape 1.webp"
                  alt="Personne assise sur un canapé, vue principale"
                  className="relative h-auto w-full origin-bottom-left object-contain max-w-[600px] lg:scale-125"
                /> 
                <img
                src="/img/home/halofemmecanape.webp"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-240px] left-1/2 h-auto w-[980px] max-w-none -translate-x-[70%] lg:scale-125 lg:origin-bottom-left"
                />
                
                <img
                  src="/img/home/femme canape 2.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-0 -left-0 h-auto w-[600px] object-contain lg:scale-115 lg:origin-bottom-left"
                />
                </div>
              
              </div>
             
              <div className="relative z-10 -mt-30 w-full max-w-[600px] space-y-4 text-left lg:ml-auto">
              <img
                  src="/img/home/point.webp"
                  alt=""
                  aria-hidden="true"
                  className="point-pulse absolute left-0 -top-20 z-10 h-auto w-16 lg:-left-10 lg:-top-20 md:left-20 md:-top-20"
                />
                <h2 className="text-[32px] font-normal tracking-tight text-slate-50">
                   Pour la personne accompagnée
                </h2>
                <h3 className="max-w-2xl text-[22px] font-normal leading-relaxed text-slate-200/85">
                Je t’aide à retrouver tes repères, à te sentir en sécurité chez toi, sans jamais te juger.
                  Je m’adapte à ton rythme, à tes routines et à ta manière de vivre, pour rester vraiment utile au quotidien.
                </h3>
                <div className="mt-2 flex items-center gap-64">
                  <Link href="/pour-les-patients" className="flex w-full items-center justify-center whitespace-normal rounded-full bg-white px-8 py-6 text-center text-[18px] font-medium text-slate-900 hover:bg-white/90 md:inline-flex md:w-auto md:whitespace-nowrap">
                  Comment je t’aide au quotidien
                  </Link>
                  
                </div>
              </div>
              </ScrollReveal>
              
            </div>
            
          </section>


          {/* Pour les familles */}
          <section className="mt-0 space-y-10 pt-64">
            <div className="flex flex-col gap-0">
            <ScrollReveal direction="up">
              <div className="relative z-10 w-full min-w-0 space-y-4 text-left lg:w-full">
                
                <h2 className="text-[32px] font-normal tracking-tight text-slate-50">
                  Pour les familles et les proches
                </h2>
                <h3 className="max-w-2xl text-[22px] font-normal leading-relaxed text-slate-200/85">
                Je crée un lien continu entre toi et ta famille, même quand la distance ou le temps compliquent les visites.
                Je rassure les proches en partageant des signaux essentiels, sans transformer la maison en lieu de surveillance.
                </h3>
                <div className="mt-2 flex items-center gap-64">
                  <Link href="/pour-les-familles" className="flex w-full items-center justify-center whitespace-normal rounded-full bg-white px-8 py-6 text-center text-[18px] font-medium text-slate-900 hover:bg-white/90 md:inline-flex md:w-auto md:whitespace-nowrap">
                    Découvrir l’accompagnement des familles
                  </Link>
                </div>
              </div>

              <div className="relative z-0 mt-12 flex w-full min-w-0 justify-center overflow-visible rounded-3xl lg:mt-0 lg:-mt-48 lg:w-full lg:justify-end">
                <div className="relative w-full max-w-[900px] lg:w-1/2">
                  <img
                    src="/img/home/point.webp"
                    alt=""
                    aria-hidden="true"
                    className="point-pulse absolute left-10 top-10 z-10 h-auto w-16"
                  />
                  <img
                    src="/img/home/famille.webp"
                    alt="Personne assise sur un canapé, vue principale"
                    className="relative h-auto w-full object-contain"
                  />
                </div>
              </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Mon intelligence sensorielle */}
          <section className="relative mt-16 min-h-[900px] overflow-visible py-16 lg:overflow-hidden">
            <ScrollReveal>
              <div className="relative flex min-h-[900px] flex-col items-center justify-center">
                <img
                  src="/img/intelligence.webp"
                  alt=""
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-full w-auto max-w-[200vw] -translate-x-1/2 -translate-y-1/2 scale-150 rotate-90 object-contain lg:inset-0 lg:w-full lg:scale-100 lg:rotate-0 lg:translate-x-0 lg:translate-y-0"
                />

                {/* Images flottantes HalloIntelligence */}
                {[1, 2, 3].map((num, index) => {
                  const baseLeft = `calc(30% + ${(index - 1) * 40}px)`;

                  // Images qui se croisent : gauche→droite, droite→gauche, etc.
                  const animateX =
                    index === 0
                      ? [-200, 40, -200] // 1 : gauche → droite
                      : index === 1
                      ? [ 200, -30, 200] // 2 : droite → gauche (inverse)
                      : [50, -200, 50]; // 3 : encore un léger décalage

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
                      animate={{ x: animateX }}
                      transition={{
                        duration: 6 + index, // vitesses légèrement différentes
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}

                <div className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center text-center">
                  <h2 className="mb-0 text-center text-[52px] font-normal tracking-tight text-white">
                    Mon intelligence sensorielle
                  </h2>

                  <div className="mt-24 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
                    {[
                      {
                        icon: "/img/Memoy-Icons/Entendre.svg",
                        text: "J'écoute les sons,",
                        maxWidth: "max-w-[240px]",
                        iconSize: "h-48 w-48 sm:h-48 sm:w-64 lg:h-64 lg:w-64",
                        marginTop: "mt-4",
                      },
                      {
                        icon: "/img/Memoy-Icons/oeil.svg",
                        text: "j'observe les habitudes pour détecter ce qui change ou sort de l'ordinaire",
                        maxWidth: "max-w-[280px]",
                        iconSize: "h-32 w-32 sm:h-32 sm:w-48 lg:h-64 lg:w-48",
                        marginTop: "mt-4",
                      },
                      {
                        icon: "/img/Memoy-Icons/Grandir.svg",
                        text: "J'alerte avec douceur",
                        maxWidth: "max-w-[200px]",
                        iconSize: "h-32 w-42 sm:h-40 sm:w-40 lg:h-48 lg:w-48",
                        marginTop: "mt-4",
                      },
                    ].map((item, index) => (
                      <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                        <div className="flex flex-col items-center text-center">
                          <div className="flex h-24 items-center justify-center sm:h-64 lg:h-auto lg:pb-2">
                            <img
                              src={item.icon}
                              alt=""
                              aria-hidden="true"
                              className={`${item.iconSize} text-white`}
                            />
                          </div>
                          <p className={`${item.marginTop} lg:mt-2 ${item.maxWidth} text-[16px] leading-relaxed text-white`}>
                            {item.text}
                          </p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>

                  <ScrollReveal delay={0.4}>
                    <div className="mt-8 flex justify-center">
                      <Link href="/mon-intelligence-sensorielle" className="flex w-full items-center justify-center whitespace-normal rounded-full bg-white px-8 py-6 text-center text-[18px] font-medium text-slate-900 hover:bg-white/90 md:inline-flex md:w-fit md:whitespace-nowrap">
                        Comprendre mon intelligence sensorielle
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Capteurs et montres */}
          <section className="mt-16 pt-16">
            <ScrollReveal>
              <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
                <div className="space-y-4">
                  <h2 className="text-[32px] font-normal tracking-tight text-slate-50">
                    Capteurs et montres
                  </h2>
                  <h3 className="text-[22px] font-normal leading-relaxed text-slate-200/85">
                    Je peux m’appuyer sur des capteurs et des montres pour surveiller certains signaux vitaux importants.
                    Ces dispositifs sont pensés pour être discrets, respectueux et au service du bien-être, pas du contrôle.
                  </h3>
                  <Link href="/capteurs" className="flex w-full items-center justify-center whitespace-normal rounded-full bg-white p-6 text-center text-[18px] font-medium text-slate-900 hover:bg-white/90 md:inline-flex md:w-auto md:whitespace-nowrap">
                    Voir les capteurs et montres bientôt compatibles
                  </Link>
                </div>

                <div className="relative flex justify-center lg:justify-end">
                  <motion.img
                    src="/img/home/blurWatch.webp"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[-240px] left-1/2 h-auto w-[980px] max-w-none -translate-x-[40%] -z-10"
                    animate={{
                      x: [-340, 40, -340],
                      y: [-50, 10, -50],
                      opacity: [1, 0.2, 1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Montre statique (sans Vivus) */}
                  <img
                    src="/img/home/watch.svg"
                    alt="Aperçu de l’application Memoy sur mobile"
                    className="relative h-auto max-h-[420px] w-auto max-w-full"
                  />
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Fonctionnement hors connexion */}
          <section
            className="mt-48 grid gap-10 bg-center bg-no-repeat pt-16 lg:items-center"
            style={{
              backgroundImage: "url('/img/home/BackgroundHorsConnexion.webp')",
              backgroundSize: "99% 99%",
            }}
          >
            <ScrollReveal>
              <h2 className="mb-0 text-center text-[32px] font-normal tracking-tight text-white sm:text-[40px] lg:text-[52px]">
                Fonctionnement hors connexion
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-6 flex justify-center">
                <img
                  src="/img/home/wifi-slash.svg"
                  alt="Icône de wifi désactivé"
                  className="h-30 w-auto"
                />
              </div>
            </ScrollReveal>

            <div className="mx-auto mt-10 grid w-full max-w-5xl gap-0">
              <ScrollReveal delay={0.2}>
                <article
                  className="relative z-10 mx-auto w-full min-h-[728px] max-w-[820px] bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/img/home/HorsConnexionBrique1.webp')",
                    backgroundSize: "99% 99%",
                  }}
                >
                <div className="relative mx-auto flex h-full max-w-[640px] flex-col gap-3 rounded-3xl px-6 py-6 text-center text-white lg:max-w-[620px]">
                  <h3 className="text-[28px] font-normal">
                    Les données restent à la maison
                  </h3>
                  <p className="px-6 text-[14px] leading-relaxed text-slate-100/90 lg:text-[18px]">
                    Les informations sont traitées localement, ce qui limite les échanges vers l’extérieur
                    et renforce la confidentialité et la sécurité.
                  </p>
                </div>
                </article>
              </ScrollReveal>

              <motion.article
                className="-mt-130 relative z-10 mx-auto w-full min-h-[518px] max-w-[908px] bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/img/home/HorsConnexionBrique2.webp')",
                  backgroundSize: "99% 99%",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="relative mx-auto flex h-full max-w-[640px] flex-col gap-3 px-6 py-6 text-center text-white lg:max-w-[620px]">
                  <h3 className="text-[28px] font-normal">
                    Toujours là, même sans réseau
                  </h3>
                  <p className="mt-2 px-6 text-[14px] leading-relaxed text-slate-100/90 lg:text-[18px]">
                    MEMOY continue d’accompagner la personne même quand la connexion internet tombe ou est instable,
                    pour que la présence ne dépende jamais du Wi-Fi ou de la 4G.
                  </p>
                </div>
              </motion.article>

              <motion.article
                className="-mt-70 relative z-20 mx-auto w-full min-h-[288px] max-w-[1055px] bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/img/home/HorsConnexionBrique3.webp')",
                  backgroundSize: "99% 99%",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="relative mx-auto flex h-full max-w-[640px] flex-col gap-3 px-6 py-6 text-center text-white lg:max-w-[620px]">
                  <h3 className="text-[28px] font-normal">
                    Continuité du quotidien, sans coupure
                  </h3>
                  <p className="mt-2 px-6 text-[14px] leading-relaxed text-slate-100/90 lg:text-[18px]">
                    Rappels, repères et routines restent disponibles hors ligne, pour que la personne garde ses habitudes
                    et ses points d’appui même en cas de coupure prolongée.
                  </p>
                </div>
              </motion.article>
            </div>

            <div className="mt-8 flex justify-center">
                <Link href="/mode-hors-ligne" className="flex w-full items-center justify-center whitespace-normal rounded-full bg-white px-8 py-6 text-center text-[18px] font-medium text-slate-900 hover:bg-white/90 md:inline-flex md:w-fit md:whitespace-nowrap">
                  Découvrir le mode hors ligne
                </Link>
              </div>
          </section>

          <ScrollReveal>
            <FlowerNavigation />
          </ScrollReveal>

          
        </div>
      </main>

      <Footer />
    </div>
  );
}
