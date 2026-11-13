import { ArrowRight, ArrowUpRight, Check, BookOpen, UsersRound, Layers3, Asterisk } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import { TrainingSection, QuestionsSection } from '../components/ProgrammeDetails';
import LeadBiographies from '../components/LeadBiographies';
import { assets } from '../lib/assets';
import { enquiryEmail, programmeInformationEmail, primaryCta, participantExperience } from '../lib/programme';

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
            <p className="pilot-invitation">We’re inviting arts and cultural organisations to explore whether the Culture with Kindness pilot is right for their teams.</p>
            <div className="hero-actions">
              <a href="#enquire" className="button button-mint">{primaryCta} <ArrowUpRight size={19} /></a>
              <a href={programmeInformationEmail} className="button button-outline brochure-download"><ArrowUpRight size={18} /> Request programme details</a>
            </div>
            <p className="hero-footnote">Pilot programme · Training, resources and practice support</p>
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
          <div><span className="proof-value">60</span><p>years’ combined team experience<br />in trauma-informed creative practice</p></div>
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
                <p>In-person workshops for creative and public-facing roles, including a half-day introduction and a full-day Caring for Stories session.</p>
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
              <span><Check size={17} /> In-person training at Clean Break</span>
              <span><Check size={17} /> Online resources</span>
              <span><Check size={17} /> Programme support and progress reviews</span>
            </div>
            <aside className="pilot-summary" aria-labelledby="pilot-heading">
              <h3 id="pilot-heading">Why a shared approach matters</h3>
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
              <p>The programme includes access to Clean Break’s Knowledge Hub, with resources and practical tools for working with audiences, participants and artists. Teams can return to these resources throughout their agreed programme access period.</p>
              <a href="https://www.cleanbreak.org.uk/hub-categories/learning/" target="_blank" rel="noopener noreferrer" className="text-link">Explore Clean Break’s Knowledge Hub <ArrowUpRight size={18} /><span className="sr-only"> (opens in a new tab)</span></a>
            </div>
          </div>
        </section>

        <section className="support-section section-space" id="support">
          <div className="page-width support-layout">
            <div className="support-intro">
              <span className="eyebrow">FOCUSED PRACTICE SUPPORT</span>
              <h2>Support to put<br /><span className="mint-text">learning into practice.</span></h2>
              <p>Alongside training and online resources, Clean Break can discuss focused support to help your organisation embed trauma-informed approaches in everyday work.</p>
              <p className="support-note">We’ll agree the scope with you. Additional bespoke consultancy for exhibitions, performances and events is priced separately.</p>
            </div>
            <div className="support-list">
              <article><span>01</span><div><h3>One-to-one practice dialogue</h3><p>Explore your current practice with an experienced trauma-informed practitioner and discuss practical recommendations relevant to your organisation.</p></div></article>
              <article><span>02</span><div><h3>Shared responsibility for care</h3><p>Consider ways to engage staff and volunteers in embedding agreed practices through organisational learning and reflection.</p></div></article>
              <article><span>03</span><div><h3>Additional bespoke consultancy</h3><p>Discuss support for upcoming exhibitions, performances or events. Any additional bespoke work is scoped and priced separately.</p></div></article>
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
              <p>Founded in 1979, Clean Break brings decades of theatre-making and participation with women who are criminalised to its work with cultural organisations. Our practice and organisational learning inform how we support teams to develop consistent, trauma-informed approaches.</p>
              <LeadBiographies />
            </div>
          </div>
        </section>

        <section className="previous-participants-section section-space" id="previous-participants" aria-labelledby="previous-participants-title">
          <div className="page-width">
            <span className="eyebrow">PREVIOUS TRAINING PARTICIPANTS</span>
            <h2 id="previous-participants-title">Building on Leading with Kindness</h2>
            <p className="previous-participants-intro">Culture with Kindness builds on our Leading with Kindness training. Here’s what participants told us after the July 2025 workshop at Clean Break.</p>
            <div className="previous-participants-feedback" aria-label="July 2025 Leading with Kindness workshop feedback">
              <article><strong>100%</strong><p>reported more skills and knowledge in trauma-informed practice following the workshop.</p><small>13 of 13 respondents: nine strongly agreed and four agreed.</small></article>
              <article><strong>92%</strong><p>rated the workshop excellent.</p><small>12 of 13 respondents. All 13 rated it excellent or very good.</small></article>
              <blockquote><p>“Both facilitators were prepared, informed, fun, and great teachers. Thank you!”</p><cite>Anonymous participant, July 2025.</cite></blockquote>
            </div>
            <p className="previous-participants-feedback-note">Feedback from 13 respondents to the July 2025 Leading with Kindness workshop, not an evaluation of the Culture with Kindness pilot.</p>
            <div className="previous-participants-heading">
              <h3>Previous Leading with Kindness participants</h3>
              <p>Our Leading with Kindness training has welcomed participants from the following organisations:</p>
            </div>
            <ul className="participant-logo-grid" aria-label="Organisations represented by previous Leading with Kindness participants">
              <li className="participant-logo-card"><img src="/assets/previous-participants/arts-council-england-original.svg" alt="Arts Council England logo" width="160" height="159" loading="lazy" decoding="async" /></li>
              <li className="participant-logo-card"><img src="/assets/previous-participants/arts-theatre-cambridge.webp" alt="The Arts Theatre Cambridge logo" width="180" height="112" loading="lazy" decoding="async" /></li>
              <li className="participant-logo-card"><img src="/assets/previous-participants/bluecoat.webp" alt="Bluecoat logo" width="98" height="145" loading="lazy" decoding="async" /></li>
              <li className="participant-logo-card"><img src="/assets/previous-participants/brixton-house.webp" alt="Brixton House logo" width="125" height="125" loading="lazy" decoding="async" /></li>
              <li className="participant-logo-card participant-logo-card--donmar"><img src="/assets/previous-participants/donmar-warehouse-vertical.svg" alt="Donmar Warehouse vertical logo" width="100" height="257" loading="lazy" decoding="async" /></li>
              <li className="participant-logo-card"><img src="/assets/previous-participants/futures-theatre.webp" alt="Futures Theatre logo" width="125" height="125" loading="lazy" decoding="async" /></li>
              <li className="participant-logo-card"><img src="/assets/previous-participants/graeae.webp" alt="Graeae Theatre Company logo" width="180" height="56" loading="lazy" decoding="async" /></li>
            </ul>
            <p className="previous-participants-note">Organisations are listed to identify previous training attendance. This does not imply endorsement of, or enrolment in, the Culture with Kindness pilot programme.</p>
          </div>
        </section>

        <section className="journey-section section-space" id="how-it-works">
          <div className="page-width">
            <div className="section-topline"><span className="eyebrow">HOW IT WORKS FOR YOUR ORGANISATION</span></div>
            <h2>From conversation<br />to shared practice.</h2>
            <div className="journey-steps">
              <article><span>01</span><h3>Discuss your needs</h3><p>Talk with Clean Break about your organisation, teams and priorities.</p></article>
              <article><span>02</span><h3>Review a proposal</h3><p>If the programme looks suitable, we’ll confirm the proposed scope, arrangements and fees for you to consider.</p></article>
              <article><span>03</span><h3>Share access details</h3><p>If you decide to take part, we’ll provide booking details and Knowledge Hub access to share with your team.</p></article>
              <article><span>04</span><h3>Review and adapt</h3><p>Stay connected with Clean Break to review participation, progress and opportunities to embed learning.</p></article>
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
              <p>Tell us your approximate team size, your training or practice priority and your preferred timeframe. We’ll discuss whether Culture with Kindness is a good fit, then provide a proposal confirming the scope, arrangements and fees.</p>
              <a href={enquiryEmail} className="button button-dark">{primaryCta} <ArrowUpRight size={20} /></a>
              <small className="enquiry-reassurance">An enquiry doesn’t commit you to joining.</small>
              <a href={programmeInformationEmail} className="brochure-link"><ArrowUpRight size={16} /> Request full programme details <span>(email)</span></a>
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
