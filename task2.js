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

let user_name = {
    "Mark": {

    },
    "John":{

    },
    "Luis": {

    },
    "Celvin": {

    },
    "Martin": {

    },
    "Prakash": {

    }
};

// For each user print name, department_name and allowed_cars

for(let key in obj)
{
    if(key == "user_list")
    {
        for(let key2 in obj[key])
        {
            let arr = {};
            let name = "";
            for(let key3 in obj[key][key2])
            {
                if(key3 != "user_name")
                {
                    arr[key3] = obj[key][key2][key3];
                }
                else{
                    name = obj[key][key2][key3];
                }
            }

            user_name[name] = arr;
        }
    }
}

let result = [];
for(let user in user_name)
{
    let arr2 = "";
    let arr = [];
    for(let key in obj['department_data']['permission_deparment_wise'])
    {
        if(obj['department_data']['permission_deparment_wise'][key][0]['department_code'].includes(user_name[user]['department_code']))
        {
            for(let key2 in obj['department_data']['department_master'])
                if(obj['department_data']['department_master'][key2]['department_code'] == user_name[user]['department_code'])
                    arr2 = obj['department_data']['department_master'][key2]['department_name'];

            for(let key in obj['car_list'])
                if((obj['car_list'][key]['allowed_user_level'].includes(user_name[user]['user_level'])) && 
            obj['car_list'][key]['is_request'] == user_name[user]['is_request'] && obj['car_list'][key]['is_request'])
                    arr.push(obj['car_list'][key]['name']);
        }
        else
        {
            for(let key2 in obj['department_data']['department_master'])
                if(obj['department_data']['department_master'][key2]['department_code'] == user_name[user]['department_code'])
                    arr2 = obj['department_data']['department_master'][key2]['department_name'];
            
            arr.push('Department Not allowed Cars');
        }
    }

    let temp = {};
    temp['Name'] = user;
    temp['DepartmentName'] = arr2;
    temp['AllowedCars'] = arr;

    result.push(temp);
}

console.log(result);