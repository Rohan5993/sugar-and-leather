import {
  Bot,
  ClipboardCheck,
  Code2,
  Database,
  FileText,
  Handshake,
  Landmark,
  Lightbulb,
  Megaphone,
  Network,
  Plane,
  Shield,
  UserPlus,
  Workflow,
} from 'lucide-react';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';

const ICONS = {
  Bot,
  ClipboardCheck,
  Code2,
  Database,
  FileText,
  Handshake,
  Landmark,
  Lightbulb,
  Megaphone,
  Network,
  Plane,
  Shield,
  UserPlus,
  Workflow,
};

function OfferingIcon({ name }) {
  const Icon = ICONS[name];
  return Icon ? <Icon size={22} strokeWidth={1.75} /> : null;
}

export default function OfferingsSection({ offerings, tone = 'dark' }) {
  if (!offerings?.items?.length) return null;

  const gridClass =
    offerings.items.length === 4 ? 'offerings-grid offerings-grid--quad' : 'offerings-grid';

  return (
    <section className={`section page-offerings surface-${tone}`}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal as={Eyebrow}>{offerings.eyebrow}</Reveal>
            <SplitText as="h2" className="display" style={{ marginTop: 22 }}>
              {offerings.title}
            </SplitText>
          </div>
        </div>
        <div className={gridClass}>
          {offerings.items.map((item, i) => (
            <Reveal className="offering-card" key={item.title} delay={i}>
              <div className="offering-icon">
                <OfferingIcon name={item.icon} />
              </div>
              <h3 className="offering-title">{item.title}</h3>
              <p className="offering-desc">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
