<template>
  <div>
    <h1>Patient Information 1</h1>
    <label for="fname">First Name:</label> 
    <input type="text" v-model="firstname" placeholder="Enter First Name" />
    <label for="mname">Midddle Name</label> 
    <input type="text" v-model="middlename" placeholder="Midddle Name" />  
    <label for="lname">Last Name</label>
    <input type="text" v-model="lastname" placeholder="Last Name" />  
    <label for="gender">Gender</label>
    <select v-model="gender" name="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
    </select>
    
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
      {{ this.data }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstname: "",
      middlename: "",
      lastname:"",
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
      this.data = {firstname:this.firstname,middlename:this.middlename,lastname:this.lastname,gender:this.gender,date:this.date,
      number:this.number,email:this.email,address:this.address,state:this.state,city:this.city,
      code:this.code,race:this.race,ecity:this.ecity,facility:this.facility,order:this.order}
    },
  },
};
</script>