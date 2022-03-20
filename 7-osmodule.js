const os = require('os')

// current user
const user = os.userInfo();
console.log(user);
///returning system uptime in seconds
console.log(`system uptime is ${os.uptime()}`)