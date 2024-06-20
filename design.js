const colorg = function(){
    let color = '#'
    const hex = '0123456789ABCDEF'
    for(let i=1;i<=6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let operator
const colorbegin = function(){
    operator = setInterval(give,1000)
    function give(){
        document.querySelector('body').style.backgroundColor=colorg()
    }
}
const colorend = function(){
    clearInterval(operator);
}
document.querySelector('#start').addEventListener('click',colorbegin)
document.querySelector('#stop').addEventListener('click',colorend)
