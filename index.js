const { program } = require('commander');


program.version('0.0.1');

program
.option('-i, --input [file]')

program
.option('-o, --output [file]')

program
.option('-s, --shift [number] [-number]')

program
.option('-a, --action [type]')

program.parse(process.argv)

const options = program.opts();
const input = options.input
const output = options.output
const shift = (options.shift)
const action = options.action
 //console.log(`options.shift ---- ${options.shift}`);

function validator(shift, action) {
    if(shift !== true) {
        shift = Number(options.shift)
    } else shift = 0;
if (!shift ) {
    shift = 0;
    console.error('Error: shift params is missed')
} else {
    shift = Number(options.shift)
}
if (typeof Number(shift) !== "number" || Math.floor(shift) !== shift ) {
    
    console.error('Error: shift params must be an integer value')
}
//
if (!action || (action !== 'encode' && action !== 'decode')) {
    
    console.error(`Error: action params is missed or incorrect`)
}
console.log(`shift == ${shift}//////action == ${action}`)
}
validator(shift, action)


//TO DO: 1. сделать 4 опции/ функцию возвращающую их (подразумеваем, что аргументы есть)
// 2. проверка на наличие аргументов(опций) у process(если можно) (обязательны шифт и action - если их нет то дружественное сообщениеж
//                                инпут и отпут - если нет, то использовать process stdin stdout)
// 3.создать функции-потоки, принимающие инпут и отпут
// 3.1 создать функцию-шифратор
// 3.2 п=создаь трансформ поток, использующую функцию-шифратор