// Controlla se il valore contiene '@'
export function isEmail(value) {
    return value.includes('@');
}

// Controlla se il valore non è vuoto (rimuovendo gli spazi)
export function isNotEmpty(value) {
    return value.trim() !== '';
}

// Controlla se la lunghezza del valore è maggiore o uguale a una lunghezza minima
export function hasMinLength(value, minLength) {
    return value.length >= minLength;
}

// Controlla se due valori sono uguali
export function isEqualsToOtherValue(value, otherValue) {
    return value === otherValue;
}
