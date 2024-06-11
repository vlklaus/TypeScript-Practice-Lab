"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(mountainObjects) {
    var tallestObject = mountainObjects[0];
    mountainObjects.forEach(function (m) {
        if (m.height > tallestObject.height) {
            tallestObject = m;
        }
    });
    return tallestObject.name;
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
var products = [
    {
        name: "Shorts",
        price: 3.99
    },
    {
        name: "Sweatpants",
        price: 6.99
    },
    {
        name: "T-Shirt",
        price: 2.99
    },
    {
        name: "Button-Up Shirt",
        price: 5.99
    }
];
function calcAverageProductPrice(clothes) {
    var avgClothesPrice = 0;
    clothes.forEach(function (c) {
        avgClothesPrice += c.price;
    });
    return avgClothesPrice / clothes.length;
}
var avgProductPrice = calcAverageProductPrice(products);
console.log(avgProductPrice);
var Inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];
function calcInventoryValue(objects) {
    var sum = 0;
    objects.forEach(function (o) {
        sum += o.product.price * o.quantity;
    });
    return sum;
}
var inventoryValue = calcInventoryValue(Inventory);
console.log(inventoryValue);
