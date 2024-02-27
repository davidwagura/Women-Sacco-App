<template>
    <div class="card">
        <div class="card-header">
            <h4>
                Members
                <router-link to="/create" class="btn btn-primary float-end">
                    Add New Member
                </router-link>
            </h4>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>ID Number</th>
                        <th>Membership Number</th>
                        <th>Amount</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="member in members" :key="member">
                        <td>{{ member.id }}</td>
                        <td>{{ member.first_name }}</td>
                        <td>{{ member.last_name }}</td>
                        <td>{{ member.id_number }}</td>
                        <td>{{ member.member_number }}</td>
                        <th>{{ member.amount }}</th>
                        <td>
                          <router-link :to="'/edit/' + member.id">Edit</router-link>
                        </td>
                        <td>
                        <button @click.prevent="deleteItem(member.id)">Delete</button>
                      </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script>
    import axios from 'axios';
  
    export default {
        name: 'membersView',
  
        data() {
            return {
                members: []
            };
        },
    
        created() {
            this.listmembers()
        },
    
        methods: {
            listmembers() {
                axios.get('http://127.0.0.1:8000/api/member')
                .then(response => {
                    this.members = response.data;
                    console.log(this.members);
    
                });
            },
            deleteItem(id) {
                axios.delete(`http://127.0.0.1:8000/api/member/${id}`)
                .then( response => {
                    console.log(response);

                    this.listMembers();
                })
          
            }


        },
          
    }
</script>