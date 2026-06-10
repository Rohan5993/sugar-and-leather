import { useEffect, useRef } from 'react';

function FaqItem({ item, open, onToggle }) {
  const answerRef = useRef(null);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;
    el.style.maxHeight = open ? `${el.scrollHeight}px` : '0px';
  }, [open]);

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button type="button" className="faq-q" onClick={onToggle}>
        <span className="q-ic" />
        <span>{item.question}</span>
      </button>
      <div className="faq-a" ref={answerRef}>
        <div className="faq-a-inner">{item.answer}</div>
      </div>
    </div>
  );
}

export default FaqItem;
