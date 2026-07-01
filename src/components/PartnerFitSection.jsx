import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';

export default function PartnerFitSection({ section, tone = 'dark' }) {
  if (!section?.items?.length) return null;

  return (
    <section className={`section page-partner-fit surface-${tone}`}>
      <div className="wrap">
        <div className="partner-fit-layout">
          <div className="partner-fit-aside">
            <Reveal as={Eyebrow}>{section.eyebrow}</Reveal>
            <SplitText as="h2" className="display partner-fit-title">
              {section.title}
            </SplitText>
          </div>
          <ol className="partner-fit-list">
            {section.items.map((item, i) => (
              <Reveal as="li" className="partner-fit-item" key={item} delay={i % 4}>
                <span className="partner-fit-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="partner-fit-label">{item}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
