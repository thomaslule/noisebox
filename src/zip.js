import gzip from 'gzip-js';

// string => gzip bytes array => gzip string => Base64
export const zip = toZip =>
  btoa(String.fromCharCode.apply(
    null,
    gzip.zip(toZip),
  ));

// Base64 => gzip string => gzip bytes array => unzipped bytes array => string
export const unzip = zipped =>
  String.fromCharCode.apply(
    null,
    gzip.unzip(atob(zipped)
      .split('')
      .map(char => char.charCodeAt(0))),
  );
