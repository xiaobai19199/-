<template>
	<div id="searchcon">
		
		<ul>
			<router-link to="/search" v-for="item in data">
			<li>
				<div class="left">
					<ul>
						<li><img src="../../assets/img/images/images/home2_03.png"/></li>
						<li>
							<p>{{item.title}}</p>
							<p>{{"￥"+item.price+"/人"}}</p>
						</li>
					</ul>
				</div>
				<div class="right">
					<p>{{item.distance}}</p>
					<p>{{"已售"+item.number}}</p>
				</div>
			</li>
			</router-link>
		</ul>
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
  	let that=this;
  		this.$axios.get("http://39.106.36.168:8080/dazhong-comment/comment/api/search/0/%E5%8C%97%E4%BA%AC/all/%E6%B1%89%E5%A0%A1").then(
  			res=>{
  				console.log(res);
  				that.data=res.data.data
  				
  			}
  		).catch(
  			err=>{console.log(err)}
  		)
  }
  
} 
</script>

<style>
	#searchcon{
	width: 100%;
	
}#searchcon>ul{
	width: 100%;
	
	background-color: white;
}#searchcon>ul>a>li{
	width: 95%;
	height: 11rem;
	margin: 0 auto;
	border-bottom: 1px solid #F1F1F1;
	display: flex;
	justify-content: space-between;
	padding-top: 1rem;
}
.left{
	width: 20.2rem;
	height: 100%;
	
}.left ul{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
}
.left ul li{
	width: 100%;
	height: 100%;
	
}
.left ul img{
	width: 12rem;
	height: 9.1rem;
}.left ul li:nth-child(2){
	padding-left:1rem ;
}.left ul li:nth-child(2) p:nth-child(1){
	width: 7rem;
	text-align: center;
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 2rem;
}.left ul li:nth-child(2) p:nth-child(2){
	width: 7rem;
	text-align: center;
	font-size: 1.5rem;
	font-weight: bold;
	color: red;
}.right p:nth-child(1){
	text-align: right;
	font-size: 1.5rem;
	color: darkgrey;
	margin-bottom: 2rem;
}.right p:nth-child(2){
	color: darkgrey;
	font-size: 1.5rem;
}
</style>