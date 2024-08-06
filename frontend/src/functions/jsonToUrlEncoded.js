export default function jsonToUrlEncoded(json) {
    return Object.keys(json)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(json[key]))
      .join('&');
  }