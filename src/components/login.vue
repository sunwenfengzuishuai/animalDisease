<style scoped>
	html,body,div{
		margin: 0;
		padding: 0;
	}
	 ul li{
	 	list-style: none;
	 }
	.login-container{
		width: 100%;
		height: 100vh;
		background: url('../assets/login-bg.png') no-repeat;
		-webkit-background-size: cover;
		background-size: cover;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.top-cont{
		width: 100%;
		height: 180px;
		display: flex;
		justify-content: space-around;
		color: #fff;
		flex-shrink: 0;
	}
	.top-cont div{
		width: 30%;
		margin-top: 20px;
	}
	.left-cont{
		font-size: 20px;
	}
	.top-cont .middle-cont{
		margin-top: 0px;
		width: 400px;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
	}
	.middle-cont .title{
		margin-top: 0;
		padding-top: 70px;
		width: 100%;
		font-size: 60px;
		height: 65%;
		color: #f5f5f5;
	}
	.middle-cont .subhead{
		width: 100%;
		height: 35%;
		font-size: 30px;
		color: #cecece;
	}
	.middle-cont .subhead span{
		float: right;
	}
	
	.form-cont{
		width: 400px;
		height: 500px;
		margin: 0 auto;
		border-radius: 5px;
		background-color: #fff;
		color: #999;
		font-size: 16px;
		padding: 5px;
	}
	.w{
		height: 100%;
		width: 80%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	/* 登陆表单的头部选择部分start */
	.form-top{
		height: 75px;
		border-bottom: 1px solid #eee;
	}
	.form-top ul{
		display: flex;
		height: 100%;
	}
	.form-top ul li{
		line-height: 75px;
	}
	.form-top ul li:nth-child(1){
		color: #555;
		border-bottom: 3px solid #555; 
	}
	.form-top ul li:nth-child(2){
		margin-left: 32px;
	}
	/* 登陆表单的头部选择部分end */
	/* 登陆表单的中间主体部分start */
	.form-midle{
		margin-top: 30px;
		height: 250px;
	}
	.formitem{
		margin-top: 20px;
	}
	.login-button{
		width: 100%;
		font-size: 16px;
		color: #fff;
	}
	.text-cont{
		display: flex;
		justify-content: space-between;
	}
	.text-cont .left-text{
		width: 120px;
	}
	.form-midle ul{
		display: flex;
	}
	.form-midle ul li{
		margin: 0px 6px;
		font-size: 14px;
	}
	.message{
		display: inline-block;
		width: 100%;
		height: 20px;
		color: red;
		font-size: 10px;
	}
	/* 登陆表单的中间主体部分end */
	/* 登陆表单的脚部修饰部分start */
	.form-bottom{
		height: 150px;
		background: url('../assets/form-bg.png') no-repeat;
		background-size: cover;
		margin-bottom: 20px;
	}
	/* 登陆表单的脚部修饰部分end */
</style>

<template>
	<div class="login-container">
		<div class="top-cont">
			<div class="left-cont"><span>动物疫病风险评估与检测预警系统</span></div>
			<div class="middle-cont">
				<div class="title">
					<span>动物疫病</span>
				</div>
				<div class="subhead">
					<span>风险评估与检测预警系统</span>
				</div>
			</div>
			<div class="right-cont"></div>
		</div>
		<div class="form-cont">
			<div class="w">
				<div>
					<div class="form-top">
						<ul>
							<li>密码登录</li>
							<li>立即注册</li>
						</ul>
					</div>
					<div class="form-midle">
						<Form ref="ruleForm" :model="ruleForm" :rules="rules">
					        <FormItem prop="username" class="formitem">
					            <Input type="text" v-model="ruleForm.username" placeholder="用户名"></Input>
					        </FormItem>
					        <FormItem prop="passwd" class="formitem">
					            <Input type="password" v-model="ruleForm.passwd" placeholder="密码"></Input>
					        </FormItem>
					        <FormItem class="formitem">
					            <Button type="primary" class="login-button" @click="login()">登录</Button>
					        </FormItem>
					    </Form>
					    <div class="formitem text-cont">
					    	<div class="left-text">
								<span class="message" v-model="message">{{message}}</span>
					    	</div>
					    	<ul>
						    	<li><router-link to="/illnesscont">忘记密码</router-link></a></li>
						    	<li>|</li>
						    	<li><a href="">注册</a></li>
						    </ul>
					    </div>
					</div>
				</div>		
				<div class="form-bottom">
				    	
				</div>
			</div>
		</div> 
	</div>
</template>

<script>
	import Cookies from "js-cookie";
	import request from "../request/auth.js"

	 export default {
        data () {
            const validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('用户名不能为空'));
                } else {
                    if (this.ruleForm.username !== '') {
                        this.$refs.ruleForm.validateField('passwd');
                    }
                    callback();
                }
            };
            const validatePasswd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入您的密码'));
                } else if (this.ruleForm.passwd !== '') {
                    this.$refs.ruleForm.validateField('passwd');
                } else {
                    callback();
                }
            };
               
            return {
                ruleForm: {
                    username: '',
                    passwd: '',
                },
                rules: {
                    username: [
                        { validator: validateUsername, trigger: 'blur' }
                    ],
                    passwd: [
                        { validator: validatePasswd, trigger: 'blur' }
                    ],
                },
                message:'',
            }
        },
        methods: {
            async login() {
            	var result = await request.login(this.ruleForm.username,this.ruleForm.passwd);
        		if(result===1007){
        			this.message = "无效参数";
		    		return "无效参数";
		    	}else if(result===1014){
		    		this.message = "用户名或密码错误";
		    		return "用户名或密码错误";
		    		alert(result);
		    	}else if(result===1021){
		    		this.message = "用户名或密码错误";
		    		return "用户名或密码错误";
            	}else{
            		if (result) {
            			this.message = "登陆成功！";
            			setTimeout(function(){
                      		this.$router.replace({ path:'/app/:user/maincont', query: {user:result.user}});
                  		}.bind(this),1000);	
            		}
            		else{
            			this.message = "登录失败，用户名或密码不正确";
            			return "登录失败，用户名或密码不正确";
            		}
            	}  
            },
        }
   //          async doLogin() {
			//     try {
			//         var result = await request.login(
			// 	        this.ruleForm.username,
			// 	        this.ruleForm.passwd
			//         );
			//     	if(result===1007){
			//     		return "无效参数";
			//     	}else if(result===1014){
			//     		return "用户名或密码错误";
			//     	}else if(result===1021){
			//     		return "用户名或密码错误";
			//     	}else{
			//   			if (result) {	
			//          		Cookies.set("user", this.form.username);
			//          		Cookies.set("accessToken", result.accessToken);
			//          		this.$store.commit(
			//            		"setAvator",
			//            		"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg"
			//          		);
			//   				this.$Message.success("登陆成功"); 
			//            		this.$router.push({
			//               		name: "/app/maincont"
			//         		});
			//         	}else {
			//             	return "登录失败，用户名或密码不正确";
			//         	}
			//   		}
			//     } catch (error) {
			//         this.$Message.error("登陆系统错误，请检查网络连接"); 
			//     }
			// },
   //      }

        // const validateAge = (rule, value, callback) => {
            //     if (!value) {
            //         return callback(new Error('Age cannot be empty'));
            //     }
            //     // 模拟异步验证效果
            //     setTimeout(() => {
            //         if (!Number.isInteger(value)) {
            //             callback(new Error('Please enter a numeric value'));
            //         } else {
            //             if (value < 18) {
            //                 callback(new Error('Must be over 18 years of age'));
            //             } else {
            //                 callback();
            //             }
            //         }
            //     }, 1000);
            // };
    }
</script>
