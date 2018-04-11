export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "CAD"
  });
}


export function Random(){
  return
    while(arr.length < 8){
      var randomnumber = Math.floor(Math.random()*100) + 1;
      if(arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
  }
}
