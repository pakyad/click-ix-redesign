import type { SVGProps } from 'react'

/**
 * Service icons supplied with the v3 handoff
 * (design-handoff/06_ASSETS/original-creative-vectors).
 *
 * Ported from standalone SVGs to inline JSX so the stroke follows
 * `currentColor` instead of the hardcoded #2DC6E9 they shipped with. That keeps
 * one icon set usable on both the light and navy chapters without a second
 * file for each. Geometry, stroke width and square caps are unchanged.
 */
export type ServiceIconName =
  | 'strategy'
  | 'hardware'
  | 'content'
  | 'software'
  | 'installation'
  | 'analytics'

const glyphs: Record<ServiceIconName, React.ReactNode> = {
  strategy: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </>
  ),
  hardware: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="1" />
      <path d="M9 21h6M12 17v4" />
    </>
  ),
  content: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8l7 4-7 4z" />
    </>
  ),
  software: (
    <>
      <rect x="3" y="3" width="8" height="8" />
      <rect x="13" y="3" width="8" height="8" />
      <rect x="3" y="13" width="8" height="8" />
      <rect x="13" y="13" width="8" height="8" />
    </>
  ),
  installation: (
    <>
      <rect x="3" y="3" width="18" height="11" />
      <path d="M12 14v7M5 21h14M4 17l4 2" />
    </>
  ),
  analytics: <path d="M4 21V13M10 21V7M16 21V10M22 21V3" />,
}

export default function ServiceIcon({
  name,
  ...props
}: { readonly name: ServiceIconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.55}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {glyphs[name]}
    </svg>
  )
}
