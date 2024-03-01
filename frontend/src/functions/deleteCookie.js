import getCookie from './getCookie'

export default function deleteCookie(name) {
    const cookie = getCookie(name);
    if (cookie) {
        document.cookie = "isUserLoged=true; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    }
}