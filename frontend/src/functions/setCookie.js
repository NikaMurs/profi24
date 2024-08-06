
export default function setCookie(key, value, expiryDays) {
    var expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + expiryDays);

    var cookieValue = encodeURIComponent(key) + "=" + encodeURIComponent(value) + "; expires=" + expiryDate.toUTCString() + "; path=/";

    document.cookie = cookieValue;
}