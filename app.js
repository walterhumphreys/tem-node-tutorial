const EventEmitted = require('events')

const customEmitter = new EventEmitted()

customEmitter.on('response', (name,id)=>{
console.log('data recived',`now get ${name} and ${id}`)
})

customEmitter.on('response',  (name,id)=>{
    console.log('different data recived',`now get ${name} and ${id}`)
    })

    customEmitter.emit('response','walter',31)
    customEmitter.emit('response','walter',32)