"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FlowerNavigation from "@/components/FlowerNavigation";
import { motion } from "framer-motion";
export default function CoCreationPage() {
  return (
    <div className="relative overflow-hidden bg-transparent text-slate-50">
      {/* Fond BackgroundCoCreation */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/img/CoCreation/BackgroundCoCreation.webp')",
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
                Co-création avec les familles et partenaires
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
                    Pourquoi la co-création ?
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Celles et ceux qui vivent vraiment les enjeux de la mémoire fragile, les familles, les proches, les professionnels du soin, savent mieux que quiconque ce qui aide et ce qui ne sert à rien. Un ingénieur peut créer un système. Mais c’est une famille épuisée qui sait si c’est vraiment utile. Un chercheur peut parler de démence. Mais c’est la personne qui la vit qui sait ce qui la rassure.
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
                      src="/img/Memoy-Icons/Grandir.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                  <div className="flex-1 space-y-4 text-left order-1 lg:order-2">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Comment ça marche
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Nous écoutons
Nous passons du temps avec les familles, les aidants, les structures de soin pour comprendre :<br />
	•	Quels sont les vrais défis au quotidien ?<br />
	•	Qu’est-ce qui crée du stress ou de la culpabilité ?<br />
	•	Qu’est-ce qui aiderait vraiment, sans devenir trop complexe ?<br />
Ce que nous apprenons façonne chaque décision.<br /><br />

Nous testons ensemble, nous changeons, nous améliorons avec vous. Vos retours directs changent le produit, c’est une vraie collaboration.
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
                    Nos partenaires
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Nous travaillons avec :<br />
	•	Les familles accompagnant un proche avec trouble de mémoire.<br />
	•	Les aidants professionnels : infirmiers, ergothérapeutes, psychologues.<br />
	•	Les structures de soin : maisons de retraite, services d’aide à domicile, unités spécialisées Alzheimer.<br />
	•	Les associations de patients et de familles.<br />
	•	Les chercheurs en gériatrie, neuropsychologie, et accompagnement.<br />
	•	Les organisations de confiance partageant nos valeurs de dignité et de respect.<br /><br />
Chacun apporte sa perspective, et c’est cette richesse qui nous rend meilleure.
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
                      src="/img/Memoy-Icons/Repeat.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                  <div className="flex-1 space-y-4 text-left order-1 lg:order-2">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Tu veux en faire partie ?
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    La co-création est clé pour nous. Si tu veux nous aider à mieux servir les familles, si tu veux nous dire ce qui manque ou ce qui ne fonctionne pas, nous écoutons.
Parce que c’est ensemble que nous pouvons vraiment prendre soin. </p>
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
