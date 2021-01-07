class Log {
  print(msg){
    console.log(msg);
  }
}
const log = new Log()

const dec = (target,property) => {
  const old = target.prototype.print;
  target.prototype[property] = msg => {
    console.log('执行print方法...');
    msg = `包装后:${msg}`
    old(msg)
  }
}
dec(Log,'print')

log.print('hello')