function duplicateCount(incomingText) {
  let text = incomingText.toLowerCase();
  let doublesCount = 0;

  function replaceAll(text, element, newElement) {
    let result = text;
    for (let i = 0; i < text.length; i++) {
      result = result.replace(element, newElement)
    }
    return result
  }

  for (const element of text) {
    let doublesElements = 0;
    for (const iterator of text) {
      if (iterator == element) {
        doublesElements++;
      }
      text = replaceAll(text, element, '')
    }
    if (doublesElements > 1) {
      doublesCount++
    }
  }

  return doublesCount
}