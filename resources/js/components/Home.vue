<template>
    <div>
        <div class="row justify-content-center">
            <div class="card col-md-6 ">
                <div class="card-header">
                    Home
                    <i class="fa fa-spinner fa-spin pull-right" style="font-size:24px"></i>
                </div>
                <div class="card-body">
                    <h5 class="card-title"> Vue Js Phone Book</h5>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addModal">
                        Add
                    </button>
                    <br><br/>
                    <input  class="form-control" type="text" placeholder="Search" v-model="search"/>
                    <p class="card-text"></p>
                    <ul class="list-group">  <!--for searching temp is used rather than lists-->
                        <li class="list-group-item" v-for="item,key in temp">{{key+1}} - {{item.name}}
                            <a href="#"><i @click="del(key,item.id)" style="margin-left:30px "
                                           class="fa fa-trash pull-right"></i></a>
                            <a href="#"> <i @click="update(key)" data-toggle="modal" data-target="#updateModal"
                                            style="margin-left:30px " class="fa fa-edit pull-right"></i></a>
                            <a href="#" @click="show(key)"> <i data-toggle="modal" data-target="#showModal"
                                                               class="fa fa-eye pull-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Addmodal></Addmodal>
        <Showmodal></Showmodal>
        <Updatemodal></Updatemodal>
    </div>
</template>

<script>

    let Addmodal = require('./AddModal.vue').default;
    let Showmodal = require('./ShowModal.vue').default;
    let Updatemodal = require('./UpdateModal.vue').default;
    export default {
        name: "Home",
        components: {Addmodal, Showmodal, Updatemodal},
        data() {
            return {
                lists: {},
                search:'',
                temp:''//for searching
            }
        },
        watch:{
          search(){
              if(this.search.length>0){
                  this.temp = this.lists.filter((list)=>{
                      return list.name.toLowerCase().indexOf(this.search.toLowerCase())>-1
                  });
              }else{
                  this.temp = this.lists;
              }
          }
        },
        methods: {
            show(key) {
                this.$children[1].list = this.temp[key];
            },
            update(key) {
                this.$children[2].errors = '';
                this.$children[2].updatelist = this.temp[key];
            },
            del(key, id) {

                if (confirm("Are you sure?")) {
                    axios.delete(`/phonebook/${id}`).
                    then((response) => this.lists.splice(key,1)).
                    catch((error) => console.log(error))
                }


            }
        },
        mounted() {
            axios.post('/getdata').then((response) => this.lists = this.temp = response.data).catch((error) => this.errors = error.response.data.errors)
        },
    }
</script>

<style scoped>

</style>