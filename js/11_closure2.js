
function y() {
  let count = 0
 function increment(){
  return count++
 }
 let message = count
 function log() {
  console.log(message)
 }
 
 return [increment, log]
}

const [increment, log] = y()
increment()
increment()
increment()
log()


