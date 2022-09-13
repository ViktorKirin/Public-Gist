let curs = document.getElementById('curs');
let mount = document.getElementById('mount');
let button = document.querySelector('button');
let out = document.querySelector('.summ');


button.onclick = () => {
    
    if (mount.value <= 0 || curs.value <= 0) {
        out.innerHTML = `we can't do anything today`;
        } else {
    let summ = mount.value / curs.value;
    out.innerHTML = `You can buy ${summ.toFixed(7)} BTC` ;
    }
}


