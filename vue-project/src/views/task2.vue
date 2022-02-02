<template>
    <div>
        <h1>Table</h1>
    <table>
    <tr>
        <th scope="col">First Name</th>        
        <th scope="col">Middle Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Gender</th>
        <th scope="col">Date</th>
        <th scope="col">Number</th>
        <th scope="col">Email</th>
        <th scope="col">Address</th>
        <th scope="col">State</th>
        <th scope="col">City</th>
        <th scope="col">Race</th>
        <th scope="col">ECity</th>
    </tr>
    <tr>
        <td scope=“row”>{{this.first_name}}</td> 
        <td>{{this.middle_name}}</td>
        <td>{{this.last_name}}</td>
        <td>{{this.gender}}</td>
        <td>{{this.date}}</td>
        <td>{{this.address}}</td>
        <td>{{this.number}}</td>
        <td>{{this.email}}</td>
        <td>{{this.city}}</td>
        <td>{{this.state}}</td>
        <td>{{this.race}}</td>
        <td>{{this.ecity}}</td>
    </tr>
    </table>
    </div>
</template>