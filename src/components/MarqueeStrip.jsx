import { MARQUEE_ITEMS } from '../data/siteContent';

export default function MarqueeStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track" id="strip">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="strip-item">
            {i > 0 ? <span className="dot" /> : null}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
