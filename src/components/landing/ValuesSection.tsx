import Image from "next/image";
import { ASSETS } from "@/lib/figma-assets";
import { LANDING_TEXT, type Language } from "@/components/landing/translations";

type ValuesSectionProps = {
  language: Language;
};

export function ValuesSection({ language }: ValuesSectionProps) {
  const text = LANDING_TEXT[language].values;

  return (
    <section className="flex w-full flex-col gap-6" data-node-id="3:746" aria-labelledby="values-heading">
      <div className="ml-2 flex flex-col gap-2">
        <h2
          id="values-heading"
          className="font-orbitron text-2xl font-bold leading-8 text-[#dfe0ff]"
        >
          {text.title}
        </h2>
        <p className="font-manrope text-base font-normal leading-6 text-[#c6c5d3]">
          {text.descriptionLines[0]}
          <br />
          {text.descriptionLines[1]}
        </p>
      </div>
      <div
        className="flex w-full flex-col gap-4 rounded-[30px] bg-[rgba(0,20,220,0.18)] px-6 pb-6 pt-[21px]"
        data-node-id="3:752"
      >
        <div className="flex h-[31px] w-full items-center justify-between gap-[7px] px-3">
          <span className="font-manrope text-sm font-extrabold uppercase leading-5 tracking-[1.4px] text-[#79d1ff]">
            {text.availableValues}
          </span>
          <span className="relative h-[31px] w-[35.059px] shrink-0">
            <Image alt="" src={ASSETS.walletIcon} fill className="object-contain" unoptimized  loading="eager" />
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <ValueRow label="100,000 AMD" highlight={false} check={ASSETS.checkOne} />
          <ValueRow label="250,000 AMD" highlight check={ASSETS.checkTwo} />
          <ValueRow label="500,000 AMD" highlight={false} check={ASSETS.checkTwo} />
        </div>
      </div>
    </section>
  );
}

type ValueRowProps = { label: string; highlight: boolean; check: string };

function ValueRow({ label, highlight, check }: ValueRowProps) {
  return (
    <div className="flex items-center justify-between rounded-[42px] bg-[rgba(91,98,252,0.24)] p-3">
      <span
        className={`font-space-grotesk text-xl font-bold leading-7 ${
          highlight ? "text-[#79d1ff]" : "text-[#dfe0ff]"
        }`}
      >
        {label}
      </span>
      <span className="relative size-5 shrink-0">
        <Image alt="" src={check} fill className="object-contain" unoptimized  loading="eager" />
      </span>
    </div>
  );
}
