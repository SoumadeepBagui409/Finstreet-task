let timer = 60;

const id = setInterval(()=>{
    document.getElementById('timing').innerHTML = `${timer}`
    console.log(timer);
    timer--;
    if(timer===0)timer = 60;
}, 1000);

