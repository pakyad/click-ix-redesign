'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { commercialFlow } from '@/lib/content'
import ProductMark from '@/components/brand/ProductMark'
import styles from './ConnectedStory.module.css'

/*
 * An editorial, user-controlled system explanation.
 * Every image and mark is drawn from the existing company repository.
 * Interface specimens are deliberately labelled illustrative; no invented
 * client records, performance figures, screen statuses or product screenshots.
 */
const scenes = [
  { name: 'Screen network', caption: 'A real deployment, connected to the operating system.' },
  { name: 'Content operations', caption: 'Content, schedules and playback managed together.' },
  { name: 'Measurement', caption: 'Playback records connect the campaign to its report.' },
] as const

const stepCopy = [
  { top: 'Inventory & bookings', action: 'Prepare a campaign', note: 'A booking is handed to the content team, with the correct sites and formats.' },
  { top: 'Scheduling', action: 'Set the playback window', note: 'Creative is placed against screens, slots and day-parts.' },
  { top: 'Playback', action: 'Deliver to the display', note: 'Content reaches the screen while its network state can be monitored.' },
  { top: 'Campaign evidence', action: 'Review proof of play', note: 'Playback logs and measurement provide a basis for reporting.' },
  { top: 'Commercial closure', action: 'Complete the record', note: 'Confirmed bookings and campaign proof support the billing workflow.' },
] as const

function SystemArtwork({ step }: { readonly step: number }) {
  return (
    <div className={styles.artwork} aria-label="Illustrative screen management interface">
      <div className={styles.artHeader}>
        <ProductMark productId={step === 0 || step === 4 ? "cs-deals" : "cs-play"} label={step === 0 || step === 4 ? "CS Deals" : "CS Play"} height={18} tone="light" />
        <span className={styles.artHeaderNote}>WORKFLOW STUDY / ILLUSTRATIVE</span>
      </div>
      <div className={styles.artBody}>
        <nav className={styles.artNav} aria-label="Illustrated software modules">
          <span data-current={step === 0 ? 'true' : undefined}>Inventory</span>
          <span data-current={step === 1 ? 'true' : undefined}>Schedule</span>
          <span data-current={step === 2 ? 'true' : undefined}>Screens</span>
          <span data-current={step === 3 ? 'true' : undefined}>Reports</span>
          <span data-current={step === 4 ? 'true' : undefined}>Bookings</span>
        </nav>
        <div className={styles.artContent} key={step}>
          <div className={styles.artContentHead}>
            <span className={styles.artOverline}>{stepCopy[step].top}</span>
            <strong>{stepCopy[step].action}</strong>
          </div>
          {step === 0 ? (
            <div className={styles.inventory}>
              <div><span className={styles.itemIndex}>01</span><b>Site & format</b><i>Choose inventory</i></div>
              <div><span className={styles.itemIndex}>02</span><b>Campaign</b><i>Confirm requirements</i></div>
              <div><span className={styles.itemIndex}>03</span><b>Handover</b><i>Ready to schedule</i></div>
            </div>
          ) : null}
          {step === 1 ? (
            <div className={styles.schedule} aria-hidden="true">
              <div className={styles.scheduleHead}><span>SCREEN</span><span>MORNING</span><span>AFTERNOON</span><span>EVENING</span></div>
              <div className={styles.scheduleLine}><span>Display A</span><i className={styles.slotA} /><i className={styles.slotB}/></div>
              <div className={styles.scheduleLine}><span>Display B</span><i className={styles.slotC} /><i className={styles.slotD}/></div>
              <div className={styles.scheduleLine}><span>Display C</span><i className={styles.slotB} /><i className={styles.slotA}/></div>
            </div>
          ) : null}
          {step === 2 ? (
            <div className={styles.playback}>
              <div className={styles.playbackImage}><Image src="/media/hero-poster.jpg" alt="Outdoor LED playback example" fill sizes="(max-width: 700px) 60vw, 320px" /></div>
              <div className={styles.playbackCopy}><b>Screen preview</b><span>Creative delivery</span><small>Remote content & playback</small></div>
            </div>
          ) : null}
          {step === 3 ? (
            <div className={styles.proof}>
              <div className={styles.chartHead}><span>Illustrative signal trend</span><span>Playback + audience</span></div>
              <svg viewBox="0 0 380 110" role="img" aria-label="Non-numeric illustrative reporting waveform">
                <path className={styles.chartGrid} d="M0 30H380M0 60H380M0 90H380" />
                <path className={styles.chartLine} d="M0 79 C38 77,50 38,90 53 S153 96,190 64 S245 24,280 44 S328 83,380 24" />
              </svg>
              <span className={styles.chartFoot}>No live data displayed</span>
            </div>
          ) : null}
          {step === 4 ? (
            <div className={styles.inventory}>
              <div><span className={styles.itemIndex}>01</span><b>Confirmed booking</b><i>Commercial record</i></div>
              <div><span className={styles.itemIndex}>02</span><b>Proof of play</b><i>Campaign evidence</i></div>
              <div><span className={styles.itemIndex}>03</span><b>Billing</b><i>Close the workflow</i></div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default function ConnectedStory() {
  const [step, setStep] = useState(1)
  const [scene, setScene] = useState(0)
  return (
    <section className={styles.story} aria-labelledby="connected-story-title">
      <div className={`wrap ${styles.intro}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>BEHIND EVERY LIVE SCREEN</p>
          <h2 id="connected-story-title" className={styles.title}>The screen is only the beginning.</h2>
          <p className={styles.lede}>A display is what people see. Behind it sit the players, software, scheduling, campaign delivery and proof that make a network work.</p>
          <Link className={styles.inlineLink} href="/software/">Explore the software <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.scene}>
          <div className={styles.sceneImage}>
            <Image src="/media/hero-poster.jpg" alt="Real large-format Click iX outdoor LED installation in Kuala Lumpur" fill sizes="(max-width: 900px) 90vw, 55vw" />
            <span className={styles.sceneCaption}>01 / THE PHYSICAL SCREEN</span>
          </div>
          <svg className={styles.circuit} viewBox="0 0 600 600" preserveAspectRatio="none" aria-hidden="true">
            <path d="M485 290 H555 V485 H385"/>
            <circle cx="485" cy="290" r="4"/><circle cx="385" cy="485" r="4"/>
          </svg>
          <div className={styles.sceneConsole}>
            <div className={styles.consoleTop}><ProductMark productId="cs-play" label="CS Play" height={17} tone="light" /><span>CONTENT OPERATIONS</span></div>
            <div className={styles.consolePreview}><div className={styles.consoleThumb}><Image src="/media/maxis-store.jpg" alt="Digital display in a Maxis retail location" fill sizes="160px" /></div><div className={styles.consoleLines}><b>Manage content</b><span>Plan · Schedule · Play</span><i/><i/><i/></div></div>
            <small>Illustrative system view</small>
          </div>
          <div className={styles.signalOne}><b>02</b><span>OPERATIONS</span></div>
          <div className={styles.signalTwo}><b>03</b><span>MEASUREMENT</span></div>
        </div>
      </div>

      <div className={`wrap ${styles.architecture}`}>
        <header className={styles.archHeader}>
          <p className={styles.eyebrow}>THE SYSTEM, EXPLAINED</p>
          <h3>Three layers.<br/><span>One connected experience.</span></h3>
          <p>Start with the physical environment, then follow the work underneath. Select a layer to inspect the real deployments and the software around them.</p>
        </header>
        <div className={styles.archGrid}>
          <div className={styles.archIndex} role="group" aria-label="Explore network layers">
            {scenes.map((item, index) => (
              <button type="button" key={item.name} className={styles.archRow} data-active={scene === index ? 'true' : 'false'} aria-pressed={scene === index} onClick={() => setScene(index)}>
                <span className={styles.archNumber}>0{index+1}</span><span className={styles.archName}>{item.name}<small>{item.caption}</small></span><span className={styles.archArrow} aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <figure className={styles.archFigure}>
            <div className={styles.archPhoto} key={scene}>
              {scene === 0 ? (
                <Image src="/media/maxis-store.jpg" alt="Digital signage at a Maxis retail location" fill sizes="(max-width: 900px) 90vw, 54vw" />
              ) : (
                <div className={styles.archDemo}><SystemArtwork step={scene === 1 ? 1 : 3} /></div>
              )}
            </div>
            <figcaption><span>{scenes[scene].name}</span><span>{scene === 0 ? 'Company-supplied deployment photography' : 'Illustrative interface study · no live data'}</span></figcaption>
          </figure>
        </div>
      </div>

      <div className={styles.workflowBand}>
        <div className="wrap">
          <div className={styles.workflowHead}>
            <div><p className={styles.eyebrow}>FROM BOOKING TO PROOF</p><h3>Every step has a place.</h3></div>
            <p>See how the commercial workflow moves from planning to the screen and back to reporting. This is a conceptual illustration, not a screenshot of a live customer account.</p>
          </div>
          <div className={styles.stepNav} role="group" aria-label="Explore campaign workflow">
            {commercialFlow.map((item, index) => (
              <button type="button" key={item.step} aria-pressed={step === index} data-active={step === index ? 'true' : 'false'} onClick={() => setStep(index)}><span>0{index + 1}</span><strong>{item.step}</strong></button>
            ))}
          </div>
          <div className={styles.workflowLayout}>
            <div className={styles.workflowCopy} aria-live="polite"><span className={styles.workflowOverline}>0{step+1} / {commercialFlow[step].system}</span><h4>{commercialFlow[step].step}.</h4><p>{commercialFlow[step].detail}</p><Link href="/software/">Explore the platforms <span aria-hidden="true">↗</span></Link></div>
            <SystemArtwork step={step} />
          </div>
          <p className={styles.disclosure}>Illustrative interface study using supplied Click iX logos and installation imagery. Not a live dashboard or a representation of customer metrics.</p>
        </div>
      </div>
    </section>
  )
}