export default function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const countryCodeRemoved = cleaned.startsWith('7') ? cleaned.substring(1) : cleaned;
    return '8' + countryCodeRemoved;
}