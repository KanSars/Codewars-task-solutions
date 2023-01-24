function domainName(url) {
  const slashRegex = /\/\/\w/;
  const wwwRegex = /www./;
  const wordEndRegex = /\./g;
  let wordLastindex = 0;
  let wordBeginIndex;
  const matchAllResult = url.matchAll(wordEndRegex);

  if (wwwRegex.test(url)) {
    wordBeginIndex = url.match(wwwRegex)?.index + 4;
    wordLastindex = Array.from(matchAllResult)[1].index;
  } else {
    if (slashRegex.test(url)) {
      wordBeginIndex = url.match(slashRegex)?.index + 2;
      wordLastindex = Array.from(matchAllResult)[0]?.index;
    } else {
      wordLastindex = Array.from(matchAllResult)[0]?.index
    }
  }

  return url.slice(wordBeginIndex, wordLastindex);
}