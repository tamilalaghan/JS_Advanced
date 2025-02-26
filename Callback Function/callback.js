function square (num) {
    return num*num;
};

// Original List
someNumList = [2,3,5,7,11,13]
console.log(`Original List ${someNumList}`);

// Updated List
someNumList = someNumList.map(square);
console.log(`Updated List ${someNumList}`)

// Compute sum
sum = 0;
someNumList.forEach((num)=>{
    sum +=num;
})
console.log(`The sum of the entries is ${sum}`);
