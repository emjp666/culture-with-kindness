import { Plus, Clock3, MapPin } from 'lucide-react';
import { workshops, faqs } from '../lib/programme';

export function TrainingSection() {
  return (
    <section id="training" className="training-section section-space">
      <div className="page-width">
        <div className="section-topline"><span className="eyebrow">02 / PRACTICAL LEARNING</span></div>
        <div className="section-heading-row">
          <h2>Four workshops.<br /><span className="mint-text">Choose what’s relevant.</span></h2>
          <p>Your people choose sessions suited to their roles, learning alongside participants from the cultural and social sectors.</p>
        </div>
        <div className="training-meta"><span><Clock3 size={16} /> Half-day and full-day sessions</span><span><MapPin size={16} /> In person · Kentish Town, London</span></div>
        <div className="workshop-list">
          {workshops.map((workshop, index) => (
            <details className="workshop" key={workshop.number} open={index === 0}>
              <summary>
                <span className="workshop-number">{workshop.number}</span>
                <span className="workshop-title">{workshop.title}</span>
                <span className="workshop-audience">{workshop.audience}</span>
                <span className="expand-icon"><Plus size={22} /></span>
              </summary>
              <div className="workshop-content"><div><p>{workshop.description}</p></div></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuestionsSection() {
  return (
    <section className="faq-section section-space" id="questions">
      <div className="page-width faq-layout">
        <div><span className="eyebrow">PRACTICAL DETAILS</span><h2>Good to know.</h2></div>
        <div className="faq-list">{faqs.map(faq => (
          <details key={faq.question} className="faq-item"><summary>{faq.question}<Plus size={21} /></summary><p>{faq.answer}</p></details>
        ))}</div>
      </div>
    </section>
  );
}
