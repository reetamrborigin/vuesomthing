<template>
    <div class="Register">
        <input type="text" v-model="name" placeholder="Enter Name" >
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="text" v-model="password" placeholder="Enter Password">
        <button v-on:click="update">Click to Update</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "UpdateE",
    data() {
        return {
            student:{
                name: '',
                email: '',  
                password: ''
            }
        }
    },
    methods:{
        async update(){
            console.log(this.name, this.email, this.password);
            let result = await axios.put("http://localhost:3000/student/"+this.$route.params.id, {
                name: this.name,
                email: this.email,
                password: this.password
            })
            console.log(result);
            if (result.status == 200) {
                localStorage.setItem("Student-info", JSON.stringify(result.data))
                this.$router.push({name:'HomeE'})
            }
        }
    },
    async mounted() {
        const result = await axios.get("http://localhost:3000/student/" + this.$route.params.id)
        console.log(result.data);
        // console.log(this.$route.params.id) ;
        this.student = result.data
    }
}
</script>
<style lang="">
    
</style>