<template>
	<div id="user1">
		<div class="user1">
			<p>
			<span><img src="../../../assets/img/buy2_03.png"/></span>
			<span>{{data.username}}</span>
			</p>
			<p>
			<span><img src="../../../assets/img/buy2_06.png"/></span>
			<span>北京</span>
			</p>
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
  	this.$axios.get("http://39.106.36.168:8080/dazhong-comment/comment/api/detail/comment/0/1").then(
  		res=>{
  			console.log(res);
  			that.data=res.data.data[0]
  		}
  	).catch(err=>{
  		console.log(err)
  	})
  	
  }
}
</script>

<style>
	#user1{
		width: 100%;
		height: 16rem;
		background-color: #F1F1F1;
	}.user1{
		width: 100%;
		height: 14rem;
		background-color: white;
		
	}.user1 p{
		width: 95%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
		padding-top: 2rem;
	}.user1 p span img{
		width: 1.5rem;
		height: 1.5rem;
	}.user1 p span{
		font-size: 1.5rem;
		
	}
	
</style>