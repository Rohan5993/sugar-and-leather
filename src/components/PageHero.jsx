import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';
import Button from './ui/Button';

export default function PageHero({
  eyebrow,
  title,
  highlight,
  sub,
  image,
  primaryAction,
  secondaryAction,
  compact = false,
  fullViewport = false,
}) {
  const heroClass = [
    'page-hero',
    'surface-dark',
    compact && 'page-hero--compact',
    fullViewport && 'page-hero--viewport',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={heroClass} data-screen-label="Hero">
      <div
        className="page-hero-bg"
        style={image ? { backgroundImage: `url('${image}')` } : undefined}
      />
      <div className="page-hero-scrim" />
      <div className="page-hero-grain" />
      <div className="wrap page-hero-content">
        <Reveal as={Eyebrow} center>
          {eyebrow}
        </Reveal>
        <SplitText as="h1" className="display page-hero-title">
          {title}
          {highlight ? (
            <>
              <br />
              <span className="serif-i">{highlight}</span>
            </>
          ) : null}
        </SplitText>
        {sub ? (
          <Reveal as="p" className="page-hero-sub" delay={2}>
            {sub}
          </Reveal>
        ) : null}
        {primaryAction || secondaryAction ? (
          <Reveal className="page-hero-actions" delay={3}>
            {primaryAction ? (
              <Button href={primaryAction.href}>{primaryAction.label}</Button>
            ) : null}
            {secondaryAction ? (
              <Button href={secondaryAction.href} variant="outline" showArrow={false}>
                {secondaryAction.label}
              </Button>
            ) : null}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
