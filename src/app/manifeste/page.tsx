"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FlowerNavigation from "@/components/FlowerNavigation";
import { motion } from "framer-motion";
export default function ManifestePage() {
  return (
    <div className="relative overflow-hidden bg-transparent text-slate-50">
      {/* Fond BackgroundManifeste */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/img/Manifeste/BackgroundManifeste.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <main className="mt-32 relative z-10 pb-32">
        <section className="mx-auto flex max-w-[1600px] flex-col px-6 pt-0 lg:px-10 xl:px-16">
          <Header />
          <div className="relative flex flex-col items-center justify-center pb-8 text-center pt-28 lg:pt-36">
            <ScrollReveal direction="up">
              <h1 className="max-w-4xl text-balance text-[40px] font-normal leading-tight tracking-tight text-white sm:text-[52px] lg:text-[84px]">
                Notre manifeste
              </h1>
            </ScrollReveal>
          </div>
        </section>
        {/* Bloc */}
        <section className="mx-auto mt-0 max-w-5xl px-6 lg:px-10 xl:px-16">
          <div className="relative flex flex-col items-center">
            <ScrollReveal direction="up">
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
              <article className="relative w-full overflow-hidden rounded-[32px] bg-white/5 px-6 py-10 text-slate-50 backdrop-blur-[32px] shadow-none sm:px-10 lg:px-14">
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  <div className="flex-1 space-y-4 text-left">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    La mémoire est précieuse
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    La mémoire n’est pas juste un ensemble de données à traiter.
C’est ce qui te rend toi. Ce qui te lie aux autres. Ce qui donne sens à chaque jour. Quand elle vacille, ce n’est pas une défaillance à cacher. C’est une vulnérabilité partagée et il y a une dignité à la reconnaître et à la soutenir.
</p>
                  </div>
                  <div className="shrink-0">
                    <img
                      src="/img/Memoy-Icons/Lotus.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                </div>
              </article>
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Bloc */}
        <section className="mx-auto mt-0 max-w-5xl px-6 lg:px-10 xl:px-16">
          <div className="relative flex flex-col items-center">
            <ScrollReveal direction="up">
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
              <article className="relative w-full overflow-hidden rounded-[32px] bg-white/5 px-6 py-10 text-slate-50 backdrop-blur-[32px] shadow-none sm:px-10 lg:px-14">
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  <div className="shrink-0 order-2 lg:order-1">
                    <img
                      src="/img/Memoy-Icons/heart.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                  <div className="flex-1 space-y-4 text-left order-1 lg:order-2">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Prendre soin, ce n’est pas surveiller
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Moi, je crois que prendre soin, c’est être présent sans étouffer.C’est reconnaître la vulnérabilité sans enlever la dignité. C’est veiller sans espionner. C’est créer du lien, pas de la dépendance.
                    </p>
                  </div>
                </div>
              </article>
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Bloc */}
        <section className="mx-auto mt-0 max-w-5xl px-6 lg:px-10 xl:px-16">
          <div className="relative flex flex-col items-center">
            <ScrollReveal direction="up">
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
              <article className="relative w-full overflow-hidden rounded-[32px] bg-white/5 px-6 py-10 text-slate-50 backdrop-blur-[32px] shadow-none sm:px-10 lg:px-14">
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  <div className="flex-1 space-y-4 text-left">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Les familles le méritent
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Accompagner un proche avec une mémoire qui change, c’est dur.
Il y a de la culpabilité, de l’épuisement, du doute. Je ne suis pas là pour résoudre tout ça. Mais je suis là pour réduire le fardeau, pour que tu puisses respirer, pour que tu saches qu’une autre présence veille quand tu ne peux pas être là. Les familles méritent du soutien, pas du jugement.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <img
                      src="/img/Memoy-Icons/Duo.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                </div>
              </article>
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Bloc */}
        <section className="mx-auto mt-0 max-w-5xl px-6 lg:px-10 xl:px-16">
          <div className="relative flex flex-col items-center">
            <ScrollReveal direction="up">
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
              <article className="relative w-full overflow-hidden rounded-[32px] bg-white/5 px-6 py-10 text-slate-50 backdrop-blur-[32px] shadow-none sm:px-10 lg:px-14">
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  <div className="shrink-0 order-2 lg:order-1">
                    <img
                      src="/img/Memoy-Icons/Flower2.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                  <div className="flex-1 space-y-4 text-left order-1 lg:order-2">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    La technologie doit servir l’humain, pas l’inverse
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Je suis une technologie. Mais je ne veux pas être complexe, envahissante, ou addictive. Je veux être simple, discrète, fiable, comme une présence humaine.
                    </p>
                  </div>
                </div>
              </article>
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Bloc */}
        <section className="mx-auto mt-0 max-w-5xl px-6 lg:px-10 xl:px-16">
          <div className="relative flex flex-col items-center">
            <ScrollReveal direction="up">
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
              <article className="relative w-full overflow-hidden rounded-[32px] bg-white/5 px-6 py-10 text-slate-50 backdrop-blur-[32px] shadow-none sm:px-10 lg:px-14">
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  <div className="flex-1 space-y-4 text-left">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Les données privées doivent rester privées
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Tes données personnelles ne sont pas un bien consommable. Je crois que la vie privée n’est pas négociable. Et que le respect des données, c’est respect de la personne.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <img
                      src="/img/Memoy-Icons/Home.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                </div>
              </article>
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Bloc */}
        <section className="mx-auto mt-0 max-w-5xl px-6 lg:px-10 xl:px-16">
          <div className="relative flex flex-col items-center">
            <ScrollReveal direction="up">
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
              <article className="relative w-full overflow-hidden rounded-[32px] bg-white/5 px-6 py-10 text-slate-50 backdrop-blur-[32px] shadow-none sm:px-10 lg:px-14">
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  <div className="shrink-0 order-2 lg:order-1">
                    <img
                      src="/img/Memoy-Icons/Simple.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                  <div className="flex-1 space-y-4 text-left order-1 lg:order-2">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Une autre façon de prendre soin est possible
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Je veux montrer qu’une autre approche est possible. Une approche où la technologie sert le bien, où la relation prime sur l’extraction de valeur.
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </section>
        <ScrollReveal className="mt-32">
          <FlowerNavigation />
        </ScrollReveal>
        <Footer />
      </main>
    </div>
  );
}
