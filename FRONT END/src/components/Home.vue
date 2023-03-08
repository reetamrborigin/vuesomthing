<template>
    <div id="main">
        <div id="home">
            <router-link to="/signup"><button>Add Student</button></router-link>
        </div>
        <table border="1" id="table">
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
            <td>Actions</td>
            <tr v-for="item in students" :key="item">
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.password }}</td>
                <td><router-link :to="'/update/' + item.id">update</router-link>
                    <button v-on:click="deletestu(item.id)">delete</button>
                </td>
            </tr>
        </table>
    </div>
</template> 

<script>
import axios from 'axios';
export default {
    name: "HomeE",
    data() {
        return {
            students: []
        }
    },
    methods: {
        async deletestu(id) {
            await axios.delete('http://localhost:3000/student/' + id)
            let result = await axios.get('http://localhost:3000/student')
            console.log(result);
            this.students = result.data

        }
    },
    async mounted() {
        let result = await axios.get('http://localhost:3000/student')
        console.log(result);
        this.students = result.data
    },
}
</script>

<style scoped>
#home {
    height: 30px;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: flex-start;
}

#home>a {
    margin: 5px;
}

#home>a:hover {
    background-color: #ccc;
}

#table {
    margin-left: 190px;
    margin-top: 10px;
}

#table>td {
    
    width: 400px;
    height: 40px;
    
}
</style>