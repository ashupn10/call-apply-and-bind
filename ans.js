Ans 1::

function add(x,y,z){

  return x,y,z;

}

console.log(add.call(this.add,3,4,5));



Ans 2::





function add(x,y,z){

  return x,y,z;

}

console.log(add.apply(this.add,[3,4,5]));



Ans 3::



function add(x,y,z){

  return x,y,z;

}

let ans = add.bind(this.add);

console.log(ans(3,4,5));



Ans 4::



let Student={

  age:20

}



function printAge(){

  console.log(Student.age);

}

let bound = printAge.bind();

bound();



let obj={

  num:5

}



function addmore(a,b,c){

  return this.num+a+b+c;

}



console.log(addmore.call(obj,3,4,5));

console.log(addmore.apply(obj,[3,4,5]));

let bound = addmore.bind(obj);

console.log(bound(5,6,7))
