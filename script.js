
// http://github.hubspot.com/odometer/



////////////////////////////////////////////////////////
var cen10 = 0;
var dec10 = 0;
var uni10 = 0;

//odometer102.innerHTML = cen10;
//odometer101.innerHTML = dec10;
//odometer100.innerHTML = uni10;


function add10() {
    let base=10;
    let q=0;

    uni10++;
    q = Math.floor(uni10/base);
    uni10=uni10 % base;
    dec10=dec10+q;

    q = Math.floor(dec10/base);
    dec10=dec10 % base;
    cen10=(cen10+q) % base;

    odometer102.innerHTML = cen10;
    odometer101.innerHTML = dec10;
    odometer100.innerHTML = uni10;
  }


////////////////////////////////////////////////////////7
  var mil2 = 0;
  var cen2 = 0;
  var dec2 = 0;
  var uni2 = 0;
  //odometer22.innerHTML = mil2;
  //odometer22.innerHTML = cen2;
  //odometer21.innerHTML = dec2;
  //odometer20.innerHTML = uni2;
  
  function add2() {
    let base=2;
    let q=0;

    uni2++;
    q = Math.floor(uni2/base);
    dec2=dec2+q;
    uni2=uni2 % base;
   
    q = Math.floor(dec2/base);
    cen2=cen2+q
    dec2=dec2 % base;
    
    q = Math.floor(cen2/base);
    mil2=mil2+q;
    cen2=cen2 % base;

    mil2=(mil2) % base;

    odometer23.innerHTML = mil2;
    odometer22.innerHTML = cen2;
    odometer21.innerHTML = dec2;
    odometer20.innerHTML = uni2;
  }


////////////////////////////////////////////////////////7
var cen3 = 0;
var dec3 = 0;
var uni3 = 0;
//odometer32.innerHTML = cen3;
//odometer31.innerHTML = dec3;
//odometer30.innerHTML = uni3;

function add3() {
  let base=3;
  let q=0;

  uni3++;
  q = Math.floor(uni3/base);
  uni3=uni3 % base;
  dec3=dec3+q;

  q = Math.floor(dec3/base);
  dec3=dec3 % base;
  cen3=(cen3+q) % base;

  odometer32.innerHTML = cen3;
  odometer31.innerHTML = dec3;
  odometer30.innerHTML = uni3;
}






////////////////////////////////////////////////////////7
var cen8 = 0;
var dec8 = 0;
var uni8 = 0;
//odometer82.innerHTML = cen8;
//odometer81.innerHTML = dec8;
//odometer80.innerHTML = uni8;

function add8() {
  let base=8;
  let q=0;

  uni8++;
  q = Math.floor(uni8/base);
  uni8=uni8 % base;
  dec8=dec8+q;

  q = Math.floor(dec8/base);
  dec2=dec8 % base;
  cen2=(cen8+q) % base;

  odometer82.innerHTML = cen8;
  odometer81.innerHTML = dec8;
  odometer80.innerHTML = uni8;
}

////////////////////////////////////////////////////////
  function addAll() {
    add10();
    add2();
    add3();
    add8();
  }

  function clearAll() {
    cen10 = 0;
    dec10 = 0;
    uni10 = 0;
    odometer102.innerHTML = cen10;
    odometer101.innerHTML = dec10;
    odometer100.innerHTML = uni10;

    mil2 = 0;
    cen2 = 0;
    dec2 = 0;
    uni2 = 0;
    odometer22.innerHTML = mil2;
    odometer22.innerHTML = cen2;
    odometer21.innerHTML = dec2;
    odometer20.innerHTML = uni2;

    cen3 = 0;
    dec3 = 0;
    uni3 = 0;
    odometer32.innerHTML = cen3;
    odometer31.innerHTML = dec3;
    odometer30.innerHTML = uni3;


    cen8 = 0;
    dec8 = 0;
    uni8 = 0;
    odometer82.innerHTML = cen8;
    odometer81.innerHTML = dec8;
    odometer80.innerHTML = uni8;

  }