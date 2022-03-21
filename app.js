const EventEmitted = require('events')

const customEmitter = new EventEmitted()

customEmitter.on('response', (name,id)=>{
console.log('data recived')
})

customEmitter.on('response', ()=>{
    console.log('different data recived')
    })

    customEmitter.emit('response','walter',31)