<template>
    <div class="container">
        <div class="test">
            
            Axios
            
            <div>
               <label>姓名：</label> 
               {{userInfo.userName}}
            </div>
            <div>
               <label>昵称：</label> 
               {{userInfo.nickName}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Axios",
    data(){
        return{
            userInfo:{}
        }
    },
    created(){
        axios.get('/api/test.json').then((resp)=>{
            this.userInfo = resp.data;
        });
    }

};
</script>

<style scoped>

</style>
