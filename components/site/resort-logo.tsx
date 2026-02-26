import { cn } from "@/lib/utils";

type ResortLogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  showText?: boolean;
  hideTextOnMobile?: boolean;
  light?: boolean;
};

export function ResortLogo({
  className,
  markClassName,
  textClassName,
  showText = true,
  hideTextOnMobile = false,
  light = false,
}: ResortLogoProps) {
  const primary = light ? "#E9F4FF" : "#082543";
  const secondary = light ? "#B9D2E6" : "#4A6C8A";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className={cn("inline-flex h-11 w-11 shrink-0 items-center justify-center", markClassName)}>
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="logoBg" x1="7" y1="7" x2="57" y2="57" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0A3960" />
              <stop offset="1" stopColor="#082543" />
            </linearGradient>
            <linearGradient id="logoWaveA" x1="12" y1="30" x2="52" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#80DAE8" />
              <stop offset="1" stopColor="#5AB8D5" />
            </linearGradient>
            <linearGradient id="logoWaveB" x1="12" y1="38" x2="52" y2="49" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D1F3F6" />
              <stop offset="1" stopColor="#8FD8DF" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#logoBg)" />
          <circle cx="47" cy="18" r="4" fill="#F6D08B" />
          <path
            d="M13 31C16 28 19 26.8 23 26.8C28 26.8 30.6 30.7 35 30.7C39 30.7 42 27.8 46 27.8C49 27.8 51 28.8 52 30.6"
            stroke="url(#logoWaveA)"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          <path
            d="M13 40.2C16 37.2 19.5 35.7 23.8 35.7C28.8 35.7 31.3 39 35.7 39C39.4 39 42.2 36.6 46.3 36.6C48.8 36.6 50.8 37.4 52 39"
            stroke="url(#logoWaveB)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M18 23C20.4 20 24.1 18 28.2 18C32.7 18 36.2 20.3 38 23.4"
            stroke="#9FE7ED"
            strokeWidth="2.3"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      </span>

      {showText ? (
        <span className={cn("leading-none", hideTextOnMobile && "hidden sm:block", textClassName)}>
          <span className="block font-display text-[1.22rem] tracking-[0.03em]" style={{ color: primary }}>
            Azure Waves
          </span>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.31em]" style={{ color: secondary }}>
            Resort
          </span>
        </span>
      ) : null}
    </span>
  );
}
