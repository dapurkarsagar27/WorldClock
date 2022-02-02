setInterval(() => {
    a = new Date;
    time1 = ('0'+ a.getHours()).slice(-2) +':'+ ('0'+ a.getMinutes()).slice(-2) +':'+ ('0'+ a.getSeconds()).slice(-2);
    document.getElementById('span1').innerHTML = time1 + " GMT";
    time2 = a.toLocaleTimeString('en-US' , {hour: 'numeric' , minute: 'numeric' , hour12: true});
    document.getElementById('span2').innerHTML = time2 + " Eastern";
    date3 = a.toLocaleDateString(undefined , {weekday: 'long' , month: 'long' , day: 'numeric' , year: 'numeric'});
    document.getElementById('span3').innerHTML = date3;
}, 1000);


function blackversion(){
    let zz = document.getElementsByClassName('main');
    zz[0].style.background = "rgb(10, 10, 10)";
    zz[0].style.color = "rgb(221, 221, 221)";

    let zx = document.getElementsByClassName('header');
    zx[0].style.background = "rgb(10, 10, 10)";
    zx[0].style.color = "white";

    let xs = document.getElementsByClassName('logo');
    xs[0].style.color = "white";

    let zc = document.getElementsByClassName('button');
    zc[0].style.background = "rgb(10, 10, 10)";
    
    let zv = document.getElementsByClassName('black');
    zv[0].style.background = "rgb(70, 67, 67)";
    zv[0].style.color = "white";

    let zb = document.getElementsByClassName('blue');
    zb[0].style.background = "rgb(70, 67, 67)";
    zb[0].style.color = "white";

    let zk = document.getElementsByClassName('pink');
    zk[0].style.background = "rgb(70, 67, 67)";
    zk[0].style.color = "white";

    let zn = document.getElementById('span3');
    zn.style.background = "rgb(70, 67, 67)";

    let zm = document.getElementById('box2');
    zm.style.background = "rgb(70, 67, 67)";
    zm.style.color = "white";
}

function blueversion(){
    let xz = document.getElementsByClassName('main');
    xz[0].style.background = "rgb(25, 88, 182)";
    xz[0].style.color = "rgb(216, 230, 250)";

    let xx = document.getElementsByClassName('header');
    xx[0].style.background = "rgb(25, 88, 182)";
    xx[0].style.color = "white";

    let xs = document.getElementsByClassName('logo');
    xs[0].style.color = "rgb(218, 230, 245)";

    let xc = document.getElementsByClassName('button');
    xc[0].style.background = "rgb(25, 88, 182)";

    let xv = document.getElementsByClassName('black');
    xv[0].style.background = "rgb(6, 51, 114)";
    xv[0].style.color = "rgb(210, 222, 238)";

    let xb = document.getElementsByClassName('blue');
    xb[0].style.background = "rgb(6, 51, 114)";
    xb[0].style.color = "rgb(210, 222, 238)";

    let xn = document.getElementsByClassName('pink');
    xn[0].style.background = "rgb(6, 51, 114)";
    xn[0].style.color = "rgb(210, 222, 238)";

    let xm = document.getElementById('span3');
    xm.style.background = "rgb(6, 51, 114)";

    let xa = document.getElementById('box2');
    xa.style.background = "rgb(6, 51, 114)";
    xa.style.color = "rgb(210, 222, 238)";
}


function resetscreen(){
    let cz = document.getElementsByClassName('main');
    cz[0].style.background = "blanchedalmond";
    cz[0].style.color = "rgb(70, 16, 16)";

    let cx = document.getElementsByClassName('header');
    cx[0].style.background = "blanchedalmond";
    cx[0].style.color = "black";

    let cg = document.getElementsByClassName('logo');
    cg[0].style.color = "rgb(70, 16, 16)";

    let cc = document.getElementsByClassName('button');
    cc[0].style.background = "blanchedalmond";

    let cb = document.getElementsByClassName('black');
    cb[0].style.background = "rgb(212, 119, 91)";
    cb[0].style.color = "rgb(70, 16, 16)";

    let cn = document.getElementsByClassName('blue');
    cn[0].style.background = "rgb(212, 119, 91)";
    cn[0].style.color = "rgb(70, 16, 16)";

    let cm = document.getElementsByClassName('pink');
    cm[0].style.background = "rgb(212, 119, 91)";
    cm[0].style.color = "rgb(70, 16, 16)";

    let ca = document.getElementById('span3');
    ca.style.background = "rgb(212, 119, 91)";

    let cs = document.getElementById('box2');
    cs.style.background = "rgb(212, 119, 91)";
    cs.style.color = "rgb(70, 16, 16)";
}










// b = new Date
// c = b.toLocaleDateString(undefined , {weekday:'long',day:'numeric',month:'long',year:'numeric'});
// console.log(c)

// var time = new Date();
// console.log(
//   time.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'})
// );  




// let a;
// let time2;
// let option = {weekday:'long' , month:'long' , day:'numeric' , year:'numeric'}
// var t2
// setInterval(() => {
//     a = new Date();
//     // time2 = ('0'+a.getHours()).slice(-2) +":"+ ('0'+a.getMinutes()).slice(-2) +":"+ ('0'+a.getSeconds()).slice(-2);
//     t2 = a.toLocaleTimeString();
//     date1 = a.toLocaleDateString(undefined , option);
//     document.getElementById('time').innerHTML = t2 +'<br>On '+ date1;
// }, 1000);


// var b = new Date;
// // var date1 = b.getDate() +'/'+ b.getMonth() +'/'+ b.getUTCFullYear()
// var date2 = b.toLocaleDateString()
// var t = b.toLocaleTimeString();
// console.log(t)
// console.log(date2)

// var dd = {weekday : 'long' , month : 'long' , year : 'numeric' , day : 'numeric'}
// var gg = b.toLocaleDateString(undefined , dd);
// console.log(gg)

// var fg = ('0'+b.getHours()).slice(-2) +':'+ ('0'+b.getMinutes()).slice(-2) +':'+ ('0'+b.getSeconds()).slice(-2);
// console.log(fg)