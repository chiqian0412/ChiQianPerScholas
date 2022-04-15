
// let buyNum = [4,3,7,11,5];
// let finalNum = [];
// let finalName = [];

// for (let i = 0; i < makeup.length; i++)
// {
//     let product = makeup[i];

//     if (buyNum[i] >= product.number)
//     {
//         console.log(product.name + " is only " + product.number);
//         finalNum[i] = product.number;
//         finalName[i] = product.name;
//     }
//     else
//     {
//         console.log(product.name + " is add to your bag.");
//         finalNum[i] = buyNum[i];
//         finalName[i] = product.name;
//     }
// }

// console.log("Your shoppingBag:");
// for(let x = 0; x < finalNum.length; x++)
// {
//     console.log(finalName[x] + ": " + finalNum[x]);
// }
alert('Welcome!')
let makeup = [
    {name: 'Eyeliner', number: 3, price:29.99},
    {name: 'Power', number: 5, price:39.99},
    {name: 'Lipstick', number: 8, price:29.99},
    {name: 'Eyeshadow', number: 10, price:35},
    {name: 'Blush', number:12, price:25}
];
let 

const addToBag = (makeupName, itemIndex) {
    let grocerySection = Store[grocerySectionName];
    console.log(grocerySection);
    let storeItem = grocerySection[itemIndex];
    console.log(storeItem);

    if (storeItem !== undefined)
    {
        console.log("Found: " + storeItem.name + ", adding to cart");

        shoppingCart[shoppingCart.length] = storeItem;
        
        console.log(shoppingCart);
        
        cartCount.innerHTML = "Cart: " + shoppingCart.length + ", Last Added Item: " + storeItem.name;
    }
    else
    {
        console.log("Should not get to this point but just in case...hi how are you? =D")
    }

    updateCheckoutDisplay();
};