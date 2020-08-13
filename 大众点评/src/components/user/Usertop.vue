<template>
	<div id="usertop">
		<ul>
			<li><router-link to="/detail"><p><</p></router-link></li>
			<li>
				<p>用户主页</p>
			</li>
			
		</ul>	
	</div>
</template>

<script>
</script>

<style>
		#usertop{
	width: 100%;
	height: 4.5rem;
	background-color: #e9203d;
}
#usertop ul{
	width: 95%;
	height: 100%;
	display: flex;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
	
}
#usertop ul p{
	font-size: 2rem;
	color: white;
	font-weight: bold;
}#usertop ul li:nth-child(2){
	margin: auto;
}
</style>