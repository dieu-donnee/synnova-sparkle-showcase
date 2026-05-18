function normalizeEncodingName(label) {
  if (typeof label !== "string" || !label.trim()) return null;

  try {
    return new TextDecoder(label).encoding;
  } catch {
    return null;
  }
}

function getBOMEncoding(uint8Array) {
  if (!(uint8Array instanceof Uint8Array) || uint8Array.length < 2) return null;

  if (uint8Array.length >= 3 && uint8Array[0] === 0xef && uint8Array[1] === 0xbb && uint8Array[2] === 0xbf) {
    return "utf-8";
  }

  if (uint8Array[0] === 0xfe && uint8Array[1] === 0xff) {
    return "utf-16be";
  }

  if (uint8Array[0] === 0xff && uint8Array[1] === 0xfe) {
    return "utf-16le";
  }

  return null;
}

function labelToName(label) {
  return normalizeEncodingName(label);
}

function isSupported(name) {
  return normalizeEncodingName(name) !== null;
}

function decode(uint8Array, fallbackEncodingName = "utf-8") {
  const bomEncoding = getBOMEncoding(uint8Array);
  const encoding = bomEncoding ?? normalizeEncodingName(fallbackEncodingName) ?? "utf-8";
  return new TextDecoder(encoding).decode(uint8Array);
}

module.exports = {
  decode,
  getBOMEncoding,
  isSupported,
  labelToName,
};
