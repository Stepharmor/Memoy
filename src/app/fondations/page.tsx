"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FlowerNavigation from "@/components/FlowerNavigation";
import { motion } from "framer-motion";
export default function FondationsPage() {
  return (
    <div className="relative overflow-hidden bg-transparent text-slate-50">
      {/* Fond BackgroundFondations */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/img/Fondations/BackgroundFondations.webp')",
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
              Fondations basées 
              sur la confiance
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
                    Privée
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Tes données restent chez toi. Tes habitudes, tes repères, tes préférences, rien de cela n’est revendu, ni exploité commercialement.
Je ne crée pas de profil marketing sur toi. Je ne vends pas tes données à des tiers. Tout est chiffré et protégé.
</p>
                  </div>
                  <div className="shrink-0">
                    <img
                      src="/img/Memoy-Icons/Flower3.svg"
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
                      src="/img/Memoy-Icons/Home.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                  <div className="flex-1 space-y-4 text-left order-1 lg:order-2">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Hors ligne
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Je fonctionne même sans internet. Tu n’es pas dépendant·e d’une connexion Wi‑Fi ou 4G pour bénéficier de ma présence. Si le réseau coupe, je reste là, avec toi. Tes données critiques ne sont pas stockées uniquement sur des serveurs lointains.
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
                    Prendre soin
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Je suis conçue pour prendre soin, pas pour créer de la dépendance ou du profit. Chaque fonctionnalité répond à un vrai besoin : accompagner, rassurer, aider. Je ne te bombarde pas de notifications ou de données inutiles. Chaque décision est pensée avec dignité et respect.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <img
                      src="/img/Memoy-Icons/heart.svg"
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
                      src="/img/Memoy-Icons/Change.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                  <div className="flex-1 space-y-4 text-left order-1 lg:order-2">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Je reconnais tes moments difficiles
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Quand tu cherches tes mots, quand tu perds tes repères, quand la confusion arrive, je ne juge pas. Je suis patiente, cohérente, rassurante.
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
                    Avec les familles
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Je suis co-créée avec les familles, les aidants, les personnes concernées. Vous n’êtes pas des utilisateurs anonymes. Vous êtes des partenaires dans la construction. Vos retours, vos besoins réels, façonnent ma présence. Je suis pensée par celles et ceux qui connaissent vraiment ces enjeux, pas par des ingénieurs loin du terrain.
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
                      src="/img/Memoy-Icons/Simple.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                  <div className="flex-1 space-y-4 text-left order-1 lg:order-2">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Présence, pas surveillance
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Je veille, mais je n’espionne pas. Je t’aide à mieux comprendre ta journée, pas à te contrôler. Je ne crée pas de listes de surveillance ou de rapports destinés à juger. Je suis au service de ta sécurité et du lien, pas d’un contrôle administratif ou commercial.
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
                    Transparence
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Ce que je fais, pourquoi je le fais, comment je le fais, tout cela peut être expliqué simplement. Pas de boîte noire. Pas de secret. Tu sais (ou tes proches savent) sur quoi j’observe, comment j’utilise tes données, quand j’alerte. Si quelque chose te dérange, tu peux changer tes paramètres ou me le dire.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <img
                      src="/img/Memoy-Icons/together.svg"
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
                      src="/img/Memoy-Icons/Boussole.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                  <div className="flex-1 space-y-4 text-left order-1 lg:order-2">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Dignité d’abord
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    À chaque moment de ta vie, même quand la mémoire change;tu mérites du respect. Je ne te traite pas comme un patient à surveiller, mais comme une personne entière. Je ne crée pas de dépendance ou de honte autour de tes oublis. Je t’accompagne avec bienveillance, sachant que la mémoire est fragile pour tout le monde.
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
