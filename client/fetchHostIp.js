const { writeFileSync } = require('fs')
const { address } = require('ip')

const ip = address()
console.log('Fetching host IP: ', ip)

writeFileSync('host-ip.json', JSON.stringify({ address: ip }))
