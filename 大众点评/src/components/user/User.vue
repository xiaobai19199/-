<template>
	<div id="Home">
		<v-ut></v-ut>
	    <router-view></router-view>
	</div>
</template>

<script>
	import Usertop from "./Usertop.vue"
export default {
  
  data(){
  	return{
  		
  	}
  },
  methods:{
  	
  },
  components:{
	 "v-ut":Usertop
	 
  }
  
} 
</script>

<style>
</style>