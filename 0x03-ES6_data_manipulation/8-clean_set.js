export default function cleanSet(set, startString) {
  const strings = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subString = value.substring(startString.length);

      if (subString && subString !== value) {
        strings.push(subString);
      }
    }
  }
  return (strings.join('-'));
}
