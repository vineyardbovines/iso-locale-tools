# @iso-locale-tools/languages

List of all languages.

## Installation

Install a given package with npm or yarn.

```bash
npm install @iso-locale-tools/countries

yarn add @iso-locale-tools/countries
```

## Usage

A full list of all documented languages can be found in `src/data/languages.json`.

```ts
import { languages } from "iso-locale-tools";
```

### Types

```ts
type Language = {
  name: {
    common: string;
    native: string | null;
    alternates?: string[];
  };
  iso639_3: ISO639_3;
  bcp47: BCP47;
  iso15924: ISO15924;
  iana: string[];
  countries?: ISO3166_1_Alpha2;
  isExtinct: boolean;
  isSpurious: boolean;
};

// ISO639-3 language codes
enum ISO639_3 {}
ISO639_3.eng; // "eng"

// BCP47 language tags
enum BCP47 {}
BCP47.abq_Cyrl; // "abq-Cyrl"

// ISO15924 codes
enum ISO15924 {}
ISO15924.cyrl; // "Cyrl"
```
