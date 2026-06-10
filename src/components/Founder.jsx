import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FOUNDERS } from '../data/siteContent';
import Eyebrow from './ui/Eyebrow';

const FOUNDER_AUTOPLAY_MS = 5000;

function FounderSlide({ founder }) {
  return (
    <div className="founder-slide">
      <div className="founder-grid">
        <div className="founder-portrait">
          <img src={founder.image} alt={founder.name} />
          <span className="fp-tag">{founder.tag}</span>
        </div>
        <div className="founder-text">
          <Eyebrow>{founder.eyebrow}</Eyebrow>
          <p className="founder-quote">
            {founder.quote}{' '}
            <span className="hl">{founder.quoteHighlight}</span> {founder.quoteEnd}
          </p>
          <p className="founder-body">{founder.body}</p>
          <div className="founder-sign">
            <span className="sig">{founder.name}</span>
            <span className="who">{founder.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Founder() {
  const [index, setIndex] = useState(0);
  const [slowEnter, setSlowEnter] = useState(false);
  const timerRef = useRef(null);
  const count = FOUNDERS.length;

  const goTo = (nextIndex) => {
    const normalized = ((nextIndex % count) + count) % count;
    setSlowEnter(normalized === 1);
    setIndex(normalized);
  };

  const restartAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (count <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % count;
        setSlowEnter(next === 1);
        return next;
      });
    }, FOUNDER_AUTOPLAY_MS);
  };

  useEffect(() => {
    restartAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [count]);

  const handleManualNav = (nextIndex) => {
    goTo(nextIndex);
    restartAutoplay();
  };

  return (
    <section className="section founder" id="founder" data-screen-label="Founder">
      <div className="wrap">
        <div className="founder-carousel">
          <div className="founder-car-frame">
            <div
              className={`founder-car-track${slowEnter ? ' founder-car-track--slow-enter' : ''}`}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {FOUNDERS.map((founder) => (
                <FounderSlide key={founder.id} founder={founder} />
              ))}
            </div>
          </div>
          {count > 1 ? (
            <div className="founder-car-ctrl">
              <div className="founder-car-dots">
                {FOUNDERS.map((founder, i) => (
                  <button
                    key={founder.id}
                    type="button"
                    className={`founder-car-dot${i === index ? ' on' : ''}`}
                    aria-label={`Show ${founder.name}`}
                    onClick={() => handleManualNav(i)}
                  />
                ))}
              </div>
              <div className="founder-car-arrows">
                <button
                  type="button"
                  className="founder-car-arrow"
                  aria-label="Previous founder"
                  onClick={() => handleManualNav(index - 1)}
                >
                  <ArrowLeft size={18} strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  className="founder-car-arrow"
                  aria-label="Next founder"
                  onClick={() => handleManualNav(index + 1)}
                >
                  <ArrowRight size={18} strokeWidth={1.75} />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
