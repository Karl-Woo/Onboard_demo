export default function IconButton() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-start p-[12px] relative rounded-[8px] size-full" data-name="IconButton">
      <div className="relative shrink-0 size-[24px]" data-name="x">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="frame">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="frame">
              <path d="M5 15L15 5M15 15L5 5" id="vector" stroke="var(--stroke-0, #25790B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}