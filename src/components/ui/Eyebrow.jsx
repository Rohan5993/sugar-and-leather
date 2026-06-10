export default function Eyebrow({ center, className = '', children }) {
  return <div className={`eyebrow ${center ? 'center' : ''} ${className}`.trim()}>{children}</div>;
}
