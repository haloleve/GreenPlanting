<template>
  <main>
    <nav-bar>
      <div slot="nav-title">我的</div>
    </nav-bar>
    <div class="content">
      <label for="user">
        <el-input id="user" v-model="username" placeholder="请输入用户名"></el-input>
      </label>
      <label for="pswd">
        <el-input id="pswd" type="password" v-model="password" placeholder="请输入密码"></el-input>
      </label>
      <el-checkbox v-model="checks">同意协议</el-checkbox>
      <el-button @click="register" :disabled="!checks" type="primary" plain>注册</el-button>
    </div>
  </main>
</template>
<script>
import NavBar from '@/components/navbar/NavBar';
import { post } from '@/utils/request';
import myAlert from '@/plugin/myAlert';

export default {
  name: "Profile",
  components:{
    NavBar
  },
  data(){
    return {
      checks: false,
      username: '',
      password: '',
    }
  },
  methods: {
    register(){
      let params = {
        username: this.username,
        password: this.password,
        avatar: "@/assets/images/homepage/carous1.jpg"
      }
      post('/users',params)
        .then((res)=>{
          console.log(res);
          if(res.status.toString().match(/^2\d{2}$/)){
            window.localStorage.setItem('userinfo',JSON.stringify(res.data));
            new myAlert('登陆成功,欢迎'+res.data.username);
            setTimeout(()=>{
              this.$router.push('/home')
            })
          }
        });
    }
  },
}
</script>
<style lang="scss" scope>
.content{
  width: 100vw;
  height: calc(100% - 98px);
  margin: 49px 0;
  overflow: scroll;
}
</style>