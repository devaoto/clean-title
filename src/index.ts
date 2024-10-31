const removeSpecialChars = (str: string) => {
  return str.replace(/[^\p{L}\p{N}\s]/gu, "");
};

/**
 * Clean a title string by removing special characters, converting to lowercase, removing unnecessary tags,
 * extra spaces, and diacritics, ensuring a clean and normalized title.
 *
 * @param {string} str - The title string to clean.
 * @returns {string} The cleaned title string, truncated to a maximum of 255 characters.
 *
 * @example
 * // Basic usage:
 * cleanTitle("Official Music Video - AMAZING 🎶 song!")
 * // returns "amazing song"
 *
 * @example
 * // Removes unnecessary words, extra spaces, and diacritics:
 * cleanTitle("L'animation Of My Life - Official Audio")
 * // returns "l animation of my life"
 *
 * @description
 * This function performs the following operations in sequence:
 * 1. Removes special characters while preserving alphanumeric characters and spaces.
 * 2. Converts all characters to lowercase.
 * 3. Removes commonly used, unnecessary words in titles such as "official," "music video," and "lyrics."
 * 4. Replaces multiple spaces with a single space.
 * 5. Removes any leading or trailing whitespace.
 * 6. Normalizes characters to remove diacritics (e.g., "é" becomes "e").
 * 7. Truncates the final string to 255 characters.
 */

export const cleanTitle = (str: string) => {
  let output = removeSpecialChars(str);

  output = output.toLowerCase();
  output = output.replace(
    /\b(official|music|video|lyrics|audio|animated|amv|omv|m\/v|a?m\s*v)\b|\bofficial\s*(audio|music|lyrics\s*video|lyrics)?\b/gi,
    ""
  );
  output = output.replace(/- Topic$/gi, "");
  output = output.replace(/s+/g, " ");
  output = output.replace(/\s{2,}/g, " ");
  output = output.replace(/^\s+|\s+$/g, "");
  output = output.replace(/\(([^)]*)\)/gi, "");
  // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
  output = output.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  output = output.trim();

  output = output.slice(0, 255);

  return output;
};
