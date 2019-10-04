const prod = process.env.NODE_ENV === 'production'

const BACKEND_URL = prod ? '/doors' : ''

export default BACKEND_URL
