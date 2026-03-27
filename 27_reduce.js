const myNums = [1,2,3,4,5]

const sum = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc}, currval: ${currval}`)
    return acc + currval
}, 0)

console.log(sum)

const shoppingcart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'python course',
        price: 999
    },
    {
        itemName: 'data science course',
        price: 1999
    }
]

const total = shoppingcart.reduce((acc,item) => acc+ item.price,0)
console.log(total)
