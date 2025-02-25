
function shawarma (type,protein, ...toppings){
    console.log(`The Type Shawarma you chose is ${type}`);
    console.log(`The Protein option you chose is ${protein}`)
    var top_str = "";
    if (toppings.length == 0) {
        console.log(`You chose no toppings`);
        return;
    }
    for (i=0; i<toppings.length;i++)
    {
       if(i===0){
        top_str = toppings[i]
       }
       else if( i=== toppings.length-1 && toppings.length!== -1)
       {
        top_str += " and " +toppings[i]
       }
       else
       {
        top_str += ", "+ toppings[i]
       }

    }
    console.log(`The topping option you chose is ${top_str}`)

}

shawarma("Bowl","Falafal","lettuce","onions","garlic sauce","pickles")