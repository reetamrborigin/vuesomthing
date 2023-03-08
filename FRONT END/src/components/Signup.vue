<template >
    <h3>Signup Page</h3>
    <div class="Register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="text" v-model="password" placeholder="Enter Password">
        <button v-on:click="signup">Click to Add</button>
    </div>
</template>
<script>
import axios from 'axios';
// import Home from './Home.vue';
export default {
    name: "SignupP",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async signup() {
            console.log(this.name, this.email, this.password);
            let result = await axios.post("http://localhost:3000/student", {
                name: this.name,
                email: this.email,
                password: this.password
            })
            console.log(result);
            if (result.status == 201) {
                localStorage.setItem("Student-info", JSON.stringify(result.data))
                this.$router.push({name:'HomeE'})
            }
        }
    },
    // mounted(){
    //     let user = localStorage.getItem('Student-info')
    //     if(user){
    //         this.$router.push({name:'HomeE'})  
    //     }
    // },
}
</script>
<style>
.Register {
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
}

.Register>input {
    height: 50px;
    width: 200px;
}

.Register>button {
    height: 50px;
    width: 200px;
    color: cornflowerblue;
}
</style>