import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/figma-assets";
import { WHATSAPP_URL } from "@/lib/links";
import { WhatsAppGlyph } from "@/components/landing/WhatsAppGlyph";
import { LANDING_TEXT, type Language } from "@/components/landing/translations";

type HeroSectionProps = {
  language: Language;
};

function HeroHeading({ language }: HeroSectionProps) {
  const text = LANDING_TEXT[language].hero;

  return (
    <div className="mx-auto mt-[310px] flex flex-col items-center pb-4 text-center">
      <>
        <h1 id="hero-heading" className="sr-only">
          {text.heading}
        </h1>
        <Image
          src="/received-gift-card.webp"
          alt={text.imageAlt}
          width={734}
          height={148}
          className="h-auto w-full max-w-[342px]"
          priority
        />
      </>
    </div>
  );
}

function HeroDescription({ language }: HeroSectionProps) {
  const text = LANDING_TEXT[language].hero;

  return (
    <div className="mx-auto mt-3 min-h-[87px] w-full max-w-[342px]">
      <div className="flex flex-col items-center px-[10.91px] text-center">
        <p className="font-manrope text-[clamp(16px,5vw,18px)] font-normal leading-[clamp(26px,7.8vw,29.25px)] text-[#c6c5d3]">
          {text.descriptionLines[0]}
          <br />
          {text.descriptionLines[1]}
        </p>
      </div>
    </div>
  );
}

function HeroActions({ language }: HeroSectionProps) {
  const text = LANDING_TEXT[language].hero;

  return (
    <div className="mx-auto flex w-full max-w-[342px] flex-col gap-4">
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-[11.99px] rounded-full bg-[rgba(255,255,255,0.18)] px-4 py-4 text-white transition hover:bg-[rgba(255,255,255,0.26)] min-[390px]:px-6"
        data-node-id="3:735"
      >
        <WhatsAppGlyph />
        <span className="font-manrope text-[15px] font-bold leading-6 min-[360px]:text-base">
          {text.whatsappCta}
        </span>
      </Link>
      <div className="flex justify-center pt-4">
        <div
          className="flex items-center gap-2 rounded-full border border-[rgba(70,70,81,0.1)] bg-[#ff8c00] px-[17px] py-[9px]"
          data-node-id="3:741"
        >
          <span className="relative block size-2.5 shrink-0">
            <Image alt="" src={ASSETS.clockIcon} fill className="object-contain" unoptimized  loading="eager" />
          </span>
          <p className="font-manrope text-xs font-medium leading-4 text-black">
            {text.validityNote}
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroSection({ language }: HeroSectionProps) {
  return (
    <section
      className="mx-auto flex min-h-[352px] w-full max-w-[370px] flex-col items-center justify-center"
      data-node-id="3:717"
      aria-labelledby="hero-heading"
    >
      <HeroHeading language={language} />
      <HeroDescription language={language} />
      <HeroActions language={language} />
    </section>
  );
}
