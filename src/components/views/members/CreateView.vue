<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
               <h4>Add New Member</h4> 
            </div>
                <div class="card-body">
                    <div v-if="successMessage" class="alert alert-success" role="alert">
                    {{ successMessage }}
                </div>

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
                        <div>
                            <label for="amount">Amount:</label>
                            <input id="amount" class="form-control" v-model="formData.amount">
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
                amount: '',
            },
            successMessage: ''
        };
    },
    
    methods: {
        submitForm() {
            axios.post('http://127.0.0.1:8000/api/member ', this.formData)
            .then(response => {
                console.log(response);
                this.successMessage = 'Member added successfully.';
                setTimeout(() => {
                this.successMessage = '';
                this.$router.push('/');
                }, 3000);                    
            })
            .catch(error => {
                console.error('Error adding member:', error);
                this.successMessage = 'Failed to add member.';
            });  
            // this.$router.push('/');
      
        }
    }
}


</script>

    
