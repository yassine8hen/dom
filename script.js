var plus_btn = document.querySelectorAll(".plus");
var minus_btns = document.querySelectorAll(".minus");
var like_btns =document.querySelectorAll (".like")
var delete_btns =document.querySelectorAll (".delete")
var total_tr =document.querySelector ("#total")
for (let i = 0; i < like_btns.length; i++) {
    like_btns[i].addEventListener("click",changecolor);
}
for (let i = 0; i < minus_btns.length; i++) {
  minus_btns[i].addEventListener("click", decrement);
}
for (let i = 0; i < plus_btn.length; i++) {
  plus_btn[i].addEventListener("click", increment);
}
for (let i = 0; i < delete_btns.length; i++) {
    delete_btns [i].addEventListener("click", delete_row)
    
}
function delete_row(e) {
    var delete_btn = e.target
    var row = delete_btn.parentElement.parentElement.parentElement.parentElement
    row.remove()
}
function changecolor(e) {
  like_btns = e.target;
    if (like_btns.style.color=="red") {
            like_btns.style.color="#40423f"       
      }
      else {
        like_btns.style.color="red"
      }
    }


function increment(event) {
  var plus = event.target;
  var div_element = plus.parentElement;

  var para_element = div_element.querySelector("p");
  var para_value = Number(para_element.innerHTML);
  para_value++;
  // console.log(para_value)
  para_element.innerHTML = para_value;

  // change the product price
  var tr_element = div_element.parentElement.parentElement;
  var unitPrice_element = tr_element.querySelector(".unitPrice");
  var Price_element = tr_element.querySelector(".price");
  var unitPrice_value = Number(unitPrice_element.innerHTML);
  var Price_value = unitPrice_value * para_value;
  Price_element.innerHTML = Price_value;
//   total price
  var  table_element = tr_element.parentElement;
  var total_element = table_element.querySelector("#total")
   var total_value =Number (total_element.innerHTML);
    total_value = total_value + unitPrice_value
    total_element.innerHTML=total_value
}
function decrement(e) {
    var minus = e.target;
    var div_element = minus.parentElement;
    var para_element = div_element.querySelector("p");
    var para_value = Number(para_element.innerHTML);
    if (para_value > 0) {
        para_value--;
      }
    // console.log(para_value)
    para_element.innerHTML = para_value;
  
    // change the product price
    var tr_element = div_element.parentElement.parentElement;
    var unitPrice_element = tr_element.querySelector(".unitPrice");
    var Price_element = tr_element.querySelector(".price");
    var unitPrice_value = Number(unitPrice_element.innerHTML);
    var Price_value = unitPrice_value * para_value;
    Price_element.innerHTML = Price_value;
  
  var  table_element = tr_element.parentElement;
  var total_element = table_element.querySelector("#total")
   var total_value =Number (total_element.innerHTML);
    total_value = total_value - unitPrice_value
    total_element.innerHTML=total_value
}
