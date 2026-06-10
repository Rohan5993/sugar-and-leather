import { useReveal } from '../../hooks/useReveal';
import { useEffect, useRef } from 'react';

function wrapSplitWords(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;

  let out = '';
  tmp.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent.split(/(\s+)/).forEach((tok) => {
        if (tok.trim() === '') out += tok;
        else out += `<span class="word"><span>${tok}</span></span>`;
      });
    } else if (node.nodeName === 'BR') {
      out += '<br>';
    } else {
      const cls = node.getAttribute?.('class') ? ` class="${node.getAttribute('class')}"` : '';
      const tag = node.nodeName.toLowerCase();
      out += `<span class="word"><span><${tag}${cls}>${node.innerHTML}</${tag}></span></span>`;
    }
  });

  return out;
}

export default function SplitText({ as: Tag = 'span', className = '', children, delay, ...props }) {
  const ref = useRef(null);
  const { ref: revealRef, className: revealClass } = useReveal();
  const delayAttr = delay ? { 'data-reveal-delay': String(delay) } : {};

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.split) return;
    el.dataset.split = '1';
    el.innerHTML = wrapSplitWords(el.innerHTML);
  }, [children]);

  const setRef = (node) => {
    ref.current = node;
    revealRef.current = node;
  };

  return (
    <Tag ref={setRef} className={`split ${className} ${revealClass}`.trim()} {...delayAttr} {...props}>
      {children}
    </Tag>
  );
}
