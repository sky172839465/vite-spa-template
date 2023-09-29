import fs from 'fs'
const aa = fs
  .readdirSync('src', { withFileTypes: true })
  .filter(item => item.isDirectory())
console.log(aa)
