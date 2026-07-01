import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Code2,
  Handshake,
  Megaphone,
  UserPlus,
} from 'lucide-react';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';

const ICONS = { Megaphone, Handshake, Code2, UserPlus };

function PodIcon({ name }) {
  const Icon = ICONS[name];
  return Icon ? <Icon size={22} strokeWidth={1.75} /> : null;
}

export default function PodsDetailSection({ pods, tone = 'dark' }) {
  if (!pods?.items?.length) return null;

  return (
    <section className={`section page-pods-detail surface-${tone}`}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal as={Eyebrow}>{pods.eyebrow}</Reveal>
            <SplitText as="h2" className="display" style={{ marginTop: 22 }}>
              {pods.title}
            </SplitText>
          </div>
        </div>
        <div className="pods-detail-grid">
          {pods.items.map((pod, i) => {
            const inner = (
              <>
                {pod.href ? (
                  <div className="pods-detail-go" aria-hidden="true">
                    <ArrowUpRight size={18} strokeWidth={1.75} />
                  </div>
                ) : null}
                <div className="pods-detail-icon">
                  <PodIcon name={pod.icon} />
                </div>
                <h3 className="pods-detail-title">{pod.title}</h3>
                <p className="pods-detail-label">Purpose</p>
                <p className="pods-detail-purpose">{pod.purpose}</p>
                <p className="pods-detail-label pods-detail-label--services">Services</p>
                <ul className="pods-detail-services">
                  {pod.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </>
            );

            return (
              <Reveal className="pods-detail-card" key={pod.title} delay={i}>
                {pod.href ? (
                  <Link to={pod.href} className="pods-detail-link">
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
