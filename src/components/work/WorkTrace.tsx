'use client'

import { useId, useRef, useState } from 'react'
import { traceLayers, type TraceEntry } from '@/lib/workTrace'
import styles from './WorkTrace.module.css'

export default function WorkTrace({
  entries,
  heading,
  note,
  eyebrow = 'System trace',
  listLabel = 'Documented deployments',
}: {
  readonly entries: readonly TraceEntry[]
  readonly heading: string
  readonly note: string
  readonly eyebrow?: string
  readonly listLabel?: string
}) {
  const baseId = useId()
  const [selected, setSelected] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  if (entries.length === 0) return null

  const entry = entries[Math.min(selected, entries.length - 1)]
  const uniformSector = new Set(entries.map((item) => item.sector)).size === 1

  const focusTab = (index: number) => {
    const next = (index + entries.length) % entries.length
    setSelected(next)
    tabRefs.current[next]?.focus()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault()
        focusTab(index + 1)
        break
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault()
        focusTab(index - 1)
        break
      case 'Home':
        event.preventDefault()
        focusTab(0)
        break
      case 'End':
        event.preventDefault()
        focusTab(entries.length - 1)
        break
      default:
        break
    }
  }

  return (
    <section className={styles.trace} aria-labelledby={`${baseId}-title`}>
      <div className={styles.head}>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${baseId}-title`} className="h2">
            {heading}
          </h2>
        </div>
        <p className={styles.note}>{note}</p>
      </div>

      <div className={styles.grid}>
        <div
          className={styles.list}
          role="tablist"
          aria-label={listLabel}
          aria-orientation="vertical"
          data-uniform-sector={uniformSector ? 'true' : 'false'}
        >
          {entries.map((item, index) => {
            const isSelected = index === selected
            return (
              <button
                key={item.caseId}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${item.caseId}`}
                aria-selected={isSelected}
                aria-controls={`${baseId}-panel`}
                tabIndex={isSelected ? 0 : -1}
                className={styles.tab}
                data-selected={isSelected ? 'true' : 'false'}
                onClick={() => setSelected(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span className={styles.tabClient}>{item.client}</span>
                <span className={styles.tabSector}>{item.sector}</span>
              </button>
            )
          })}
        </div>

        <div
          className={styles.panel}
          id={`${baseId}-panel`}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`${baseId}-tab-${entry.caseId}`}
        >
          <div className={styles.chrome}>
            <span className={styles.chromeClient}>{entry.client}</span>
            <span className={styles.chromeSector}>4 layers · {entry.sector}</span>
          </div>

          <ol className={styles.layers} key={entry.caseId}>
            {traceLayers.map((layer, index) => {
              const evidence = entry.layers[layer.id]
              return (
                <li
                  key={layer.id}
                  className={styles.layer}
                  data-active={evidence ? 'true' : 'false'}
                  style={{ '--i': index } as React.CSSProperties}
                >
                  <span className={styles.marker} aria-hidden="true" />
                  <div className={styles.layerLabel}>
                    <span className={styles.layerName}>{layer.label}</span>
                    <span className={styles.layerQuestion}>{layer.question}</span>
                  </div>
                  <div className={styles.layerBody}>
                    <p className={styles.layerDetail}>
                      {evidence ? evidence.detail : 'Not in scope'}
                    </p>
                    {evidence ? <q className={styles.layerSource}>{evidence.source}</q> : null}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
