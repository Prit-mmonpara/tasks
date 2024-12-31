// Majority Element
// Given an array of size n, find the majority element. The majority element is the element that appears more than n/2 times.

let arr = [2, 2, 1, 1, 1, 2, 1];

let temp = new Map();

let maxi = 0;
for (let i = 0; i < arr.length; i++) {
    if(temp.has(arr[i]))
    {
        temp.set(arr[i], temp.get(arr[i]) + 1);
    }
    else
        temp.set(arr[i], 1);
}

let ans = -1;
for(let [key, value] of temp)
{
    if(value > maxi)
    {
        maxi = value;
        ans = key;
    }
}

console.log(ans);

function tempFunc()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(42);
        }, 1000);
    });
}

tempFunc().then(data => console.log(data)).catch(error => console.log(error)); // Outputs: 42

new Promise(resolve => {
    setTimeout(() => {
      console.log('First step');
      resolve();
    }, 1000);
  })
  .then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Second step');
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    setTimeout(() => console.log('Third step'), 1000);
  });




  //i have done this

  async function fun(data2)
  {
    let result = [];
    
    await Promise.all([
        data["orders"].forEach((item)=>{
            data2.forEach((item2) => {
                if(item2["orderid"] == item["orderid"])
                {
                    item["status"] = item2["newStatus"];
                    let tempObj = {};
                    tempObj["orderid"] = item["orderid"];
                    tempObj["status"] = item["status"]; 
                    result.push(tempObj);
                }
            })
        })
    ])
  
  
    return result;
  }

const data = [{"orderid" : 101, "newStatus" : "Delivered"}, {"orderid" : 102, "newStatus" : "Pending"}];
fun(data).then((result) => console.log(result)).catch((error) => console.log(error));