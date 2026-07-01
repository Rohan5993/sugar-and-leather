import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';

export default function EngagementModelsSection({ models, tone = 'light' }) {
  if (!models?.items?.length) return null;

  return (
    <section className={`section page-engagement surface-${tone}`}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal as={Eyebrow}>{models.eyebrow}</Reveal>
            <SplitText as="h2" className="display" style={{ marginTop: 22 }}>
              {models.title}
            </SplitText>
          </div>
        </div>
        <div className="engagement-grid">
          {models.items.map((item, i) => (
            <Reveal className="engagement-card" key={item.title} delay={i}>
              <h3 className="engagement-title">{item.title}</h3>
              <p className="engagement-desc">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
