const express = require("express");
const app = express()
const PORT = 8000
const{ faker } = require('@faker-js/faker')

const createUser = () =>{
    return{
        personid:faker.datatype.uuid(),
        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        lastName:faker.name.lastName(),
        firstName:faker.name.firstName(),
    }
}

const createCompany = () =>{
    return{
        companyid:faker.datatype.uuid(),
        companyName:faker.company.name(),
        address:{
            street:faker.address.streetAddress(),
            city:faker.address.cityName(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
}

app.get('/api', (req,res) =>{
    res.json({message: 'Hello World!'})
})

app.get('/api/user/new', (req,res) =>{
    const user = createUser()
    res.json(user)
})

app.get('/api/company/new', (req,res) =>{
    const company = createCompany()
    res.json(company)
})

app.get('/api/user/company', (req,res) =>{
    const company = createCompany()
    const user = createUser()
    const combined = {
        user: user,
        company: company
    }
    res.json(combined)
})

app.listen(PORT, ()=>{
    console.log(`server is up and running ${PORT}`)
})