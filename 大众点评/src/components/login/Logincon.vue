<template>
	<div id="logincon">
		<ul>
			<li>
				<input type="" name="" id="" value="" />
			    <img src="../../assets/img/login1_03.png"/>
			</li>
			<li>
				<input type="" name="" id="" value="" />
			    <img src="../../assets/img/login1_06.png"/>
			    <button>发送验证码</button>
			</li>
		</ul>
		
		
		<router-link to=""><button>登录</button></router-link>
	</div>
</template>

<script>
	export default {
  
  data(){
  	return{
  		data:[]
  	}
  },
  mounted(){
  	$(function  () {
		$("#logincon>ul>li>button").click(function(){
			let num=60;
			$("#logincon>ul>li>button").attr('disabled', true);
			let dsq=setInterval(function  () {
				
				num--;
				
				$("#logincon>ul>li>button").html(num+"s");
				
				if (num==0) {
					$("#logincon>ul>li>button").html("发送验证码");
					num=60;
					clearInterval(dsq);
					$("#logincon>ul>li>button").attr('disabled', false);
				}
				
			},1000)	
			
			
			
		})
	})
  }
  
} 
	
</script>

<style>
	
	#logincon{
		width: 100%;
		height: 60rem;
		background-color: #f1f1f1;
	}
	#logincon>ul>li{
		width: 30rem;
		height: 3.6rem;
		margin: 2rem auto;
		position: relative;
	}
	#logincon>ul>li>input{
		width: 100%;
		height:100%;
		padding-left: 3rem;
		box-sizing: border-box;
		border: none;
		border-radius: 1rem;
		outline: none;
	}#logincon>a>button{
		width: 30rem;
		height:3.6rem;
		margin: 0.5rem 3.75rem;
		font-size: 2rem;
	color: white;
	font-weight: bold;
	background-color: red;
	border: none;
		border-radius: 1rem;
		outline: none;
	}
	#logincon{
		padding-top: 25rem;
	}
	#logincon>ul>li>img{
		position: absolute;
		left: 1rem;
		top: 1rem;
		width:1.5rem ;
		height: 1.5rem;
	}#logincon>ul>li>button{
		position: absolute;
		right:1rem;
		top: 1rem;
		font-size: 1.5rem;
		color: red;
		border: none;
		outline: none;
		background-color: white;
	}
</style>