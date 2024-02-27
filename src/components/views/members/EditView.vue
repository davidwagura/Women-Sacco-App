<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
               <h4>Edit member</h4> 
            </div>
            <div class="card">
                <div class="mb-3">
                    <form>
                        <div>
                            <label for="first_name">First Name:</label>
                            <input type="text" id="first_name" class="form-control" v-model="formData.first_name" />
                        </div>
                        <div>
                            <label for="last_ name">Last Name:</label>
                            <input id="last_name" class="form-control" v-model="formData.last_name">
                        </div>
                        <div>
                            <label for="id_number">ID Number:</label>
                            <input id="id_number" class="form-control" v-model="formData.id_number">
                        </div>
                        <div>
                            <label for="member_number">Member Number:</label>
                            <input id="member-number" class="form-control" v-model="formData.member_number">
                        </div>
                        <div>
                            <label for="amount">Amount:</label>
                            <input id="amount" class="form-control" v-model="formData.amount">
                        </div>

  
                
                        <button type="button" @click="updateForm()">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
  import axios from 'axios';
  export default {
    name: 'EditItem',
  
    data() {
        return {
            formData: {
                first_name: '',
                last_name: '',
                id_number: '',
                member_number: '',
                amount: ''
            },
        };
    },
    created() {
        const id = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/member/${id}`)
            .then(response => {
        // console.log('response');
                let res = response.data;
                this.formData.first_name = res.first_name;
                this.formData.last_name = res.last_name;
                this.formData.id_number = res.id_number;
                this.formData.member_number = res.member_number;
                this.formData.amount = res.amount;
            });
        },
        methods: {
            updateForm() {
                const id = this.$route.params.id;
                axios.put(`http://127.0.0.1:8000/api/member/${id}`, this.formData)
                .then(response => {
                    
                    this.formData.first_name = response.data.first_name;
                    this.formData.last_name = response.data.last_name;
                    this.formData.id_number = response.data.id_number;
                    this.formData.member_number = response.data.member_number;
                    this.formData.amount = response.data.amount;
                    console.log(response.data)
                });
                this.$router.push('/');
            }
        
        },
    };
  
</script>
  
    
  