<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
               <h4>Add Student</h4> 
            </div>
            <div class="card-member_number">
                <div class="mb-3">
                    <form>
                        <div>
                            <label for="first_name">First Name:</label>
                            <input type="text" id="first_name" class="form-control" v-model="formData.first_name" />
                        </div>
                        <div>
                            <label for="last_name">Last Name:</label>
                            <input id="last_name" class="form-control" v-model="formData.last_name">
                        </div>
                        <div>
                            <label for="id_number">ID Number:</label>
                            <input id="id_number" class="form-control" v-model="formData.id_number">
                        </div>
                        <div>
                            <label for="member_number">Membership Number:</label>
                            <input id="member_number" class="form-control" v-model="formData.member_number">
                        </div>

                
                        <button type="button" @click="submitForm()">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'CreatView',
    
    data() {
        return {
            formData: {
                first_name: '',
                last_name: '',
                id_number: '',
                member_number: '',
            },
        };
    },
    methods: {
        submitForm() {
            axios.post('http://127.0.0.1:8000/api/member ', this.formData)
            .then(response => {
                console.log(response.data);
                
                // first_name = this.respomse.data.first_name 
                // last_name = this.formData.last_name 
                // id_number = this.formData.id_number 
                // member_number = this.formData.member_number                 
            });
            this.$router.push('/');
        }
    }

}  
</script>

    
