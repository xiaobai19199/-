<template>
	<div id="Home">
		<v-ht></v-ht>
		<router-view></router-view>
		<v-hc2></v-hc2>
		<v-hf></v-hf>
	</div>
</template>

<script>
	import Hometop from "./Hometop.vue"
	
	import Homecon2 from "./Homecon.vue"
	import Homefoo from "./Homefoo.vue"
export default {
  
  data(){
  	return{
  		
  	}
  },
  methods:{
  	
  },
  components:{
	 "v-ht":Hometop,
	 
	 "v-hc2":Homecon2,
	 "v-hf":Homefoo
  }
  
} 
</script>

<style>
</style>