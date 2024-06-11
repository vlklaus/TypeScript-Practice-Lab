export {}

// TALLEST MOUNTAIN
interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain [] = [
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

function findNameOfTallestMountain(mountainObjects: Mountain []): string {
    let tallestObject: Mountain = mountainObjects[0];
    mountainObjects.forEach((m: Mountain) => {
        if (m.height > tallestObject.height) {tallestObject = m;}
    });
    return tallestObject.name;
}

let tallestMountain: string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

// PRODUCTS
interface Product {
    name: string;
    price: number;
}

let products: Product [] = [
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
        price:  5.99
    }
];

function calcAverageProductPrice(clothes: Product []): number {
    let avgClothesPrice: number = 0;
    clothes.forEach((c: Product) => {
        avgClothesPrice += c.price;
    });
    return avgClothesPrice / clothes.length;
}

let avgProductPrice: number = calcAverageProductPrice(products);
console.log(avgProductPrice);

// INVENTORY
interface InventoryItem {
    product: Product;
    quantity: number;
}

let Inventory: InventoryItem [] = [
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

function calcInventoryValue(objects: InventoryItem []): number {
    let sum: number = 0;
    objects.forEach((o: InventoryItem) => {
        sum += o.product.price * o.quantity;
    });
    return sum;
}

let inventoryValue: number = calcInventoryValue(Inventory);
console.log(inventoryValue);