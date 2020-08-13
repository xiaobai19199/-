<template>
	<div id="Home">
		<v-u1></v-u1>
	    <v-u2></v-u2>
	</div>
</template>

<script>
	import User1 from "./User1.vue"
	import User2 from "./User2.vue"
export default {
  
  data(){
  	return{
  		
  	}
  },
  methods:{
  	
  },
  components:{
	 "v-u1":User1,
	 "v-u2":User2
  }
  
} 
</script>

<style>
</style>