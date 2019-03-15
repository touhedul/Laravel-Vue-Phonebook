<template>
    <div>
        <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModalLabel">Update </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="update">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" name="name"
                                       aria-describedby="emailHelp" v-model="updatelist.name">
                                <small v-if="errors.name" style="color: red">{{errors.name[0]}}</small>
                            </div>
                            <div class="form-group">
                                <label for="email">Email </label>
                                <input type="text" class="form-control" id="email" name="email"
                                       aria-describedby="emailHelp" v-model="updatelist.email">
                                <small v-if="errors.email" style="color: red">{{errors.email[0]}}</small>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone </label>
                                <input type="text" class="form-control" id="phone" name="phone"
                                       aria-describedby="emailHelp" v-model="updatelist.phone">
                                <small v-if="errors.phone" style="color: red">{{errors.phone[0]}}</small>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                            <button type="button" @click="cancelModal" class="btn btn-danger" data-dismiss="modal">Cancel
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
        name: "UpdateModal",
        data() {
            return {
                updatelist: {},
                errors: {}
            }
        },
        methods: {
            update() {
                axios.patch(`/phonebook/${this.updatelist.id}`, this.$data.updatelist).
                then((response) => {
                    $("#updateModal").modal('hide')
                }).
                catch((error) => this.errors = error.response.data.errors)


            },
            cancelModal(){
                this.errors = ''
            }

        }
    }
</script>

<style scoped>

</style>