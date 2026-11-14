'use client'

import { useState } from 'react'
import styles from './CopyEmail.module.css'

/**
 * The address is a link, but a link needs a mail client. This puts the address
 * on the clipboard for anyone reading on a phone without one.
 */
export default function CopyEmail({ value }: { readonly value: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button type="button" className={styles.copy} onClick={copy}>
      {copied ? 'Copied' : 'Copy address'}
    </button>
  )
}
