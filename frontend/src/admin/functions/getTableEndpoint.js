export default function getTableEndpoint(type) {
    switch (type) {
        case 'pro':
        case 'for':
        case 'pap':
        case 'bas':
        case 'tco':
        case 'var':
        case 'nco':
            return 'management'
        case 'users':
            return 'users'
        default:
            return ''
    }
}