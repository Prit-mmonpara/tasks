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

// database.users.forEach((ele) => {
//     console.log(ele);
//     console.log(ele["id"]);
//     console.log(ele["name"]);
//     console.log(ele["email"]);
//     console.log(ele["age"])
//     console.log(ele["preferences"]["notifications"]);
//     console.log(ele["preferences"]["theme"])
//     ele["preferences"]["languages"].forEach((lang) => console.log(lang));
//     ele["orders"].forEach((order) =>
//     {
//         console.log(order.orderId);
//         console.log(order.product);
//         console.log(order.price)
//         console.log(order.status)
//     })
// })



let obj = {
    "car_list": [
        {
            "name": "tata harrier",
            "car_id": 1,
            "car_category": "regular",
            "allowed_user_level": [
                1,
                2,
                3,
                4,
                5
            ],
            "is_request": true
        },
        {
            "name": "toyota fortuner",
            "car_id": 2,
            "car_category": "executive",
            "allowed_user_level": [
                3,
                4,
                5
            ],
            "is_request": true
        },
        {
            "name": "mercedes maybach",
            "car_id": 3,
            "car_category": "premium",
            "allowed_user_level": [
                5
            ],
            "is_request": false
        },
        {
            "name": "jaguar f pace",
            "car_id": 4,
            "car_category": "premium",
            "allowed_user_level": [
                5
            ],
            "is_request": true
        },
        {
            "name": "ferrari f40",
            "car_id": 5,
            "car_category": "premium",
            "allowed_user_level": [
                5
            ],
            "is_request": false
        },
        {
            "name": "honda civic",
            "car_id": 6,
            "car_category": "executive",
            "allowed_user_level": [
                3,
                4,
                5
            ],
            "is_request": true
        }
    ],
    "department_data": {
        "department_master": [
            {
                "department_code": 1,
                "department_name": "Seinor Developers"
            },
            {
                "department_code": 2,
                "department_name": "Team Leads"
            },
            {
                "department_code": 3,
                "department_name": "Project Managers"
            },
            {
                "department_code": 4,
                "department_name": "Tech Leads"
            },
            {
                "department_code": 5,
                "department_name": "Co-Founder"
            }
        ],
        "permission_deparment_wise": {
            "allowed": [
                {
                    "department_code": [
                        1,
                        2,
                        3,
                        5
                    ]
                }
            ]
        }
    },
    "user_list": [
        {
            "department_code": 1,
            "user_name": "Mark",
            "user_level": 3,
            "is_request": true
        },
        {
            "department_code": 5,
            "user_name": "John",
            "user_level": 5,
            "is_request": false
        },
        {
            "department_code": 2,
            "user_name": "Luis",
            "user_level": 1,
            "is_request": true
        },
        {
            "department_code": 3,
            "user_name": "Celvin",
            "user_level": 3,
            "is_request": false
        },
        {
            "department_code": 4,
            "user_name": "Martin",
            "user_level": 4,
            "is_request": false
        },
        {
            "department_code": 2,
            "user_name": "Prakash",
            "user_level": 1,
            "is_request": true
        }
    ]
};

// obj["car_list"].forEach((ele) => {

//     console.log("Information about car_list: ");
//     console.log(ele["name"]);
//     console.log(ele["car_id"])
//     console.log(ele["car_category"])
//     ele["allowed_user_level"].forEach((ele) => console.log(ele))
//     console.log(ele["is_request"])
// })

// obj["department_data"]["department_master"].forEach((ele) =>{
//     console.log("Information about department_data");
//     console.log(ele["department_code"])
//     console.log(ele["department_code"])
// })

// obj["department_data"]["permission_deparment_wise"].allowed.forEach((ele) =>{
//   ele["department_code"].forEach((ele1) => {
//     console.log("Information about allowed department_code");
//     console.log(ele1);
//   })  
// })

// obj["user_list"].forEach((ele) => {
//     console.log("Information about user_list");
//     console.log(ele['department_code']);
//     console.log(ele["user_level"]);
//     console.log(ele["user_name"]);
//     console.log(ele["is_request"]);
// })



// function palindrome(str)
// {
//     //console.log(str);
//     for(let i = 0; i < str.length / 2; i++)
//         if(str[i] !== str[str.length - i - 1])
//             return false;

//     return true;
// }

// var str = "mommom1";
// // console.log(palindrome(str));

// const palindrome = (str) => {
//     for(let i = 0; i < str.length / 2; i++)
//         if(str[i] !== str[str.length - i - 1])
//             return false;

//     return true;
// }

// console.log(palindrome(str));



// const url = 'https://odds.p.rapidapi.com/v4/sports/upcoming/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'Sign Up for Key',
// 		'x-rapidapi-host': 'odds.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch("https://api.publicapis.org/entries);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }



// let obj2 = {};
// async function fetchData()
// {
//     try{
//         const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

//         if(!response.ok)
//             throw new Error('Failed to fetch data');

//         const data = await response.json();
//         //Object.assign(obj2, data);
//         //console.log(obj2);
//         //console.log(data);

//         console.log(data["time"]);
//         console.log(data["time"]["updated"]);
//         console.log(data["time"]["updatedISO"]);
//         console.log(data["time"]["updateduk"]);
//         console.log(data["disclaimer"]);
//         console.log(data["chartName"]);
//         console.log(data["bpi"]["USD"]);
//         console.log(data["bpi"]["USD"]["code"]);
//         console.log(data["bpi"]["USD"]["symbol"]);
//         console.log(data["bpi"]["USD"]["rate"]);
//         console.log(data["bpi"]["USD"]["description"]);
//         console.log(data["bpi"]["USD"]["rate_float"]);
//         console.log(data["bpi"]["GBP"]);
//         console.log(data["bpi"]["GBP"]["code"]);
//         console.log(data["bpi"]["GBP"]["symbol"]);
//         console.log(data["bpi"]["GBP"]["rate"]);
//         console.log(data["bpi"]["GBP"]["description"]);
//         console.log(data["bpi"]["GBP"]["rate_float"]);
//         console.log(data["bpi"]["EUR"]);
//         console.log(data["bpi"]["EUR"]["code"]);
//         console.log(data["bpi"]["EUR"]["symbol"]);
//         console.log(data["bpi"]["EUR"]["rate"]);
//         console.log(data["bpi"]["EUR"]["description"]);
//         console.log(data["bpi"]["EUR"]["rate_float"]);
        
//     }
//     catch(error)
//     {
//         console.error(error);
//     }
// }

// fetchData();

// console.log(obj2);


// async function fetchData2()
// {
//     try{
//         const response = await fetch("https://api.nationalize.io?name=nathaniel");

//         if(!response.ok)
//             throw new Error('Failed to fetch data');

//         const data = await response.json();

//         console.log(data);

//         console.log(data["count"]);
//         console.log(data["name"]);
//         data["country"].forEach(element => {
//             console.log(element["country_id"]);
//             console.log(element["probability"]);
//         });
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

// fetchData2();


// async function fetchData3()
// {
//     try{
//         const response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");

//         if(!response.ok)
//             throw new Error("Failed to fetch data");
    
//         const data = await response.json();

//         console.log(data);

//         let cnt = 0;
//         data["data"].forEach(element => {
//             console.log(`For Item number ${cnt}`);
//             cnt++;
//             console.log(element["ID Nation"]);
//             console.log(element["Nation"]);
//             console.log(element["ID Year"]);
//             console.log(element["Year"]);
//             console.log(element["Population"]);
//             console.log(element["Slug Nation"]);
//         });

//         data["source"].forEach((element) => {
//             console.log(element.measures);
//             console.log(element.annotations);
//             console.log(element.name);
//             element["substitutions"].forEach(element2 => console.log(element2));
//         })
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

// fetchData3();


// async function fetchData4()
// {
//     try{
//         const response = await fetch("https://randomuser.me/api/");

//         if(!response.ok)
//             throw new Error("Failed to fetch data");

//         const data = await response.json();

//         data["results"].forEach((element) => {
//             console.log(element["gender"]);
//             console.log(element["name"])
//             console.log(element["location"]);
//             console.log(element["email"]);
//             console.log(element["login"]);
//             console.log(element["dob"]);
//             console.log(element["registered"]);
//             console.log(element["phone"]);
//             console.log(element["cell"]);
//             console.log(element["id"]);
//             console.log(element["picture"]);
//             console.log(element["nat"]);
//         })

//         console.log(data["info"]["seed"]);
//         console.log(data["info"]["results"]);
//         console.log(data["info"]["page"]);
//         console.log(data["info"]["version"]);
//     }
//     catch(error)
//     {
//         console.error(error);
//     }
// }

// fetchData4();


// async function fetchData5()
// {
//     try{
//         const response = await fetch("http://universities.hipolabs.com/search?country=United+States");

//         if(!response.ok)
//             throw new Error("Failed to fetch data");

//         const data = await response.json();

//         // console.log(data);

//         data.forEach((ele) => {
//             console.log(ele["state-province"]);
//             console.log(ele["alpha-two-code"]);
//             console.log(ele["name"]);
//             console.log(ele["domains"]);
//             ele["web_pages"].forEach((link) => {
//                 console.log(link);
//             })
//             console.log(ele["country"]);
//         })
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

// fetchData5();


// async function fetchData6()
// {
//     try{
//         const response = await fetch("https://api.zippopotam.us/us/33162");

//         if(!response.ok)
//             throw new Error("Failed to fetch data");

//         const data = await response.json();

//         console.log(data["post code"]);
//         console.log(data["country"]);
//         console.log(data["country abbreviation"]);
//         data["places"].forEach((ele) => {
//             console.log(ele["place name"]);
//             console.log(ele["longitude"]);
//             console.log(ele["state"]);
//             console.log(ele["state abbreviation"]);
//             console.log(ele["latitude"]);
//         })
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

// fetchData6();


// async function fetchData7(){
//     try{
//         const response = await fetch('https://api.artic.edu/api/v1/artworks/search?q=cats');

//         if(!response.ok)
//             throw new Error('Failed to get the data');
        
//         const data = await response.json();

//         console.log(data["preference"]);
//         console.log(data["pagination"]["total"]);
//         console.log(data["pagination"]["limit"]);
//         console.log(data["pagination"]["offset"]);
//         console.log(data["pagination"]["total_pages"]);
//         console.log(data["pagination"]["current_page"]);
//         data["data"].forEach((ele) => {
//             console.log(ele["_score"]);
//             console.log(ele["thumbnail"]);
//             console.log(ele["api_model"]);
//             console.log(ele["is_boosted"]);
//             console.log(ele["api_link"]);
//             console.log(ele["id"]);
//             console.log(ele["title"]);
//             console.log(ele["timestamp"]);
//         });

//         console.log(data["info"]["license_text"]);
//         data["info"]["license_links"].forEach((ele) => {
//             console.log(ele);
//         });

//         console.log(data["info"]["version"]);

//         console.log(data["config"]["iiif_url"]);
//         console.log(data["config"]["website_url"]);
//     }
//     catch(error)
//     {
//         console.error(error);
//     }
// }

// fetchData7();


// api1 = "https://collectionapi.metmuseum.org/public/collection/v1/objects/100";
// api2 = "http://api.tvmaze.com/search/shows?q=golden girls";

async function fetchData8(){
    try{
        const response = await fetch("http://api.tvmaze.com/search/shows?q=golden girls");

        if(!response.ok)
            throw new Error("Failed to fetch data");
        
        const data = await response.json();

        return data;
    }
    catch(error)
    {
        console.log(error);
    }
}

// fetchData8().then((data) => {
//     console.log(data);
// });

const data = fetchData8();

// data.then((data2) => {
//     console.log(data2);
// });


async function PromiseAll()
{
    try{
       const [api1, api2] = await Promise.all([
            fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/100"),
            fetch("http://api.tvmaze.com/search/shows?q=golden girls")
       ]);

       const data1 = await api1.json();
       const data2 = await api2.json();

       console.log(data1);
       console.log(data2);
    }
    catch(error)
    {
        console.log(error);
    }
}

// console.log("This data is comed from PromiseAll method");
// PromiseAll();


async function PromiseAny()
{
    try{
        const api1 = await Promise.any([
             fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/100"),
             fetch("http://api.tvmaze.com/search/shows?q=golden girls")
        ]);
 
        const data1 = await api1.json();
 
        console.log(data1);
     }
     catch(error)
     {
         console.log(error);
     }
}

console.log("This data is comed from PromiseAny method");
// PromiseAny();


async function PromiseRace()
{
    try{
        const api1 = await Promise.race([
             fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/100"),
             fetch("http://api.tvmaze.com/search/shows?q=golden girls")
        ]);
 
        const data1 = await api1.json();
 
        console.log(data1);
     }
     catch(error)
     {
         console.log(error);
     }
}

console.log("This data is comed from PromiseRace method");
// PromiseRace();


async function createPost() {
    try {
      const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Random Post Created through the Post API',
          body: 'This is the content of the post.',
          userId: 100,
        }),
      });

      const newPost = await response.json();
      console.log('Post created:', newPost);
    } catch (error) {
      console.error('Error creating post:', error);
    }
}
  
//createPost();


const moment = require('moment');


async function fetchData9(url){
    const startTime = moment();
    try{
        const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

        if(!response.ok)
            throw new Error("Failed to fetch data");
        
        const data = await response.json();

        const endTime = moment();
        const timeTaken = endTime.diff(startTime, 'milliseconds');
        console.log(timeTaken);
        //console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

fetchData9("https://collectionapi.metmuseum.org/public/collection/v1/objects/100");
fetchData9("http://api.tvmaze.com/search/shows?q=golden girls");

