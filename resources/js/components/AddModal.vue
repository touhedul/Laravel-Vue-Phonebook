<template>
    <div>
        <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addModalLabel">Add </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="save">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" name="name" aria-describedby="emailHelp"  v-model="list.name" placeholder="Enter your name...">
                                <small v-if="errors.name" style="color: red">{{errors.name[0]}}</small>
                            </div>
                            <div class="form-group">
                                <label for="email">Email </label>
                                <input type="text" class="form-control" id="email" name="email" aria-describedby="emailHelp" v-model="list.email" placeholder="Enter your email...">
                                <small v-if="errors.email" style="color: red">{{errors.email[0]}}</small>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone </label>
                                <input type="text" class="form-control" id="phone" name="phone" aria-describedby="emailHelp" v-model="list.phone" placeholder="Enter your phone...">
                                <small v-if="errors.phone" style="color: red">{{errors.phone[0]}}</small>
                            </div>
                            <button type="submit" data-dismiss="" class="btn btn-primary">Save</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddModal",
        data(){
            return{
                list:{
                    name:'',
                    phone:'',
                    email:''
                },
                mod:'modal',
                errors:{},
            }
        },
        methods:{
            save(){

                axios.post('/phonebook',this.$data.list).
                then((response) => {
                    this.$parent.lists.push(response.data)
                    this.$parent.lists.sort(function (a,b) {
                        if(a.name>b.name){
                            return 1;
                        }else if(a.name<b.name){
                            return -1;
                        }
                    })
                    $("#addModal").modal('hide')//hide the modal
                    this.list=''//reset the modal field
                }).
                catch((error) => this.errors = error.response.data.errors)

            }
        }
    }
</script>

<style scoped>

</style>