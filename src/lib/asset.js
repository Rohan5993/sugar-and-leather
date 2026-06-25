export function asset(path) {
  const clean = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${clean}`;
}

export function hashHref(fragment) {
  const hash = fragment.startsWith('#') ? fragment : `#${fragment}`;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base ? `${base}${hash}` : hash;
}
