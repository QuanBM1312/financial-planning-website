import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="flex flex-col self-center max-w-full text-center w-[577px]">
      <h2
        className={`text-5xl font-bold text-center leading-[50px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]`}
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
