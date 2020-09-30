var car = [];
function create_an_array() {
  for(var i = 0; i < 5; i++)
  car.push(prompt("Введите, пожалуйста, пять(5) марок машин, которые Вы знаете, чтобы добавить их в массив."));
}
console.log(car); 
 
function delete_an_array() {
  car.length = 0; 
} 

function check_an_array() {
  var check = prompt("Введите марку машины, чтобы проверить ее в массиве.");
   
  if (car.includes(check) ) {
    alert("Эта марка машины числится под индексом " + car.indexOf(check));
  } else {
    alert("Такой марки еще нет.")
    car.push(check);
    alert("Новая марка машины добавлена.")
  }
}
