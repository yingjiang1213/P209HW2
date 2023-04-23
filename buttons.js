const origArray=[2,3,4];
num1=document.getElementById("output1");
num2=document.getElementById("output2");
num3=document.getElementById("output3");

function square()
{
  const squareArray= origArray.map(x => x**2);
  num1.value= squareArray[0];
  num2.value= squareArray[1];
  num3.value= squareArray[2];
}

document.addEventListener("DOMContentLoaded", (event) => {

num1.value=origArray[0];
num2.value=origArray[1];
num3.value=origArray[2];


document.getElementById("cube-button").addEventListener("click",function(){
    const cubeArray= origArray.map(x => x**3);
    num1.value= cubeArray[0];
    num2.value= cubeArray[1];
    num3.value= cubeArray[2];
})

document.getElementById("fourth-button").addEventListener("click",toTheFourth);


function toTheFourth(){
    const fourthArray= origArray.map(x => x**4);
    num1.value= fourthArray[0];
    num2.value= fourthArray[1];
    num3.value= fourthArray[2];
}
});

