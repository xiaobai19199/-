<template>
	<div id="hometop">
		<ul>
			<li><p>北京</p></li>
			<li>
				<input type="" name="" id="" value="" />
				<router-link to="/search"><img src="../../assets/img/home1_04_03.png"/></router-link>
			</li>
			<li><router-link to="/login"><img src="../../assets/img/home1_03.png"/></router-link></li>
		</ul>	
	</div>
</template>

<script>
	
</script>

<style scoped="scoped">

#hometop{
	width: 100%;
	height: 4.5rem;
	background-color: #e9203d;
}
#hometop ul{
	width: 95%;
	height: 100%;
	display: flex;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
	
}
#hometop ul p{
	font-size: 1.5rem;
	color: white;
}
#hometop ul li:nth-child(2){
	position: relative;
	
}
#hometop ul li:nth-child(2) input{
	width: 25.3rem;
	height: 2.8rem;
	border-radius:1.5rem;
	border: none;
	outline: none;
	padding-left: 3rem;
}#hometop ul li:nth-child(2) img{
	width: 1.5rem;
	height: 1.5rem;
	position: absolute;
	top: 0.75rem;
	left: 1rem;
}#hometop ul li:nth-child(3) img{
	width: 1.5rem;
	height: 1.5rem;
}
</style>