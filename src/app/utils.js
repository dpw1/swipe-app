export const ROUTES = {
  voteOnUsersPage: `/app`,
  newTest: `/new-test`,
  myTests: `/my-tests`,
  privacyPolicy: `/privacy-policy`,
};

export const imageTypes = {
  // Standard image formats
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
  "image/webp": "webp",
  "image/bmp": "bmp",
  "image/svg+xml": "svg",
  "image/tiff": "tiff",
  "image/heif": "heif",
  "image/heic": "heic",
  "image/x-icon": "ico",
  "image/jp2": "jp2",
  "image/avif": "avif",
  "image/ktx": "ktx",
  "image/ktx2": "ktx2",
  "image/jxr": "jxr",
  "image/xdm": "xdm",

  // Additional less common formats
  "image/cmu-raster": "ras",
  "image/fits": "fits",
  "image/ief": "ief",
  "image/sgi": "sgi",
  "image/vnd.djvu": "djvu",
  "image/vnd.dwg": "dwg",
  "image/vnd.dxf": "dxf",
  "image/vnd.microsoft.icon": "ico",
  "image/vnd.wap.wbmp": "wbmp",
  "image/x-cmu-raster": "ras",
  "image/x-freehand": "fh",
  "image/x-icon": "ico",
  "image/x-jng": "jng",
  "image/x-mrsid-image": "sid",
  "image/x-nikon-nef": "nef",
  "image/x-photoshop": "psd",
  "image/x-pict": "pict",
  "image/x-portable-anymap": "pnm",
  "image/x-portable-bitmap": "pbm",
  "image/x-portable-graymap": "pgm",
  "image/x-portable-pixmap": "ppm",
  "image/x-rgb": "rgb",
  "image/x-tiff": "tiff",
  "image/x-xbitmap": "xbm",
  "image/x-xpixmap": "xpm",
  "image/x-xwindowdump": "xwd",
};

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

export function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
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
  _scrollTo(`.EmailSignup`);
}

function _scrollTo(selector, yOffset = 0) {
  const el = document.querySelector(selector);
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}
