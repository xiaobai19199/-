<template>
	<div id="logintop">
		<ul>
			<li><router-link to="/"><p><</p></router-link></li>
			<li>
				<p>商户详情</p>
			</li>
			
		</ul>	
	</div>
</template>

<script>
</script>

<style>
		#logintop{
	width: 100%;
	height: 4.5rem;
	background-color: #e9203d;
}
#logintop ul{
	width: 95%;
	height: 100%;
	display: flex;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
	
}
#logintop ul p{
	font-size: 2rem;
	color: white;
	font-weight: bold;
}#logintop ul li:nth-child(2){
	margin: auto;
}
</style>