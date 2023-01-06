function print(){
  console.log('print');
  console.log(Date.now());
}

// Synchronous callback function
function printImmediately(print){
  print();
  sleep(5000)
}
// Asynchronous callback function
function printDelay(print, timeOut){
  setTimeout(print, timeOut);
}

function asyncPrint(){
  console.log('async print');
  console.log(Date.now())

}

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

printDelay(asyncPrint, 5000);
printDelay(asyncPrint, 5000);
printImmediately(print);
printImmediately(print);