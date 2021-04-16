import React from 'react'

const credentials = [
    {
        email: "rupam@gmail.com",
        password: "123"
    },
    {
        email: "rahul@gmail.com",
        password: "456"
    },
    {
        email: "aman@gmail.com",
        password: "789"
    },
    {
        email: "karan@gmail.com",
        password: "1234"
    },
]

const findUser = (email) => {
    return credentials.find(user => user.email === email)
}

export default function mockServer(email, password) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
                const user = findUser(email)
                if(user){
                    if(user.password === password){
                        resolve({success: true, status: 200})
                    }
                    else {
                        reject({success: false, status: 401, message: "User password didn't match"})}
                }
                else {
                reject({success: false, status: 401, message: "User email doesn't exist"})
            }
        }, 3000)
    })
}
