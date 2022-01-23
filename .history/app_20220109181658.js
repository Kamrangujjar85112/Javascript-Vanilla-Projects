const myNumber= 13;
document.querySelector('.form').addEventListener('submit', function(e){
    e.preventDefault();
    let value = document.getElementById('amount').value;
    value= pars(value);
    console.log('input value type');
    console.log(value);
    console.log('sum of two numbers');
    console.log(myNumber + value);


});