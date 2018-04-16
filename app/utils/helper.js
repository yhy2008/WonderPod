export function removeTag(str) {
  return str.replace(/<(?:.|\n)*?>/gm, '');
}
