import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function UiSlide({ slide }) {
  return (
    <>
      <div className="cs-ui">
        <div className="ui-bar">
          <span className="d" />
          <span className="d" />
          <span className="ui-tag">{slide.tag}</span>
        </div>
        {slide.lines.map((width) => (
          <div key={width} className="ui-line" style={{ width }} />
        ))}
        <div className="ui-card">
          <div className="ui-h">{slide.title}</div>
          <div className="ui-sub">{slide.subtitle}</div>
          <div className="ui-meter">
            <i style={{ width: slide.meter }} />
          </div>
        </div>
      </div>
      <span className="cs-caption">{slide.caption}</span>
    </>
  );
}

function PhotoSlide({ slide }) {
  return (
    <>
      <div className="cs-photo" style={{ backgroundImage: `url('${slide.image}')` }} />
      <div className="cs-veil" />
      <span className="cs-caption">{slide.caption}</span>
    </>
  );
}

export default function Carousel({ slides }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const count = slides.length;

  const go = (k) => setIndex(((k % count) + count) % count);

  const restart = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      timerRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % count);
      }, 3000);
    }
  };

  useEffect(() => {
    restart();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [count]);

  return (
    <div
      className="carousel"
      data-carousel
      onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
      onMouseLeave={restart}
    >
      <div className="car-frame">
        <div className="car-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.caption} className="car-slide">
              {slide.type === 'photo' ? <PhotoSlide slide={slide} /> : <UiSlide slide={slide} />}
            </div>
          ))}
        </div>
      </div>
      <div className="car-ctrl">
        <div className="car-dots">
          {slides.map((slide, i) => (
            <button
              key={slide.caption}
              type="button"
              className={`car-dot${i === index ? ' on' : ''}`}
              aria-label={`Slide ${i + 1}`}
              onClick={() => {
                go(i);
                restart();
              }}
            />
          ))}
        </div>
        <div className="car-arrows">
          <button
            type="button"
            className="car-arrow"
            aria-label="Previous"
            onClick={() => {
              go(index - 1);
              restart();
            }}
          >
            <ArrowLeft size={18} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            className="car-arrow"
            aria-label="Next"
            onClick={() => {
              go(index + 1);
              restart();
            }}
          >
            <ArrowRight size={18} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
}
