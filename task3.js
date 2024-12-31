let database = {
    "users": [
        {
            "id": 1,
            "name": "Alice",
            "email": "alice@example.com",
            "age": 25,
            "preferences": {
                "notifications": true,
                "theme": "dark",
                "languages": ["English", "Spanish"]
            },
            "orders": [
                { "orderId": 101, "product": "Laptop", "price": 1200, "status": "delivered" },
                { "orderId": 102, "product": "Mouse", "price": 50, "status": "pending" }
            ]
        },
        {
            "id": 2,
            "name": "Bob",
            "email": "bob@example.com",
            "age": 30,
            "preferences": {
                "notifications": false,
                "theme": "light",
                "languages": ["English", "German"]
            },
            "orders": [
                { "orderId": 103, "product": "Keyboard", "price": 100, "status": "shipped" },
                { "orderId": 104, "product": "Monitor", "price": 300, "status": "cancelled" }
            ]
        },
        {
            "id": 3,
            "name": "Charlie",
            "email": "charlie@example.com",
            "age": 22,
            "preferences": {
                "notifications": true,
                "theme": "dark",
                "languages": ["French", "English"]
            },
            "orders": [
                { "orderId": 105, "product": "Tablet", "price": 600, "status": "delivered" },
                { "orderId": 106, "product": "Phone", "price": 800, "status": "pending" }
            ]
        },
        {
            "id": 4,
            "name": "Diana",
            "email": "diana@example.com",
            "age": 28,
            "preferences": {
                "notifications": false,
                "theme": "light",
                "languages": ["Spanish", "German"]
            },
            "orders": [
                { "orderId": 107, "product": "Speaker", "price": 200, "status": "shipped" },
                { "orderId": 108, "product": "Laptop", "price": 1500, "status": "delivered" }
            ]
        },
        {
            "id": 5,
            "name": "Ethan",
            "email": "ethan@example.com",
            "age": 35,
            "preferences": {
                "notifications": true,
                "theme": "dark",
                "languages": ["English", "Italian"]
            },
            "orders": [
                { "orderId": 109, "product": "Camera", "price": 1200, "status": "cancelled" },
                { "orderId": 110, "product": "Drone", "price": 800, "status": "pending" }
            ]
        },
        {
            "id": 6,
            "name": "Fiona",
            "email": "fiona@example.com",
            "age": 27,
            "preferences": {
                "notifications": true,
                "theme": "light",
                "languages": ["English", "Chinese"]
            },
            "orders": [
                { "orderId": 111, "product": "Headphones", "price": 150, "status": "delivered" },
                { "orderId": 112, "product": "Smartwatch", "price": 250, "status": "shipped" }
            ]
        },
        {
            "id": 7,
            "name": "George",
            "email": "george@example.com",
            "age": 29,
            "preferences": {
                "notifications": false,
                "theme": "dark",
                "languages": ["Spanish", "French"]
            },
            "orders": [
                { "orderId": 113, "product": "Laptop", "price": 1200, "status": "shipped" },
                { "orderId": 114, "product": "Keyboard", "price": 100, "status": "delivered" }
            ]
        },
        {
            "id": 8,
            "name": "Hannah",
            "email": "hannah@example.com",
            "age": 32,
            "preferences": {
                "notifications": true,
                "theme": "light",
                "languages": ["English", "Japanese"]
            },
            "orders": [
                { "orderId": 115, "product": "Monitor", "price": 400, "status": "pending" },
                { "orderId": 116, "product": "Printer", "price": 300, "status": "cancelled" }
            ]
        },
        {
            "id": 9,
            "name": "Ian",
            "email": "ian@example.com",
            "age": 26,
            "preferences": {
                "notifications": false,
                "theme": "dark",
                "languages": ["English", "Korean"]
            },
            "orders": [
                { "orderId": 117, "product": "Desk", "price": 150, "status": "delivered" },
                { "orderId": 118, "product": "Chair", "price": 200, "status": "pending" }
            ]
        },
        {
            "id": 10,
            "name": "Julia",
            "email": "julia@example.com",
            "age": 24,
            "preferences": {
                "notifications": true,
                "theme": "light",
                "languages": ["Italian", "Spanish"]
            },
            "orders": [
                { "orderId": 119, "product": "Tablet", "price": 600, "status": "delivered" },
                { "orderId": 120, "product": "Phone", "price": 900, "status": "shipped" }
            ]
        }
    ]
};


//1)
// let arr = database["users"].filter((ele) => ele.orders[0].status == "pending" || ele.orders[1].status == "pending");

// console.log(arr);

//2)
// let uniqueItems = new Set();
// database["users"].forEach((ele) => {
//     uniqueItems.add(ele.preferences.languages[0]);
//     uniqueItems.add(ele.preferences.languages[1]);
// });

// console.log(uniqueItems);


//3)

// let result = [];
// database["users"].forEach((ele) => {
    
//     let obj = {};
//     obj.name = ele.name;
//     let sum = 0;
//     sum += ele.orders[0].price;
//     sum += ele.orders[1].price;
//     obj.totalSpent = sum;

//     result.push(obj);
// })

// console.log(result);

// 4)

// let arr = database["users"].filter((ele) => ele.orders[0].status == "pending" || ele.orders[1].status == "pending").map((ele) => ele.preferences.notifications = true);
// console.log(arr);

// database["users"].forEach((ele) => {
//     if (ele.orders.some(order => order.status === "pending")) {
//         ele.preferences.notifications = true;
//     }
// });

// console.log(database["users"].filter((ele) => ele.preferences.notifications));
// console.log(database.preferences.notifications);


//5)

// let result = {};
// database["users"].forEach((ele) => {
//     for(let x of ele.orders)
//     {
//         //console.log(ele.orders[x]);
//         if(result[x.product] == undefined)
//         {
//             result[x.product] = [];
//             result[x.product].push(x);
//         }
//         else    
//             result[x.product].push(x);
//     }
// })

// console.log(result);