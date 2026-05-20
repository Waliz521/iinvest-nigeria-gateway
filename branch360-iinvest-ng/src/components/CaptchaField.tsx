/** UI-only captcha checkbox (reCAPTCHA-style); no verification backend */
export function CaptchaField({ id, label }: { id: string; label: string }) {
  return (
    <div
      className="flex items-center justify-between gap-4 rounded border border-[#d3d3d3] bg-[#f9f9f9] px-4 py-3 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]"
      role="group"
      aria-label="Captcha verification"
    >
      <div className="flex min-w-0 items-center gap-3">
        <input
          id={id}
          name="captcha"
          type="checkbox"
          required
          className="h-6 w-6 shrink-0 cursor-pointer rounded border-2 border-[#c1c1c1] text-[#00487b] focus:ring-2 focus:ring-[#00487b]/30"
        />
        <label htmlFor={id} className="cursor-pointer select-none text-sm font-normal text-[#1f1f1f]">
          {label}
        </label>
      </div>
      <div className="hidden shrink-0 flex-col items-end text-[10px] leading-tight text-gray-500 sm:flex" aria-hidden>
        <span className="font-semibold tracking-tight text-[#555]">reCAPTCHA</span>
        <span>Privacy · Terms</span>
      </div>
    </div>
  )
}
