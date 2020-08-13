<template>
	<div id="search">
		<v-st></v-st>
		<v-sc></v-sc>
		<v-sc2></v-sc2>
	</div>
</template>

<script>
	import Searchtop from "./Searchtop.vue"
	
	import Searchcon from "./Searchcon.vue"
	import Searchcon2 from "./Searchcon2.vue"
	
export default {
  
  data(){
  	return{
  		
  	}
  },
  methods:{
  	
  },
  components:{
	 "v-st":Searchtop,
	 
	 "v-sc":Searchcon,
	 "v-sc2":Searchcon2
  },
  mounted(){
  	$("#searchcon2").css("display","none")
	$("#searchtop ul li:nth-child(2) img").click(function  () {
		
		$("#searchcon").css("display","none");
		$("#searchcon2").css("display","block")
	})
  }
  
} 

</script>

<style>
</style>