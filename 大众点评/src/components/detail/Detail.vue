<template>
	<div id="Home">
		<v-dt></v-dt>
		
		<v-dc></v-dc>
		<v-df></v-df>
	</div>
</template>

<script>
	import Detailtop from "./Detailtop.vue"
	
	import Detailcon from "./Detailcon.vue"
	import Detailtfoo from "./Detailfoo.vue"
export default {
  
  data(){
  	return{
  		
  	}
  },
  methods:{
  	
  },
  components:{
	 "v-dt":Detailtop,
	 
	 "v-dc":Detailcon,
	 "v-df":Detailtfoo
  }
  
} 
</script>

<style>
</style>