import Image from "next/image";
import { ASSETS } from "@/lib/figma-assets";

export function HeroVisual() {
  return (
    <>
      <div className="pointer-events-none absolute left-1/2 top-0 flex h-[820px] w-screen -translate-x-1/2 items-center justify-center">
        <div>
          <div
            className="hero-reference-bg relative h-[820px] w-screen overflow-hidden blur-[0px]"
            data-node-id="3:965"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-[-46px] flex h-[min(860.325px,156vw)] w-[min(875.027px,208vw)] -translate-x-[50%] items-center justify-center">
        <div className="rotate-[-2deg]">
          <div className="relative h-[min(820px,134vw)] w-[min(855px,190vw)]" data-node-id="25:120">
            <Image
              alt="Neetrino gift card mockup"
              src={ASSETS.cardMockup}
              fill
              className="object-contain"
              priority
              sizes="(max-width:768px) 190vw, 855px"
              unoptimized
            />
          </div>
        </div>
      </div>
    </>
  );
}
