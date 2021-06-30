function createCheckDigit(membershipId: string): number {
  let sum = membershipId.split('').reduce((x, y) => +x + +y, 0);
    
  while(sum.toString().length > 1){
      return createCheckDigit(sum.toString())
  }
    return sum;
}

console.log(createCheckDigit("55555"));


/*
function createCheckDigit(membershipId: string): number {
  let sum = membershipId.split('').reduce((x,y) => +x + +y, 0);
    
  while(sum.toString().length > 1){
      sum = sum.toString().split('').reduce((x,y) => +x + +y, 0);
  }
    
  return sum;
}

console.log(createCheckDigit("55555"));
*/