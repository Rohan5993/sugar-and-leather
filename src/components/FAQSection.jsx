import { useState } from 'react';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';
import FaqItem from './FaqItem';

export default function FAQSection({
  items,
  eyebrow = 'FAQ',
  title = "You've got questions. We've got answers.",
  subtitle = null,
  maxim = 'Earned. Strong. Reflective.',
  id = 'faq',
  tone = 'dark',
}) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={`section surface-${tone}`} id={id} data-screen-label="FAQ">
      <div className="wrap">
        <div className="faq-grid">
          <div className="faq-aside">
            <Reveal as={Eyebrow}>{eyebrow}</Reveal>
            <SplitText as="h2" className="display" style={{ marginTop: 20 }}>
              {title}
            </SplitText>
            {subtitle ? (
              <Reveal as="p" className="faq-subtitle" delay={1}>
                {subtitle}
              </Reveal>
            ) : null}
            {maxim ? (
              <Reveal as="span" className="maxim" delay={2}>
                {maxim}
              </Reveal>
            ) : null}
          </div>
          <div className="faq-list">
            {items.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                open={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
