import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';

export default function SuccessStories({ stories, title = 'Success stories', tone = 'dark' }) {
  if (!stories?.length) return null;

  return (
    <section className={`section page-stories surface-${tone}`}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal as={Eyebrow}>Outcomes</Reveal>
            <SplitText as="h2" className="display" style={{ marginTop: 22 }}>
              {title}
            </SplitText>
          </div>
          <Reveal as="p" className="lead" delay={2}>
            Names withheld by design. The work speaks — quietly.
          </Reveal>
        </div>
        <div className="story-grid">
          {stories.map((story, i) => (
            <Reveal as="blockquote" className="story-card" key={story.quote.slice(0, 40)} delay={i}>
              <p className="story-quote">&ldquo;{story.quote}&rdquo;</p>
              <footer className="story-meta">
                <span className="story-role">{story.role}</span>
                <span className="story-sector">{story.sector}</span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
