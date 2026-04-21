import svgPaths from "./svg-0npbyvv857";

export default function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] size-full" data-name="Button" style={{ backgroundImage: "linear-gradient(-6.96271deg, rgb(16, 54, 79) 23.592%, rgb(22, 73, 75) 98.517%)" }}>
      <div className="relative shrink-0 size-[24px]" data-name="Leading Icon">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="frame">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="frame">
                <g id="vector">
                  <path d={svgPaths.p143bf0} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p4527500} fill="var(--fill-0, white)" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Graphik:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Ask Clover for setup recommendation</p>
      </div>
    </div>
  );
}