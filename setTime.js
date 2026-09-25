console.log("start")
setTimeout(() =>{
    console.log("timeout")
},2000)
setImmediate(() => {
    console.log("Immediate")
})
process.nextTick(() => {
    console.log("Next Tick")
})