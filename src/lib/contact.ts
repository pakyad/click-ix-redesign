/**
 * Public enquiry contact.
 * Michael Tan is the company's published contact on click-ix.com.
 */
export const CONTACT = {
  name: 'Michael Tan',
  role: 'Managing Director',
  email: 'michatan@click-ix.com',
  phone: '+60 10-272 3869',
  phoneHref: '+60102723869',
  whatsapp: 'https://wa.me/60102723869',
} as const

/**
 * A mail draft with a subject already written, so replies arrive sorted without
 * a form to collect them.
 */
export function mailto(subject = 'Enquiry'): string {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`
}
