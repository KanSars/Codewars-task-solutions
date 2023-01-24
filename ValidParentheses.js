function validParentheses(parens) {
  let summOfParens = 0;

  for (const iterator of parens) {
    summOfParens += iterator.charCodeAt(0) === 40 ? 1 : -1;
    if (summOfParens < 0) return false;
  }

  if (summOfParens === 0) return true;
  return false;
}