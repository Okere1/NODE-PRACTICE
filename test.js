let a=setInterval(()=>{console.log('Promise')},1000)
setTimeout(() => {
    clearInterval(a);
    console.log('Stop')
    
}, 5000);