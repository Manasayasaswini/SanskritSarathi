export type VarnaCategory = 'swar' | 'vyanjana' | 'anusvara' | 'visarga';

export interface Varna {
  id: string;
  devanagari: string;
  iast: string;
  itrans: string;
  category: VarnaCategory;
  subcategory?: string;
  sthana: string;
  prayatna: string;
  audioFile?: string;
  description?: string;
}

export const varnaData: Varna[] = [
  // Swaras (Vowels) - 14 vowels
  {
    id: 'a',
    devanagari: 'अ',
    iast: 'a',
    itrans: 'a',
    category: 'swar',
    sthana: 'Kanthya (Guttural)',
    prayatna: 'Soft, open throat',
    description: 'Short "a" as in "cut"'
  },
  {
    id: 'aa',
    devanagari: 'आ',
    iast: 'ā',
    itrans: 'A',
    category: 'swar',
    sthana: 'Kanthya (Guttural)',
    prayatna: 'Extended, open throat',
    description: 'Long "aa" as in "father"'
  },
  {
    id: 'i',
    devanagari: 'इ',
    iast: 'i',
    itrans: 'i',
    category: 'swar',
    sthana: 'Taluya (Palatal)',
    prayatna: 'Tongue near palate, lips spread',
    description: 'Short "i" as in "bit"'
  },
  {
    id: 'ee',
    devanagari: 'ई',
    iast: 'ī',
    itrans: 'I',
    category: 'swar',
    sthana: 'Taluya (Palatal)',
    prayatna: 'Extended, tongue near palate',
    description: 'Long "ee" as in "machine"'
  },
  {
    id: 'u',
    devanagari: 'उ',
    iast: 'u',
    itrans: 'u',
    category: 'swar',
    sthana: 'Oshtha (Labial)',
    prayatna: 'Lips rounded, tongue relaxed',
    description: 'Short "u" as in "put"'
  },
  {
    id: 'oo',
    devanagari: 'ऊ',
    iast: 'ū',
    itrans: 'U',
    category: 'swar',
    sthana: 'Oshtha (Labial)',
    prayatna: 'Extended lip rounding',
    description: 'Long "oo" as in "moon"'
  },
  {
    id: 'ri',
    devanagari: 'ऋ',
    iast: 'ṛ',
    itrans: 'Ri',
    category: 'swar',
    subcategory: 'Dirgha',
    sthana: 'Kanthya-Taluya (Guttural-Palatal)',
    prayatna: 'Tongue curled back',
    description: 'Vocalic "ri" - like "ri" in "rich"'
  },
  {
    id: 'rii',
    devanagari: 'ॠ',
    iast: 'ṝ',
    itrans: 'Ri',
    category: 'swar',
    subcategory: 'Dirgha',
    sthana: 'Kanthya-Taluya (Guttural-Palatal)',
    prayatna: 'Extended tongue curl',
    description: 'Long vocalic "ri"'
  },
  {
    id: 'li',
    devanagari: 'ऌ',
    iast: 'ḷ',
    itrans: 'Li',
    category: 'swar',
    sthana: 'Dantya (Dental)',
    prayatna: 'Tongue touches teeth',
    description: 'Vocalic "li"'
  },
  {
    id: 'lii',
    devanagari: 'ॡ',
    iast: 'ḹ',
    itrans: 'Li',
    category: 'swar',
    sthana: 'Dantya (Dental)',
    prayatna: 'Extended tongue to teeth',
    description: 'Long vocalic "li"'
  },
  {
    id: 'e',
    devanagari: 'ए',
    iast: 'e',
    itrans: 'e',
    category: 'swar',
    sthana: 'Taluya (Palatal)',
    prayatna: 'Half-open, tongue forward',
    description: 'Long "e" as in "they"'
  },
  {
    id: 'ai',
    devanagari: 'ऐ',
    iast: 'ai',
    itrans: 'ai',
    category: 'swar',
    sthana: 'Taluya (Palatal)',
    prayatna: 'Diphthong - "a" + "i"',
    description: 'Diphthong "ai" as in "aisle"'
  },
  {
    id: 'o',
    devanagari: 'ओ',
    iast: 'o',
    itrans: 'o',
    category: 'swar',
    sthana: 'Taluya (Palatal)',
    prayatna: 'Half-open, lip rounded',
    description: 'Long "o" as in "go"'
  },
  {
    id: 'au',
    devanagari: 'औ',
    iast: 'au',
    itrans: 'au',
    category: 'swar',
    sthana: 'Taluya (Palatal)',
    prayatna: 'Diphthong - "a" + "u"',
    description: 'Diphthong "au" as in "cow"'
  },

  // Vyanjanas (Consonants) - 33 base consonants
  // Kavargas (Guttural - throat)
  {
    id: 'ka',
    devanagari: 'क',
    iast: 'ka',
    itrans: 'ka',
    category: 'vyanjana',
    subcategory: 'Kavarga',
    sthana: 'Kanthya (Guttural)',
    prayatna: 'Back of tongue touches soft palate',
    description: 'Hard "k" as in "sky"'
  },
  {
    id: 'kha',
    devanagari: 'ख',
    iast: 'kha',
    itrans: 'kha',
    category: 'vyanjana',
    subcategory: 'Kavarga',
    sthana: 'Kanthya (Guttural)',
    prayatna: 'Aspirated - breath released with "k"',
    description: 'Aspirated "kh" - like "kh" in "khaki"'
  },
  {
    id: 'ga',
    devanagari: 'ग',
    iast: 'ga',
    itrans: 'ga',
    category: 'vyanjana',
    subcategory: 'Kavarga',
    sthana: 'Kanthya (Guttural)',
    prayatna: 'Soft, voiced gutteral',
    description: 'Voiced "g" as in "go"'
  },
  {
    id: 'gha',
    devanagari: 'घ',
    iast: 'gha',
    itrans: 'gha',
    category: 'vyanjana',
    subcategory: 'Kavarga',
    sthana: 'Kanthya (Guttural)',
    prayatna: 'Voiced + aspirated',
    description: 'Voiced aspirated "gh"'
  },
  {
    id: 'nga',
    devanagari: 'ङ',
    iast: 'ṅa',
    itrans: 'Na',
    category: 'vyanjana',
    subcategory: 'Kavarga',
    sthana: 'Kanthya (Guttural)',
    prayatna: 'Nasal - tongue back touches soft palate',
    description: 'Guttural nasal - like "ng" in "sing"'
  },

  // Tavargas (Palatal)
  {
    id: 'cha',
    devanagari: 'च',
    iast: 'ca',
    itrans: 'cha',
    category: 'vyanjana',
    subcategory: 'Tavarga',
    sthana: 'Taluya (Palatal)',
    prayatna: 'Tongue touches hard palate',
    description: 'Unvoiced "ch" - like "ch" in "chin"'
  },
  {
    id: 'chha',
    devanagari: 'छ',
    iast: 'cha',
    itrans: 'Chha',
    category: 'vyanjana',
    subcategory: 'Tavarga',
    sthana: 'Taluya (Palatal)',
    prayatna: 'Aspirated unvoiced palatal',
    description: 'Aspirated "chh"'
  },
  {
    id: 'ja',
    devanagari: 'ज',
    iast: 'ja',
    itrans: 'ja',
    category: 'vyanjana',
    subcategory: 'Tavarga',
    sthana: 'Taluya (Palatal)',
    prayatna: 'Voiced palatal stop',
    description: 'Voiced "j" as in "joy"'
  },
  {
    id: 'jha',
    devanagari: 'झ',
    iast: 'jha',
    itrans: 'jha',
    category: 'vyanjana',
    subcategory: 'Tavarga',
    sthana: 'Taluya (Palatal)',
    prayatna: 'Voiced + aspirated',
    description: 'Voiced aspirated "jh"'
  },
  {
    id: 'nya',
    devanagari: 'ञ',
    iast: 'ña',
    itrans: 'Ya',
    category: 'vyanjana',
    subcategory: 'Tavarga',
    sthana: 'Taluya (Palatal)',
    prayatna: 'Nasal - tongue touches palate',
    description: 'Palatal nasal - like "n" in "canyon"'
  },

  // Tavargas (Retroflex)
  {
    id: 'ta',
    devanagari: 'ट',
    iast: 'ṭa',
    itrans: 'Ta',
    category: 'vyanjana',
    subcategory: 'Tavarga',
    sthana: 'Murdhanya (Retroflex)',
    prayatna: 'Tongue curls back, touches palate',
    description: 'Retroflex "t" - tongue curls up'
  },
  {
    id: 'tha',
    devanagari: 'ठ',
    iast: 'ṭha',
    itrans: 'Tha',
    category: 'vyanjana',
    subcategory: 'Tavarga',
    sthana: 'Murdhanya (Retroflex)',
    prayatna: 'Aspirated retroflex',
    description: 'Aspirated retroflex "th"'
  },
  {
    id: 'da',
    devanagari: 'ड',
    iast: 'ḍa',
    itrans: 'Da',
    category: 'vyanjana',
    subcategory: 'Tavarga',
    sthana: 'Murdhanya (Retroflex)',
    prayatna: 'Voiced retroflex',
    description: 'Voiced retroflex "d"'
  },
  {
    id: 'dha',
    devanagari: 'ढ',
    iast: 'ḍha',
    itrans: 'Dha',
    category: 'vyanjana',
    subcategory: 'Tavarga',
    sthana: 'Murdhanya (Retroflex)',
    prayatna: 'Voiced + aspirated retroflex',
    description: 'Voiced aspirated retroflex "dh"'
  },
  {
    id: 'na',
    devanagari: 'ण',
    iast: 'ṇa',
    itrans: 'Na',
    category: 'vyanjana',
    subcategory: 'Tavarga',
    sthana: 'Murdhanya (Retroflex)',
    prayatna: 'Nasal - tongue curled back',
    description: 'Retroflex nasal'
  },

  // Dantavargas (Dental)
  {
    id: 'ta_d',
    devanagari: 'त',
    iast: 'ta',
    itrans: 'ta',
    category: 'vyanjana',
    subcategory: 'Dantavarga',
    sthana: 'Dantya (Dental)',
    prayatna: 'Tongue touches teeth',
    description: 'Dental "t" - tongue at teeth'
  },
  {
    id: 'tha_d',
    devanagari: 'थ',
    iast: 'tha',
    itrans: 'tha',
    category: 'vyanjana',
    subcategory: 'Dantavarga',
    sthana: 'Dantya (Dental)',
    prayatna: 'Aspirated dental',
    description: 'Aspirated dental "th"'
  },
  {
    id: 'da_d',
    devanagari: 'द',
    iast: 'da',
    itrans: 'da',
    category: 'vyanjana',
    subcategory: 'Dantavarga',
    sthana: 'Dantya (Dental)',
    prayatna: 'Voiced dental',
    description: 'Voiced dental "d"'
  },
  {
    id: 'dha_d',
    devanagari: 'ध',
    iast: 'dha',
    itrans: 'dha',
    category: 'vyanjana',
    subcategory: 'Dantavarga',
    sthana: 'Dantya (Dental)',
    prayatna: 'Voiced + aspirated dental',
    description: 'Voiced aspirated dental "dh"'
  },
  {
    id: 'na_d',
    devanagari: 'न',
    iast: 'na',
    itrans: 'na',
    category: 'vyanjana',
    subcategory: 'Dantavarga',
    sthana: 'Dantya (Dental)',
    prayatna: 'Nasal - tongue at teeth',
    description: 'Dental nasal'
  },

  // Oshtavargas (Labial)
  {
    id: 'pa',
    devanagari: 'प',
    iast: 'pa',
    itrans: 'pa',
    category: 'vyanjana',
    subcategory: 'Oshtavarga',
    sthana: 'Oshtha (Labial)',
    prayatna: 'Both lips touch',
    description: 'Labial "p" as in "spin"'
  },
  {
    id: 'pha',
    devanagari: 'फ',
    iast: 'pha',
    itrans: 'pha',
    category: 'vyanjana',
    subcategory: 'Oshtavarga',
    sthana: 'Oshtha (Labial)',
    prayatna: 'Aspirated labial',
    description: 'Aspirated "ph" - like "p" in "top-heavy"'
  },
  {
    id: 'ba',
    devanagari: 'ब',
    iast: 'ba',
    itrans: 'ba',
    category: 'vyanjana',
    subcategory: 'Oshtavarga',
    sthana: 'Oshtha (Labial)',
    prayatna: 'Voiced labial',
    description: 'Voiced "b" as in "boy"'
  },
  {
    id: 'bha',
    devanagari: 'भ',
    iast: 'bha',
    itrans: 'bha',
    category: 'vyanjana',
    subcategory: 'Oshtavarga',
    sthana: 'Oshtha (Labial)',
    prayatna: 'Voiced + aspirated labial',
    description: 'Voiced aspirated "bh"'
  },
  {
    id: 'ma',
    devanagari: 'म',
    iast: 'ma',
    itrans: 'ma',
    category: 'vyanjana',
    subcategory: 'Oshtavarga',
    sthana: 'Oshtha (Labial)',
    prayatna: 'Nasal - lips closed',
    description: 'Labial nasal - like "m" in "moon"'
  },

  // Antahstha (Semivowels)
  {
    id: 'ya',
    devanagari: 'य',
    iast: 'ya',
    itrans: 'ya',
    category: 'vyanjana',
    subcategory: 'Antahstha',
    sthana: 'Taluya (Palatal)',
    prayatna: 'Tongue touches palate, then glides',
    description: 'Palatal glide - like "y" in "yes"'
  },
  {
    id: 'ra',
    devanagari: 'र',
    iast: 'ra',
    itrans: 'ra',
    category: 'vyanjana',
    subcategory: 'Antahstha',
    sthana: 'Dantya-Murdhanya (Dental-Retroflex)',
    prayatna: 'Tongue taps, rolled or flapped',
    description: 'Retroflex "r" - tongue curls back'
  },
  {
    id: 'la',
    devanagari: 'ल',
    iast: 'la',
    itrans: 'la',
    category: 'vyanjana',
    subcategory: 'Antahstha',
    sthana: 'Dantya (Dental)',
    prayatna: 'Tongue touches teeth ridge',
    description: 'Dental "l" as in "love"'
  },
  {
    id: 'va',
    devanagari: 'व',
    iast: 'va',
    itrans: 'va',
    category: 'vyanjana',
    subcategory: 'Antahstha',
    sthana: 'Taluya-Oshtha (Palatal-Labial)',
    prayatna: 'Upper teeth touch lower lip (labiodental)',
    description: 'Labiodental "v" - like "v" in "vine"'
  },
  {
    id: 'sha_s',
    devanagari: 'श',
    iast: 'śa',
    itrans: 'sha',
    category: 'vyanjana',
    subcategory: 'Antahstha',
    sthana: 'Taluya (Palatal)',
    prayatna: 'Tongue to palate, lips wide',
    description: 'Palatal sibilant - like "sh" in "shin"'
  },
  {
    id: 'sha',
    devanagari: 'ष',
    iast: 'ṣa',
    itrans: 'Sha',
    category: 'vyanjana',
    subcategory: 'Antahstha',
    sthana: 'Murdhanya (Retroflex)',
    prayatna: 'Tongue curled back, sibilant',
    description: 'Retroflex sibilant - tongue curled up'
  },
  {
    id: 'sa',
    devanagari: 'स',
    iast: 'sa',
    itrans: 'sa',
    category: 'vyanjana',
    subcategory: 'Antahstha',
    sthana: 'Dantya (Dental)',
    prayatna: 'Tongue near teeth, sibilant',
    description: 'Dental sibilant - like "s" in "sun"'
  },

  // Ushman (Fricatives)
  {
    id: 'ha',
    devanagari: 'ह',
    iast: 'ha',
    itrans: 'ha',
    category: 'vyanjana',
    subcategory: 'Ushman',
    sthana: 'Kanthya (Guttural)',
    prayatna: 'Breathy voice, open throat',
    description: 'Guttural fricative - like "h" in "hello"'
  },

  // Anunashika (Nasal)
  {
    id: 'anusvara',
    devanagari: 'ं',
    iast: 'ṃ',
    itrans: 'M',
    category: 'anusvara',
    sthana: 'Anusvara (Nasal)',
    prayatna: 'Soft nasal sound at velum',
    description: 'Nasalization - like "n" in "song"'
  },
  {
    id: 'visarga',
    devanagari: 'ः',
    iast: 'ḥ',
    itrans: 'H',
    category: 'visarga',
    sthana: 'Visarga (Breathy)',
    prayatna: 'Silent release with breath',
    description: 'Breathy termination - like "h" but softer'
  }
];

export const getVarnasByCategory = (category: VarnaCategory): Varna[] => {
  return varnaData.filter(v => v.category === category);
};

export const getVarnasBySubcategory = (subcategory: string): Varna[] => {
  return varnaData.filter(v => v.subcategory === subcategory);
};

export const getVarnaById = (id: string): Varna | undefined => {
  return varnaData.find(v => v.id === id);
};

export const varnaCategories = [
  { id: 'swar', name: 'Swar (Vowels)', count: varnaData.filter(v => v.category === 'swar').length },
  { id: 'vyanjana', name: 'Vyanjana (Consonants)', count: varnaData.filter(v => v.category === 'vyanjana').length },
  { id: 'anusvara', name: 'Anusvara', count: varnaData.filter(v => v.category === 'anusvara').length },
  { id: 'visarga', name: 'Visarga', count: varnaData.filter(v => v.category === 'visarga').length }
];
