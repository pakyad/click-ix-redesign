/**
 * Clientele marks.
 *
 * Recovered from the company's own site (click-ix.com, WordPress uploads) and
 * used at their own colour and proportions — never recoloured, never forced to
 * grey. These are the same relationships the company already publishes.
 *
 * Each file has had only its captured background lifted and its empty margin
 * trimmed, so the dimensions below are the mark's own ink box, not the size of
 * the canvas it arrived on. Raw captures are kept in
 * `source-data/client-marks-raw/`.
 *
 * Third-party trademarks: the company owns the placement decision, not the
 * marks. Keep them here only while the relationship is current.
 */
export interface ClientMark {
  readonly name: string
  readonly src: string
  readonly width: number
  readonly height: number
}

export const clients: readonly ClientMark[] = [
  { name: 'Maxis', src: '/brand/clients/maxis.png', width: 762, height: 242 },
  { name: 'CelcomDigi', src: '/brand/clients/celcomdigi.png', width: 467, height: 160 },
  { name: 'Shell', src: '/brand/clients/shell.png', width: 378, height: 432 },
  { name: 'Tesco', src: '/brand/clients/tesco.png', width: 768, height: 216 },
  { name: 'KFC', src: '/brand/clients/kfc.png', width: 437, height: 432 },
  { name: 'Watsons', src: '/brand/clients/watsons.png', width: 640, height: 148 },
  { name: 'Proton', src: '/brand/clients/proton.png', width: 768, height: 578 },
  { name: 'Triumph', src: '/brand/clients/triumph.png', width: 768, height: 396 },
  { name: 'Sunway Medical Centre', src: '/brand/clients/sunway-medical-centre.png', width: 768, height: 276 },
  { name: 'Pantai', src: '/brand/clients/pantai.png', width: 366, height: 122 },
  { name: 'Eraman', src: '/brand/clients/eraman.png', width: 474, height: 104 },
  { name: 'KLIA TV', src: '/brand/clients/klia-tv.png', width: 288, height: 80 },
  { name: 'Seni Jaya', src: '/brand/clients/seni-jaya.png', width: 392, height: 109 },
  { name: 'Out of Home', src: '/brand/clients/out-of-home.png', width: 456, height: 164 },
  { name: 'Media Pertiwi', src: '/brand/clients/media-pertiwi.png', width: 240, height: 60 },
  { name: 'Brandavision', src: '/brand/clients/brandavision.png', width: 761, height: 132 },
  { name: 'MIDA', src: '/brand/clients/mida.png', width: 768, height: 300 },
  { name: 'NUS', src: '/brand/clients/nus.png', width: 56, height: 69 },
]
