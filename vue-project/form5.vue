<template>
  <div>
    <h1>Patient Information 5</h1>
    <label for="fname">First Name:</label> 
    <input type="text" v-model="first_name" placeholder="Enter First Name" />
    <label for="mname">Midddle Name</label> 
    <input type="text" v-model="middle_name" placeholder="Midddle Name" />  
    <label for="lname">Last Name</label>
    <input type="text" v-model="last_name" placeholder="Last Name" />  
    <label for="gender">Gender</label>
    <input type="radio" v-model="gender" name="gender" value="Male">
    <label for="male">Male</label>
    <input type="radio" v-model="gender" name="gender" value="Female">
    <label for="female">Female</label>
    <input type="radio" v-model="other" name="gender" value="Other">
    <label for="other">Other</label>
    
     <br>
     <label for="dob">Date Of Birth</label>
    <input type="date" v-model="date" placeholder="date" />
    <label for="mnumber">Mobile Number</label>
    <input type="tel" v-model="number" placeholder="enter number" />
    <label for="eaddress">Email Address</label>
    <input type="email" v-model="email" placeholder="enter email" />
    <br>
    <label for="address">Address</label>
    <textarea v-model="address" placeholder="enter address"></textarea>
    <label for="state">State</label>
    <select v-model="state" name="state">
    <option value="andhrapradesh">Andhra Pradesh</option>
    <option value="telangana">Telangana</option>
    <option value="other">Other</option>
     </select>
    <label for="city">City</label>
    <select v-model="city" name="city">
    <option value="vizag">Vizag</option>
    <option value="hyderabad">Hyderabad</option>
    <option value="other">Other</option>
    </select>
    <label for="zcode">Zip Code</label>
    <input type="tel" v-model="code" placeholder="enter zipcode" />
    <br>
    <label for="race">Race</label>
    <select v-model="race" name="race">
    <option value="race1">Race1</option>
    <option value="race2">Race2</option>
    <option value="other">Other</option>
    </select>
    <label for="ecity">Ethnicity</label>
    <select v-model="ecity" name="ecity">
    <option value="vizag">Vizag</option>
    <option value="hyderabad">Hyderabad</option>
    <option value="other">Other</option>
    </select>
    <br>
    <label for="ofacility">Ordering Facility</label>
    <textarea v-model="facility" placeholder="enter address"></textarea>
    <label for="oaddress">Ordering Facility Address</label>
    <textarea v-model="order" placeholder="enter address"></textarea>
    <br>
     
    <button @click="showMessage">Submit</button>
    <div v-if="isSubmit">
      {{ this.first_name}}
      {{this.middle_name }}
      {{this.last_name}}
      {{this.gender}}
      {{this.date}}
      {{this.number}}
      {{this.email}}
      {{this.address}}
      {{this.state}}
      {{this.city}}
      {{this.code}}
      {{this.race}}
      {{this.ecity}}
      {{this.facility}}
      {{this.order}}
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
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      first_name: "",
      middle_name: "",
      last_name:"",
      gender:"",
      date:"",
      number:"",
      email:"",
      address:"",
      state:"",
      city:"",
      code:"",
      race:"",
      ecity:"",
      facility:"",
      order:"",
      data: {},
      isSubmit: false,
    };
  },
  methods: {
    showMessage() {
      this.isSubmit = true;
      this.data = {first_name:this.first_name,middle_name:this.middle_name,last_name:this.last_name,gender:this.gender,date:this.date,
      number:this.number,email:this.email,address:this.address,state:this.state,city:this.city,
      code:this.code,race:this.race,ecity:this.ecity,facility:this.facility,order:this.order}
    },
  },
};
</script>