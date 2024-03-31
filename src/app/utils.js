export function sortEmojiArray(array) {
  const emojiRegex = /\p{Emoji}/u;
  const reasonObjects = array
    .map((text) => ({
      originalText: text,
      noEmojiText: text.replace(emojiRegex, "").trim(),
    }))
    .sort((a, b) => a.noEmojiText.localeCompare(b.noEmojiText));
  return reasonObjects.map((obj) => obj.originalText);
}
