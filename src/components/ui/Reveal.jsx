import { forwardRef } from 'react';
import { useReveal } from '../../hooks/useReveal';

const Reveal = forwardRef(function Reveal(
  { as: Tag = 'div', className = '', delay, fade, children, ...props },
  forwardedRef
) {
  const { ref, className: revealClass } = useReveal();

  const setRef = (node) => {
    ref.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  const delayAttr = delay ? { 'data-reveal-delay': String(delay) } : {};
  const fadeAttr = fade ? { 'data-reveal': 'fade' } : { 'data-reveal': '' };

  return (
    <Tag
      ref={setRef}
      className={`${className} ${revealClass}`.trim()}
      {...fadeAttr}
      {...delayAttr}
      {...props}
    >
      {children}
    </Tag>
  );
});

export default Reveal;
