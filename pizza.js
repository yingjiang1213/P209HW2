var sizePrice=new Array();
sizePrice['small']=7;
sizePrice['medium']=10;
sizePrice['large']=14;

function getSizePrice(){
  var pizzaSizePrice=0;
  var form= document.forms['orderform'];
  var checkedSize=form.elements['size'];
  pizzaSizePrice+=sizePrice[checkedSize.value];
  return pizzaSizePrice;
}


var toppingPrice=new Array();
toppingPrice['noToppings']=0;
toppingPrice['oneTopping']=2;
toppingPrice['twoToppings']=3;

function getToppingPrice(){
    var pizzaToppingPrice=0;
    var form= document.forms['orderform'];
    var selectedTopping=form.elements['toppings'];
    pizzaToppingPrice+=toppingPrice[selectedTopping.value];
    return pizzaToppingPrice;
}


function getTotal(){
    var total= getSizePrice()+getToppingPrice();
    document.getElementById("total").innerHTML= "Total Price:$" + total;
}