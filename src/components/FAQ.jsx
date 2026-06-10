import { FAQ_ITEMS } from '../data/siteContent';
import FAQSection from './FAQSection';

export default function FAQ() {
  return (
    <FAQSection
      items={FAQ_ITEMS}
      id="faq"
      eyebrow="FAQ"
      maxim={null}
      title={
        <>
          <span className="faq-title-line">You&apos;ve got questions.</span>
          <span className="faq-title-line serif-i">We&apos;ve got answers.</span>
        </>
      }
    />
  );
}
