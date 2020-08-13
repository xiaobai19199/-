<template>
	<div id="detailcon">
		<div class="detailcon_c">
			<div class="detailcon_top">
				<div class="detailcon_left">
					<img src="../../assets/img/images/images/home2_03.png"/>
				</div>
				<div class="detailcon_right">
					<p>{{data.title}}</p>
					<div class="detailcon_right2">
						<p>
							<span><img src="../../assets/img/say1_05.png"/></span>
							<span><img src="../../assets/img/say1_05.png"/></span>
							<span><img src="../../assets/img/say1_05.png"/></span>
							<span><img src="../../assets/img/say1_05.png"/></span>
							<span><img src="../../assets/img/say1_05.png"/></span>
						</p>
						<p>
							{{"￥"+data.price+"/人"}}
						</p>
					</div>
				</div>
			</div>
			<div class="detailcon_center">
				<p>{{data.descs}}</p>
			</div>
			<div class="detailcon_bot">
				<button>收藏</button>
				<router-link to="/user/"><button>买单</button></router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
  name: 'App',
  data(){
  	return{
  		data:{}
  	}
  },
  methods:{
  	
  },
  components:{
	 
  },
   
mounted(){
  	let that=this;
  	this.$axios.get("http://39.106.36.168:8080/dazhong-comment/comment/api/detail/info/1").then(
  		res=>{
  			console.log(res)
  			that.data=res.data
  		}
  	).catch(err=>{
  		console.log(err)
  	})
  	
  }
}
</script>

<style>
	#detailcon{
		width: 100%;
		height: 46rem;
		background-color: #F1F1F1;
		
	}.detailcon_c{
		width: 100%;
		height: 44rem;
		background-color: white;
	}
	.detailcon_top{
		width: 95%;
		height: 12rem;
		margin: 0 auto;
		border-bottom: 1px solid #F1F1F1;
		display: flex;
		justify-content: flex-start;
		margin-top: 1rem;
	}
	.detailcon_left img{
	width: 12rem;
	height: 9.1rem;
	margin-right: 1rem;
	}.detailcon_right>p{
		
	text-align: left;
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 2rem;
	}.detailcon_right2{
		display: flex;
		align-items: center;
	}.detailcon_right2>p>span>img{
		width: 1.5rem;
		
		height: 1.5rem;
	}.detailcon_right2>p{
		margin-right: 2rem;
		font-size: 1.5rem;
		color: darkgrey;
	}.detailcon_center{
		width: 95%;
		height: 24rem;
		border-bottom: 1px solid #F1F1F1;
		padding-top: 2rem;
		margin: 0 auto;
	}.detailcon_center p{
		
		font-size: 1.5rem;
		color: darkgrey;
	}.detailcon_bot button{
		width: 10rem;
		height: 3rem;
		border: 1px solid black;
		
	}.detailcon_bot{
		line-height:6rem ;
	}.detailcon_bot button:first-child{
		margin-left: 16%;
		margin-right: 5%;
	}
</style>