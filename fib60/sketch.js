
let a=[0, 1, 1, 2, 3, 5, 8, 3, 1, 4, 5, 9, 4, 3, 7, 0, 7, 7, 4, 1, 5, 6, 1, 7, 8, 5, 3, 8, 1, 9, 0, 9, 9, 8, 7, 5, 2, 7, 9, 6, 5, 1, 6, 7, 3, 0, 3, 3, 6, 9, 5, 4, 9, 3, 2, 5, 7, 2, 9, 1]
let b= [0, 1, 1, 2, 3, 5, 8, 3, 1, 4, 5, 9, 4, 3, 7, 0, 7, 7, 4, 1, 5, 6, 1, 7, 8, 5, 3, 8, 1, 9, 0, 9, 9, 8, 7, 5, 2, 7, 9, 6, 5, 1, 6, 7, 3, 0, 3, 3, 6, 9, 5, 4, 9, 3, 2, 5, 7, 2, 9, 1]
//let b = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3]

let c=[]
let sz = 10
let cols = b.length
let y = 0;

function setup() {
  createCanvas(600, 600);
  background(255);
  colorMode(HSB,10,200,200)
  plotRow();
  plotRow();
  for (let i =0; i<58;i++){
    fibnext();
    plotRow();
    //print(b)
  }
}

function mouseClicked(){
  randArray();
  y=0;
  plotRow();
  plotRow();
  for (let i =0; i<58;i++){
    fibnext();
    plotRow();
}

}

function randArray(){
  a=[];
  b=[];
  for (let i=0; i<60; i++){
    let rn = floor(random(10));
    print(rn);
    a.push(rn);
    b.push(rn);


  }
}

function fibnext(){
  for (let n = 0; n<cols;n++){
    newNum = (a[n]+b[n]);
    c.push(reduce(newNum))
  }
    a =b;
    b= c;
    c = [];
  
}



function plotRow() {
  for (let i =0; i<cols;i++){
    //print(b[i])
    fill((b[i]-1),200,200);  // -1 so 1 red is 1 0 in rgb
    rect(i*sz,y*sz,sz,sz);
  }
  y=y+1
}


function reduce(n){
  // easy reduce as 18 is the highest number
    if (n <=9){
        return n
    }
    else{
         let strnumber = n.toString()
         let strArr = strnumber.split('');
         return parseInt(strArr[0])+parseInt(strArr[1])


    }
  }