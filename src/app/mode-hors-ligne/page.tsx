"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FlowerNavigation from "@/components/FlowerNavigation";
import { motion } from "framer-motion";

export default function ModeHorsLignePage() {
  return (
    <div className="relative overflow-hidden bg-transparent text-slate-50">
      {/* Fond haloPink statique */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <img
          src="/img/ModeHorsLigne/HaloPink.png"
          alt=""
          className="mt-450 h-480 w-full object-cover object-center"
        />
      </div>
      {/* Fond étoiles comme sur les autres pages */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[1600px] w-[2200px] -translate-x-1/2 bg-[url('/img/BackgroundStars.svg')] bg-top bg-repeat-x" />
      </div>

      <main className="relative z-10 pb-32">
        {/* Hero – Mode hors ligne */}
        <section
          className="flex min-h-screen w-full flex-col bg-top bg-no-repeat px-6 pt-0 lg:px-10 xl:px-16"
          style={{
            backgroundImage: "url('/img/ModeHorsLigne/backgroundModeHorLigne.png')",
            backgroundSize: "100% auto",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Header />

          <div className="relative mt-24 flex flex-1 flex-col items-center justify-center text-center lg:mt-56">
           
              <h1 className="max-w-4xl text-balance text-[40px] font-normal leading-tight tracking-tight text-white sm:text-[52px] lg:text-[84px]">
              je fonctionne hors ligne
              </h1>
           
              <p className="mt-16 max-w-3xl text-[20px] leading-relaxed text-slate-200/90 sm:text-[32px]">
              Je suis présente même quand 
              internet coupe.
              </p>
          
            <div className="relative mt-32 flex justify-center">
              {/* Lueur HaloPresence sous presence.svg – pulsation */}
              <motion.img
                src="/img/ModeHorsLigne/HaloPresence.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[500%] w-[500%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.85, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src="/img/ModeHorsLigne/presence.svg"
                alt=""
                aria-hidden="true"
                className="relative z-10 mx-auto h-auto w-full max-w-2xl"
              />
            </div>
          </div>

          {/* Section titre + sous-titre + image */}
        <section className="mx-auto mt-84 max-w-[1600px] px-6 py-16 lg:px-10 xl:px-16">
          <div className="flex flex-col items-center text-center">
            <ScrollReveal direction="up">
              <h2 className="max-w-4xl text-[32px] font-normal leading-tight text-white sm:text-[40px] lg:text-[48px]">
              Comment je fonctionne hors ligne
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <p className="mt-6 max-w-3xl text-[18px] leading-relaxed text-slate-200/90 sm:text-[20px]">
              Je suis conçue pour rester présente même quand internet coupe.
Cela signifie que tu n’as pas besoin d’une connexion Wi-Fi ou 4G constante pour que je t’accompagne. 
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="mt-12">
              <img
                src="/img/ModeHorsLigne/FemmePrepareAManger.png"
                alt="Une personne prépare à manger, accompagnée par Memoy"
                className="mx-auto w-full max-w-4xl rounded-[24px] object-cover"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Section Pourquoi c'est important */}
        <section className="mx-auto mt-24 max-w-[1600px] px-6 py-16 lg:px-10 xl:px-16">
          <ScrollReveal direction="up">
            <div
              className="rounded-[40px] px-6 py-12 sm:px-10 lg:px-14 lg:py-16"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(69.19999694824219px)",
              }}
            >
              <h2 className="text-left text-[28px] font-normal leading-tight text-white sm:text-[36px] lg:text-[44px]">
                Pourquoi c'est important
              </h2>
              <p className="mt-6 max-w-3xl text-left text-[17px] leading-relaxed text-white/90 sm:text-[18px]">
                Quand on dépend entièrement d'internet, on perd la présence dès qu'il y a une coupure.
              </p>

              <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/img/Memoy-Icons/Empty.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                  />
                  <p className="mt-4 text-[15px] leading-relaxed text-white sm:text-[16px]">
                    Ton Wi-Fi tombe ? Je disparais.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/img/Memoy-Icons/Report.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                  />
                  <p className="mt-4 text-[15px] leading-relaxed text-white sm:text-[16px]">
                    Ton forfait 4G est épuisé ? Plus de présence.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/img/Memoy-Icons/Simple.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                  />
                  <p className="mt-4 text-[15px] leading-relaxed text-white sm:text-[16px]">
                    Un problème sur le serveur ? Tu es seul·e.
                  </p>
                </div>
              </div>

              <p className="mt-12 max-w-3xl text-left text-[16px] leading-relaxed text-white/90 sm:text-[17px]">
                Pour quelqu'un dont la mémoire est fragile, cette interruption peut être stressante et désorientante. Je dois rester là, même en cas de coupure.
              </p>
            </div>
          </ScrollReveal>
        </section>

        </section>

        
        

        {/* Section Comment j'y arrive ? */}
        <section className="mx-auto mt-24 max-w-[1600px] px-6 py-16 lg:px-10 xl:px-16">
          <ScrollReveal direction="up">
            <h2 className="text-center text-[28px] font-normal leading-tight text-white sm:text-[36px] lg:text-[44px]">
              Comment j'y arrive ?
            </h2>
          </ScrollReveal>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-stretch gap-6 sm:grid-cols-3">
            <ScrollReveal direction="up" delay={0.1}>
              <div
                className="flex h-full flex-col items-center justify-center rounded-[24px] px-6 py-8 text-center"
                style={{
                  background: "rgba(255, 255, 255, 0.16)",
                  backdropFilter: "blur(69px)",
                }}
              >
                <p className="text-[15px] leading-relaxed text-white sm:text-[16px]">
                  J'apprends tes habitudes localement. Quand j'ai une connexion, j'observe et j'enregistre tes habitudes.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <div
                className="flex h-full flex-col items-center justify-center rounded-[24px] px-6 py-8 text-center"
                style={{
                  background: "rgba(255, 255, 255, 0.16)",
                  backdropFilter: "blur(69px)",
                }}
              >
                <p className="text-[15px] leading-relaxed text-white sm:text-[16px]">
                  Cette connaissance reste stockée sur ton appareil, pas seulement sur des serveurs lointains.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <div
                className="flex h-full flex-col items-center justify-center rounded-[24px] px-6 py-8 text-center"
                style={{
                  background: "rgba(255, 255, 255, 0.16)",
                  backdropFilter: "blur(69px)",
                }}
              >
                <p className="text-[15px] leading-relaxed text-white sm:text-[16px]">
                  Si internet coupe, je continue à m'appuyer sur ces connaissances pour t'aider.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section Lorsque je suis en ligne */}
        <section className="relative mx-auto mt-48 max-w-[1600px] overflow-hidden px-6 py-20 lg:px-10 xl:px-16">
          
          {/* Fond Star – hauteur adaptée à la section, rotation lente */}
          <div
            className="star-rotate pointer-events-none absolute inset-0 z-[1] opacity-80"
            aria-hidden="true"
            style={{
              backgroundImage: "url('/img/ModeHorsLigne/Star.png')",
              backgroundSize: "auto 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          <div className="relative z-10">
            <ScrollReveal direction="up">
              <h2 className="text-center text-[28px] font-normal leading-tight text-white sm:text-[36px] lg:text-[44px]">
                Lorsque je suis en ligne
                <br />
                je peux toujours
              </h2>
            </ScrollReveal>

            <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-6">
              {[
                "Te rappeler tes repères : l'heure, tes habitudes, ce qui t'attend.",
                "Reconnaître tes activités : quand tu te lèves, quand tu manges, quand tu bouges.",
                "Te parler et te rassurer, avec la même voix, les mêmes repères de toujours.",
              ].map((text) => (
                <ScrollReveal key={text} direction="up">
                  <div
                    className="flex min-h-[80px] items-center justify-start gap-4 rounded-[24px] px-6 py-6 text-left"
                    style={{
                      background: "rgba(255, 255, 255, 0.10)",
                      
                    }}
                  >
                    <span
                      className="h-3 w-3 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                      aria-hidden="true"
                    />
                    <p className="text-[15px] leading-relaxed text-white sm:text-[16px]">
                      {text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section Quand la connexion revient */}
        <section className="relative mx-auto mt-24 max-w-[1600px] overflow-hidden px-6 py-28 lg:px-10 lg:py-36 xl:px-16 xl:py-40">
          <div
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden="true"
            style={{
              backgroundImage: "url('/img/ModeHorsLigne/BackgroundConnexion.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="relative z-10">
            <ScrollReveal direction="up">
              <h2 className="text-center text-[28px] font-normal leading-tight text-white sm:text-[36px] lg:text-[44px]">
                Quand la connexion revient
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.05}>
              <p className="mx-auto mt-6 max-w-3xl text-center text-[17px] leading-relaxed text-white/90 sm:text-[18px]">
                C'est transparent pour toi. Tu ne dois rien redémarrer, rien forcer.
              </p>
            </ScrollReveal>
            <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-6">
              {[
                "Je synchronise ce qui s'est passé en ton absence avec tes proches (si tu l'as autorisé)",
                "Je reçois les mises à jour ou les nouvelles informations qu'ils ont peut-être ajoutées.",
                "Tout redevient en temps réel sans que tu aies besoin de faire quoi que ce soit.",
              ].map((text) => (
                <ScrollReveal key={text} direction="up">
                  <div
                    className="flex min-h-[80px] items-center justify-start gap-4 rounded-[24px] px-6 py-6 text-left"
                    style={{
                      background: "rgba(255, 255, 255, 0.10)",
                    }}
                  >
                    <span
                      className="h-3 w-3 shrink-0 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.6)]"
                      aria-hidden="true"
                    />
                    <p className="text-[15px] leading-relaxed text-white sm:text-[16px]">
                      {text}
                    </p>
                  </div>
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
