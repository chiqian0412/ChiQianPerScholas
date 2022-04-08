let beauty = [
    {name: 'Eyeliner', number: 3},
    {name: 'Power', number: 5},
    {name: 'Lipstick', number: 8},
    {name: 'Eyeshadow', number: 10},
    {name: 'Blush', number:12}
]
let buyNum = [4,3,7,11,5];
let finalNum = [];
let finalName = [];

for (let i = 0; i < beauty.length; i++)
{
    let product = beauty[i];

    if (buyNum[i] >= product.number)
    {
        console.log(product.name + " is only " + product.number);
        finalNum[i] = product.number;
        finalName[i] = product.name;
    }
    else
    {
        console.log(product.name + " is add to your bag.");
        finalNum[i] = buyNum[i];
        finalName[i] = product.name;
    }
}

console.log("Your shoppingBag:");
for(let x = 0; x < finalNum.length; x++)
{
    console.log(finalName[x] + ": " + finalNum[x]);
}