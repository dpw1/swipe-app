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
  if (isDevEnvironment()) {
    return path;
  }

  const URL = `https://dpw1.github.io/swipe-app/${path}`;
  return URL;
}

function isDevEnvironment() {
  return process.env.NODE_ENV === "development";
}

export function scrollToSubscribe() {
  _scrollTo(``);
}

function _scrollTo(selector, yOffset = 0) {
  const el = document.querySelector(selector);
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}
