import { HOMEPAGE_WHY } from '../data/siteContent';
import FAQSection from './FAQSection';

export default function FAQ() {
  return (
    <FAQSection
      items={HOMEPAGE_WHY.items}
      id="faq"
      eyebrow={HOMEPAGE_WHY.eyebrow}
      maxim={null}
      title={
        <>
          <span className="faq-title-line">{HOMEPAGE_WHY.title}</span>
          <span className="faq-title-line serif-i">{HOMEPAGE_WHY.titleHighlight}</span>
        </>
      }
    />
  );
}
