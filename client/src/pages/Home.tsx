import { ArrowRight, ArrowUpRight, Check, BookOpen, UsersRound, Layers3, Download, Asterisk } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import { TrainingSection, QuestionsSection } from '../components/ProgrammeDetails';
import LeadBiographies from '../components/LeadBiographies';
import { assets } from '../lib/assets';
import { enquiryEmail, primaryCta, participantExperience } from '../lib/programme';

export default function Home() {
  return (
    <div className="landing-page">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero page-width">
          <div className="hero-copy">
            <p className="eyebrow"><span className="mint-dot" /> CULTURE WITH KINDNESS · A PROGRAMME BY CLEAN BREAK</p>
            <h1>A kinder culture.<br /><span className="mint-text">A stronger team.</span></h1>
            <p className="hero-intro">Trauma-informed training, resources and bespoke practice support.</p>
            <p className="hero-description">For cultural organisations working across exhibitions, music, theatre, performance, public programmes and participatory arts. Strengthen care and consistency across staff, freelancers and volunteers, including programming, participation, visitor experience, production and leadership teams.</p>
            <p className="pilot-invitation">We’re inviting arts and cultural organisations to join the Culture with Kindness pilot programme.</p>
            <div className="hero-actions">
              <a href="#enquire" className="button button-mint">{primaryCta} <ArrowUpRight size={19} /></a>
              <a href={assets.brochure} download="Culture-with-Kindness-Programme-Brochure.pdf" target="_blank" rel="noopener noreferrer" className="button button-outline brochure-download"><Download size={18} /> Download programme brochure <span className="brochure-format">PDF</span></a>
            </div>
            <p className="hero-footnote">12-page programme brochure · Training, resources and bespoke practice support</p>
          </div>
          <figure className="hero-visual">
            <div className="hero-photo-wrap">
              <img className="hero-photo" src={assets.hero} alt="A Clean Break performer on stage with colourful projections" width="1200" height="800" fetchPriority="high" />
              <span className="photo-corner">CULTURE WITH<br />KINDNESS</span>
            </div>
            <figcaption><span>A programme by <strong>Clean Break</strong></span></figcaption>
          </figure>
        </section>
        <section className="proof-strip page-width" aria-label="Our experience">
          <div><span className="proof-value">45<span>+</span></span><p>years of creative practice<br />with safety and care at its heart</p></div>
          <div><span className="proof-value">50<span>+</span></span><p>cultural organisations listened to<br />in shaping this programme</p></div>
          <div className="proof-statement"><Asterisk className="small-asterisk" size={48} strokeWidth={1.5} aria-hidden="true" /><p>For staff, freelancers<br /><strong>and volunteers.</strong></p></div>
        </section>

        <section id="programme" className="offer-section section-space">
          <div className="page-width">
            <div className="section-topline"><span className="eyebrow">01 / THE PROGRAMME</span></div>
            <div className="section-heading-row">
              <h2>Build confident teams.<br />Strengthen shared practice.</h2>
              <p>Trauma-informed training, resources and bespoke practice support for arts and cultural organisations. Help your staff, freelancers and volunteers develop practical skills and a shared approach to care across programmes, public spaces and working relationships.</p>
            </div>
            <div className="offer-columns">
              <article>
                <span className="offer-icon"><UsersRound size={27} strokeWidth={1.5} /></span>
                <h3>Trauma-informed training.</h3>
                <p>Half-day, in-person workshops that build practical skills for creative and public-facing roles, with sessions suited to different responsibilities and levels of experience.</p>
                <a className="text-link" href="#training">Explore the workshops <ArrowUpRight size={18} /></a>
              </article>
              <article>
                <span className="offer-icon"><BookOpen size={27} strokeWidth={1.5} /></span>
                <h3>Online tools and resources.</h3>
                <p>Practical tools for working with audiences, participants and artists—so your teams can revisit learning and apply trauma-informed approaches in everyday work.</p>
                <a className="text-link" href="#resources">Discover the resources <ArrowUpRight size={18} /></a>
              </article>
              <article>
                <span className="offer-icon"><Layers3 size={27} strokeWidth={1.5} /></span>
                <h3>Bespoke practice support.</h3>
                <p>Discuss support shaped around your organisation, from practice reviews and support for exhibitions, performances and events to stakeholder presentations on embedding trauma-informed practice.</p>
                <a className="text-link" href="#support">Explore bespoke support <ArrowUpRight size={18} /></a>
              </article>
            </div>
            <div className="programme-note">
              <span><Check size={17} /> Half-day, in-person workshops</span>
              <span><Check size={17} /> Online resources</span>
              <span><Check size={17} /> Check-ins and attendance reports</span>
            </div>
            <aside className="pilot-summary" aria-labelledby="pilot-heading">
              <h3 id="pilot-heading">Why organisations choose the programme</h3>
              <p>In its consultation with more than 50 cultural organisations, Clean Break heard a shared challenge: building a consistent understanding of trauma-informed practice across teams. It also heard that people championing this work could feel unsupported when responsibility for care was not shared.</p>
              <p>Culture with Kindness responds to those conversations with practical training, resources and space for reflection. It is a pilot programme, and the offer will evolve with the organisations taking part.</p>
            </aside>
          </div>
        </section>

        <TrainingSection />

        <section className="resources-section" id="resources">
          <div className="page-width resources-layout">
            <figure className="resources-image"><img src={assets.workshop} alt="Participants learning together in a Clean Break creative workshop" width="1200" height="800" loading="lazy" /></figure>
            <div className="resources-copy">
              <span className="eyebrow">ONLINE RESOURCES</span>
              <h2>Tools for your<br />day-to-day work.</h2>
              <p>The programme includes online resources with practical tools for teams working directly with audiences, participants and artists. Revisit Clean Break’s trauma-informed approach whenever you need a reference.</p>
              <a href="https://www.cleanbreak.org.uk/hub-categories/learning/" target="_blank" rel="noopener noreferrer" className="text-link">Explore Clean Break’s Knowledge Hub <ArrowUpRight size={18} /><span className="sr-only"> (opens in a new tab)</span></a>
            </div>
          </div>
        </section>

        <section className="support-section section-space" id="support">
          <div className="page-width support-layout">
            <div className="support-intro">
              <span className="eyebrow">CHECK-INS & PRACTICE SUPPORT</span>
              <h2>Included support.<br /><span className="mint-text">Bespoke options.</span></h2>
              <p>Programme check-ins, attendance reports and updates on upcoming opportunities help your organisation make full use of the programme.</p>
              <p className="support-note">Alongside this, Clean Break can discuss bespoke practice support for your context. Its scope is agreed with you.</p>
            </div>
            <div className="support-list">
              <article><span>01</span><div><h3>Practice review</h3><p>A review of your current practice with an experienced trauma-informed practitioner, offering practical recommendations relevant to your organisation.</p></div></article>
              <article><span>02</span><div><h3>Creative project support</h3><p>Bespoke support for upcoming exhibitions, performances and events, including lived-experience feedback.</p></div></article>
              <article><span>03</span><div><h3>Stakeholder presentations</h3><p>Presentations to stakeholders on embedding trauma-informed practice through shared responsibility and organisational learning.</p></div></article>
            </div>
          </div>
        </section>

        <section id="approach" className="approach-section section-space">
          <div className="page-width approach-layout">
            <div className="approach-visual">
              <img src={assets.community} alt="Clean Break participants supporting one another in a group session" width="1000" height="667" loading="lazy" />
              <div className="approach-caption"><span className="eyebrow">THE CLEAN BREAK APPROACH</span><p>Creative spaces.<br />Held with care.</p></div>
            </div>
            <div className="approach-copy">
              <span className="eyebrow">03 / ROOTED IN EXPERIENCE</span>
              <h2>Established practice.<br />Experienced people.</h2>
              <p>Clean Break is a theatre company with a 45-year track record of holding creative spaces with safety and care at their heart. Our decades of creative work with women who are criminalised inform our approach to supporting organisations to build confident, consistent trauma-informed practice.</p>
              <LeadBiographies />
            </div>
          </div>
        </section>

        <section className="journey-section section-space" id="how-it-works">
          <div className="page-width">
            <div className="section-topline"><span className="eyebrow">HOW IT WORKS FOR YOUR ORGANISATION</span></div>
            <h2>From conversation<br />to shared practice.</h2>
            <div className="journey-steps">
              <article><span>01</span><h3>Discuss your needs</h3><p>Talk with Clean Break about your organisation, teams and priorities.</p></article>
              <article><span>02</span><h3>Agree a suitable package</h3><p>Confirm the training and resources that are right for your context.</p></article>
              <article><span>03</span><h3>Share access information</h3><p>Clean Break provides the information participants need to select and book relevant training.</p></article>
              <article><span>04</span><h3>Keep connected</h3><p>Receive check-ins, attendance reports and updates on upcoming opportunities.</p></article>
            </div>
            <div className="participant-experience">
              <span className="eyebrow">THE PARTICIPANT EXPERIENCE</span>
              <h3>For your staff, freelancers and volunteers</h3>
              <p>People choose the sessions most relevant to their roles and practice. They book and attend training at Clean Break, develop practical skills and connect with peers from across the cultural and social sectors.</p>
              <div className="programme-note">
                {participantExperience.map(item => <span key={item}><Check size={17} /> {item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <QuestionsSection />

        <section id="enquire" className="enquiry-section">
          <div className="page-width enquiry-layout">
            <div>
              <span className="eyebrow">START WITH A CONVERSATION</span>
              <h2>Talk to us about<br />your organisation.</h2>
              <p>Tell us about your organisation, the people you’d like to involve and the priorities you’re working with. We’ll discuss whether Culture with Kindness is a good fit and explain the programme, arrangements and next steps.</p>
              <a href={enquiryEmail} className="button button-dark">{primaryCta} <ArrowUpRight size={20} /></a>
              <small className="enquiry-reassurance">An enquiry doesn’t commit you to joining.</small>
              <a href={assets.brochure} download="Culture-with-Kindness-Programme-Brochure.pdf" target="_blank" rel="noopener noreferrer" className="brochure-link"><Download size={16} /> Download programme brochure <span>(PDF)</span></a>
            </div>
            <div className="enquiry-contact">
              <p>CONTACT CLEAN BREAK</p>
              <a href={enquiryEmail}>general@cleanbreak.org.uk <ArrowUpRight size={19} /></a>
              <a href="tel:+442074828600">020 7482 8600 <ArrowUpRight size={19} /></a>
              <small>Culture with Kindness<br />by Clean Break</small>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width">
        <div className="footer-top">
          <a href="https://www.cleanbreak.org.uk/" target="_blank" rel="noopener noreferrer" aria-label="Visit Clean Break’s website (opens in a new tab)"><img src={assets.logo} alt="Clean Break" width="1400" height="664" /></a>
          <p>A women’s theatre company.<br />Changing lives. Changing minds.</p>
          <address>2 Patshull Road<br />Kentish Town, London NW5 2LB</address>
          <a href="#" className="text-link">Back to top <ArrowUpRight size={17} /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Clean Break · Registered charity no. 1017560</span>
          <span>Photography: Henry Curtis, Ellie Kurttz &amp; Tracey Anderson</span>
          <a href="https://www.cleanbreak.org.uk/" target="_blank" rel="noopener noreferrer">cleanbreak.org.uk <ArrowRight size={13} /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </footer>
    </div>
  );
}
