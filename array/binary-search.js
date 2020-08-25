// Livro - Entendendo algoritmos
// Implementando Pesquisa Binária

let arr = [1,2,3,4,5,6];

let target = 5;

const findTarget = (arr, target) => {
  let i = 0;
  let higher = arr.length-1;
  
  while(i <= higher) {
    let middle = parseInt(i+higher/2);
    console.log('chute',middle)
    
    if(arr[middle] === target) {
      return middle;
    }
    
    if(arr[middle] > target){
      higher = middle + 1;
    } else {
      i = middle - 1;
    }
  }
}

findTarget(arr, target);
