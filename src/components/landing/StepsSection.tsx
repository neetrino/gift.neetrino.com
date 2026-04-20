import Image from "next/image";
import { ASSETS } from "@/lib/figma-assets";
import { LANDING_TEXT, type Language } from "@/components/landing/translations";

type StepsSectionProps = {
  language: Language;
};

export function StepsSection({ language }: StepsSectionProps) {
  const text = LANDING_TEXT[language].steps;

  return (
    <section className="relative flex w-full flex-col gap-12" data-node-id="3:821" aria-labelledby="steps-heading">
      <h2
        id="steps-heading"
        className="text-center font-orbitron text-2xl font-bold leading-8 text-[#dfe0ff]"
      >
        {text.titleLines[0]}
        <br />
        {text.titleLines[1]}
      </h2>
      <div className="relative flex w-full flex-col gap-12">
        <div
          className="absolute bottom-[30px] left-[23px] top-2 w-px overflow-hidden"
          data-node-id="3:825"
          aria-hidden
        >
          <div className="relative h-full w-full">
            <Image alt="" src={ASSETS.verticalLine} fill className="object-cover" unoptimized  loading="eager" />
          </div>
        </div>
        {text.items.map((step) => (
          <div key={step.n} className="relative flex gap-6">
            <StepCircle label={step.n} glow={Boolean(step.glow)} />
            <div className="flex min-w-0 flex-col gap-1">
              <h3 className="font-manrope text-lg font-bold leading-7 text-[#dfe0ff]">
                {step.title}
              </h3>
              <p className="font-manrope text-sm font-normal leading-5 text-[#c6c5d3]">
                {step.lines[0]}
                <br />
                {step.lines[1]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StepCircle({ label, glow }: { label: string; glow?: boolean }) {
  const className = glow
    ? "z-[1] flex size-12 shrink-0 items-center justify-center rounded-full bg-[#28307f] pb-[11.5px] pt-[10.5px] font-space-grotesk text-base font-bold text-[#79d1ff] shadow-[0px_0px_4px_0px_#79d1ff,0px_0px_14px_0px_#79d1ff]"
    : "z-[1] flex size-12 shrink-0 items-center justify-center rounded-full border border-[rgba(121,209,255,0.3)] bg-[#28307f] pb-[12.5px] pt-[11.5px] font-space-grotesk text-base font-bold text-[#79d1ff]";

  return (
    <div className={className}>
      {label}
    </div>
  );
}
