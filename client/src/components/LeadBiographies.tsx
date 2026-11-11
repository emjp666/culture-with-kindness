import { ChevronDown } from 'lucide-react';
import { leads } from '../lib/leads';
import { assets } from '../lib/assets';

export default function LeadBiographies() {
  return (
    <div className="leads">
      <h3>Our trauma-informed leads</h3>
      <p className="leads-note">
        Depending on the agreed scope, the work will be led by experienced Clean Break
        trauma-informed leads and trainers, drawing on the company’s creative practice
        and organisational learning.
      </p>
      {leads.map(lead => (
        <details className="lead-profile" key={lead.id}>
          <summary className="lead-profile-trigger">
            <div className="lead-profile-heading">
              <strong>{lead.name}</strong>
              <span className="lead-profile-role">{lead.role}</span>
            </div>
            <p>{lead.summary}</p>
            <div className="lead-profile-action">
              <span className="lead-profile-label-closed">Read biography</span>
              <span className="lead-profile-label-open">Close biography</span>
              <ChevronDown size={17} aria-hidden="true" />
            </div>
          </summary>
          <div className="lead-bio-inline" aria-label={`${lead.name}’s full biography`}>
            {lead.id === 'anna-herrmann' && (
              <img
                className="lead-bio-portrait"
                src={assets.annaPortrait}
                alt="Anna Herrmann, Artistic Director at Clean Break"
                width="320"
                height="320"
                loading="lazy"
              />
            )}
            {lead.biography.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            {lead.contribution && (
              <section className="lead-bio-contribution" aria-label={lead.contribution.heading}>
                <h3>{lead.contribution.heading}</h3>
                {lead.contribution.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </section>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
