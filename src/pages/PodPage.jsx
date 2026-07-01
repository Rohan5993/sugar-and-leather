import { Navigate, useParams } from 'react-router-dom';
import { POD_PAGES } from '../data/podContent';
import PageHero from '../components/PageHero';
import ContentSection from '../components/ContentSection';
import ExpertiseSection from '../components/ExpertiseSection';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import CTA from '../components/CTA';

export default function PodPage() {
  const { podSlug } = useParams();
  const pod = POD_PAGES[podSlug];

  if (!pod) {
    return <Navigate to="/" replace />;
  }

  const [challenge, partnership, model] = pod.sections;

  return (
    <div className="product-page pod-page">
      <PageHero
        eyebrow={pod.eyebrow}
        title={pod.heroTitle}
        highlight={pod.heroHighlight}
        sub={pod.heroSub}
        image={pod.heroImage}
        stackedTitle
        primaryAction={{
          label: 'Book a Strategy Call',
          href: 'mailto:hello@sugarandleather.com',
        }}
        secondaryAction={{
          label: pod.parentLabel,
          href: `/${pod.parentSlug}`,
        }}
      />
      <ContentSection section={challenge} tone="dark" />
      <ContentSection section={partnership} tone="light" />
      <ExpertiseSection expertise={pod.expertise} tone="dark" />
      <ProcessSection process={pod.process} tone="light" />
      <ContentSection section={model} tone="dark" />
      <FAQSection
        items={pod.faq}
        eyebrow={`${pod.name} · FAQ`}
        title="Questions about the Marketing Pod"
        maxim={null}
        id={`${pod.slug}-faq`}
        tone="light"
      />
      <CTA {...pod.cta} />
    </div>
  );
}
