<template>
	<div id="user2">
		<div class="user2">
			<p>您的订单</p>
			<ul>
				<li><img src="../../../assets/img/images/images/home2_03.png"/></li>
				<li>
					<p>{{"商户："+data.title}}</p>
					<p>{{"数量："+data.number}}</p>
					<p>{{"价格：￥"+data.price}}</p>
					
				</li>
				
			</ul>
			<textarea name="" rows="" cols=""></textarea>
			<p>
				    <span v-for="(item,i) in 5" @click="dj(i)"><img src="../../../assets/img/say1_05.png"/></span>
					
			</p>
			<div class="detailcon_bot">
				<router-link to="/user/"><button style="background-color: red;">提交</button></router-link>
				<router-link to="/user/"><button>取消</button></router-link>
			</div>
		</div>
	</div>
	
</template>

<script>
	import im from "../../../assets/img/say1_03.png"
	import im1 from "../../../assets/img/say1_05.png"
	export default {
  
  data(){
  	return{
  		data:[]
  	}
  },methods:{
  	dj:function  (i) {
  		
  		
		for(let a=0;a<=$(".user2>p:nth-child(4) span").length;a++){
			if (a<=i) {
				$(".user2>p:nth-child(4) span").eq(a).find("img").attr("src",im)
			}else if(a>i){
				$(".user2>p:nth-child(4) span").eq(a).find("img").attr("src",im1)
			}
			
		}
  		
  		
  	}
  },
  mounted(){
  	let that=this;
  		this.$axios.get("http://39.106.36.168:8080/dazhong-comment/comment/api/homelist/%E5%8C%97%E4%BA%AC/0").then(
  			res=>{
  				console.log(res);
  				that.data=res.data.data[0]
  				
  			}
  		).catch(
  			err=>{console.log(err)}
  		)
  }
  
} 
</script>

<style>
	#user2{
		width: 100%;
		height: 53.5rem;
		background-color: #F1F1F1;
		
	}.user2{
		width: 100%;
		
		background-color: white;
	}.user2>p:nth-child(1){
		width: 95%;
		height: 4rem;
		margin: 0 auto;
		line-height: 4rem;
		font-size: 1.5rem;
		font-weight: bold;
		border-bottom: 1px solid #F1F1F1;
	}.user2>ul{
		width: 95%;
		height: 12rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}.user2>ul>li:nth-child(1) img{
		width: 12rem;
	    height: 9.1rem;
	    align-items: center;
	}.user2>ul>li{
		margin-top: 1rem;
	}.user2>ul>li:nth-child(2){
		margin-right: auto;
		padding-left:1rem ;
	}.user2>ul>li:nth-child(2) p{
		width: 9.4rem;
		font-size: 1.5rem;
		padding-bottom: 0.5rem;
	}.user2>ul>li:nth-child(3){
		line-height: 10rem;
	}.user2>ul>li:nth-child(3) button{
		width: 8rem;
		height: 3rem;
		background-color: red;
		border: none;
		color: white;
		font-size: 1.5rem;
	}.user2 textarea{
		width: 95%;
		height: 15.8rem;
		margin-left: 2.5%;
		margin-bottom: 1rem;
	}.user2>p:nth-child(4) span img {
		width: 1.5rem;
		height: 1.5rem;
	}
	.user2>p:nth-child(4){
		width: 95%;
		margin: 0 auto;
		margin-bottom: 1rem;
	}.user2 .detailcon_bot button{
		width: 10rem;
		height: 3rem;
		border: none;
		
	}.user2 .detailcon_bot{
		line-height:6rem ;
	}.user2 .detailcon_bot button:first-child{
		margin-left: 2.5%;
		margin-right: 0.5rem;
		
	}.user2 .detailcon_bot button{
		color: white;
		font-size: 1.5rem;
	}.user2 .detailcon_bot button:last-child{
		
		background-color: gray;
	}
</style>