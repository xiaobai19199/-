<template>
	<div id="homecon">
		
			<p>超值特惠</p>
		<ul>
			<li v-for="item in data">
				
				<img :src="item.img"/>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
  name: 'App',
  data(){
  	return{
  		data:[]
  	}
  },
  methods:{
  	
  },
  components:{
	 
  },
  mounted(){
  	let that=this;
  	this.$axios.get("http://39.106.36.168:8080/dazhong-comment/comment/api/homead").then(
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

<style scoped="scoped">
	#homecon{
		width: 100%;
		height: 32.2rem;
	}
	
	#homecon>p{
		font-size: 1.5rem;
		font-weight: bold;
		width: 100%;
		height: 3.6rem;
		padding-left: 2.5%;
		line-height: 3.6rem;
		border-bottom: 1px solid #f1f1f1;
	}#homecon ul{
		width: 95%;
		height: 28.6rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding-top: 1rem;
	}#homecon ul li{
		width: 10rem;
		height: 12rem;
	}#homecon ul li img{
		width: 100%;
		height: 100%;
	}
</style>