import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
}

function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <header className="flex flex-col self-center max-w-full text-center w-[577px]">
      {badge && (
        <div className="flex gap-1.5 cursor-pointer justify-center items-center self-center max-w-full text-base font-medium rounded-3xl border border-sky-300 border-solid bg-slate-100 min-h-[30px] text-zinc-800 w-[153px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/aa954f1d5fff3611a1f9409fc9b51ce86f556337?placeholderIfAbsent=true&apiKey=21a904a4570c4407b134859bfb7965ad"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            alt="Badge icon"
          />
          <span className="self-stretch my-auto">{badge}</span>
        </div>
      )}
      <h2
        className={`${badge ? "mt-5" : "mt-8"} text-5xl font-bold text-center leading-[50px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]`}
      >
        {title}
      </h2>
      <p className="mt-5 text-lg font-semibold leading-6 text-center text-neutral-400 max-md:max-w-full">
        {subtitle}
      </p>
    </header>
  );
}

export default SectionHeader;
