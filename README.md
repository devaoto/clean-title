# clean-title

**Advanced Text Cleaner**

The `clean-title` module provides functions to sanitize and normalize strings, specifically designed for cleaning up titles of media content. This module removes special characters, irrelevant keywords, and excess whitespace, resulting in a more user-friendly and standardized title format.

## Functions

### `removeSpecialChars(str: string): string`

Removes all special characters from the given string, allowing only letters, numbers, and whitespace.

**Parameters:**

- `str` (string): The input string from which special characters will be removed.

**Returns:**

- (string): A string containing only letters, numbers, and whitespace.

**Example:**

```javascript
const cleaned = removeSpecialChars("Hello! Welcome to #CleanTitle2024.");
console.log(cleaned); // Output: "Hello Welcome to CleanTitle2024"
```

---

### `cleanTitle(str: string): string`

Cleans and normalizes the input title by applying several transformations. It removes special characters, converts the string to lowercase, eliminates specified keywords, and trims excessive whitespace.

**Parameters:**

- `str` (string): The title string that needs to be cleaned.

**Returns:**

- (string): A cleaned version of the input title, limited to 255 characters.

**Example:**

```javascript
const title = cleanTitle("I love money Official Music Video (2024) - Topic");
console.log(title); // Output: "i love money"
```

**Transformations Performed:**

1. Calls `removeSpecialChars` to remove special characters.
2. Converts the string to lowercase.
3. Removes specific keywords related to media titles (e.g., "official", "music", "video").
4. Strips " - Topic" from the end of the title.
5. Replaces multiple spaces with a single space.
6. Trims leading and trailing whitespace.
7. Removes any content within parentheses.
8. Normalizes the string by removing diacritics (accents).
9. Limits the output length to 255 characters.

---

## Usage

To use this module, import the functions and call them with the appropriate string parameters. The `cleanTitle` function is particularly useful for processing media titles before storage or display.

```javascript
import { cleanTitle } from "@mohtasimalam/clean-title";

const rawTitle = "Money Man - 24 Official Music Video (2024) - Topic";
const sanitizedTitle = cleanTitle(rawTitle);
console.log(sanitizedTitle); // Output: "money man 24"
```
