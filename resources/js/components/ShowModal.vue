<template>
    <div>
        <div class="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="showModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="showModalLabel">View </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                            <div class="form-group">
                                <label for="name">Name</label>

                                <input type="text" class="form-control" id="name" name="name" aria-describedby="emailHelp" v-model="list.name" disabled>

                            </div>
                            <div class="form-group">
                                <label for="email">Email </label>

                                <input type="text" class="form-control" id="name" name="name" aria-describedby="emailHelp" v-model="list.email" disabled>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone </label>

                                <input type="text" class="form-control" id="name" name="name" aria-describedby="emailHelp" v-model="list.phone" disabled>
                            </div>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShowModal",
        data(){
            return{
                list:{}
            }
        }

    }
</script>

<style scoped>

</style>