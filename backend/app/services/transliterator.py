class Transliterater:
    def __init__(self):
        self.devanagari_to_itrans = {
            'अ': 'a', 'आ': 'aa', 'इ': 'i', 'ई': 'ii', 'उ': 'u', 'ऊ': 'uu',
            'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au',
            'क': 'ka', 'ख': 'kha', 'ग': 'ga', 'घ': 'gha', 'ङ': 'na',
            'च': 'cha', 'छ': 'chha', 'ज': 'ja', 'झ': 'jha', 'ञ': 'na',
            'ट': 'Ta', 'ठ': 'Tha', 'ड': 'Da', 'ढ': 'Dha', 'ण': 'Na',
            'त': 'ta', 'थ': 'tha', 'द': 'da', 'ध': 'dha', 'न': 'na',
            'प': 'pa', 'फ': 'pha', 'ब': 'ba', 'भ': 'bha', 'म': 'ma',
            'य': 'ya', 'र': 'ra', 'ल': 'la', 'व': 'va',
            'श': 'sha', 'ष': 'Sha', 'स': 'sa', 'ह': 'ha'
        }

    def devanagari_to_itrans_transliterate(self, text):
        result = []
        for char in text:
            result.append(self.devanagari_to_itrans.get(char, char))
        return ''.join(result)

    def itrans_to_devanagari(self, text):
        return text
