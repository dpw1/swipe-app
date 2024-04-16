export function sortArrayAlphabetically(array) {
  const groupedWords = {};
  const emojiRegex = /\p{Emoji}/u;
  const reasonObjects = array
    .map((text) => ({
      originalText: text,
      noEmojiText: text.replace(emojiRegex, "").trim(),
    }))
    .sort((a, b) => a.noEmojiText.localeCompare(b.noEmojiText));

  reasonObjects.forEach((each) => {
    const { originalText, noEmojiText } = each;

    const firstLetter = noEmojiText.charAt(0).toLowerCase();

    if (!groupedWords[firstLetter]) {
      groupedWords[firstLetter] = [];
    }
    groupedWords[firstLetter].push(originalText);
  });

  const result = [];
  for (const letter in groupedWords) {
    result.push({
      alphabet: letter,
      words: groupedWords[letter],
    });
  }
  return result;
}

export function getMedia(path) {
  try {
    const isProduction =
      window.location.href.includes("github.io") ||
      window.location.href.includes("RateMyPicture");

    if (isProduction) {
      return `${window.location.origin}/swipe-app/${path}`;
    } else {
      return path;
    }
  } catch (err) {
    return path;
  }
}
