import Image from "next/image";
import { ASSETS } from "@/lib/figma-assets";

type DecentralizeIconProps = { className?: string };

export function DecentralizeIcon({
  className = "relative size-[49px] shrink-0 overflow-hidden",
}: DecentralizeIconProps) {
  const a1 = ASSETS.decentralizeAccent1;
  const a2 = ASSETS.decentralizeAccent2;
  const g1 = ASSETS.decentralizeGlass1;
  const g2 = ASSETS.decentralizeGlass2;
  const g3 = ASSETS.decentralizeGlass3;
  const g4 = ASSETS.decentralizeGlass4;

  return (
    <div className={className} data-name="decentralize">
      <div className="absolute inset-[17.39%_34.78%_52.18%_34.78%]">
        <div className="relative size-full">
          <Image alt="" src={a1} fill className="object-cover" sizes="49px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[52.17%_41.3%_30.44%_41.3%]">
        <div className="relative size-full">
          <Image alt="" src={a2} fill className="object-cover" sizes="49px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[82.61%_41.3%_0_41.3%]">
        <div className="relative size-full">
          <Image alt="" src={a2} fill className="object-cover" sizes="49px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[76.09%_65.22%_6.52%_17.39%]">
        <div className="relative size-full">
          <Image alt="" src={a2} fill className="object-cover" sizes="49px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[76.09%_17.39%_6.52%_65.22%]">
        <div className="relative size-full">
          <Image alt="" src={a2} fill className="object-cover" sizes="49px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[0_17.39%_43.46%_17.39%]">
        <div className="relative size-full">
          <Image alt="" src={g1} fill className="object-cover" sizes="49px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[65.22%_47.83%_13.04%_47.83%]">
        <div className="relative size-full">
          <Image alt="" src={g2} fill className="object-cover" sizes="49px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[58.68%_54.35%_19.57%_23.91%]">
        <div className="relative size-full">
          <Image alt="" src={g3} fill className="object-cover" sizes="49px" unoptimized  loading="eager" />
        </div>
      </div>
      <div className="absolute inset-[58.7%_23.91%_19.57%_54.35%]">
        <div className="relative size-full">
          <Image alt="" src={g4} fill className="object-cover" sizes="49px" unoptimized  loading="eager" />
        </div>
      </div>
    </div>
  );
}
