const arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
function mumble(input) {
  let uniqString = "";
  const length = arr.length
  while (input!=0) {
    const randomIndex = Math.floor(Math.random()*length)
    uniqString = uniqString+arr[randomIndex];
    input = input - 1;
  }
  return uniqString
}
module.exports = {
  mumble
}