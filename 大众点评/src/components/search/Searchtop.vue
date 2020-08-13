<template>
	<div id="searchtop">
		<ul>
			<li><router-link to="/"><p><</p></router-link></li>
			<li>
				<input type="" name="" id="" value="" />
				<img src="../../assets/img/home1_04_03.png"/>
			</li>
			
		</ul>	
	</div>
</template>

<script>
	
</script>

<style>
	#searchtop{
	width: 100%;
	height: 4.5rem;
	background-color: #e9203d;
}
#searchtop ul{
	width: 95%;
	height: 100%;
	display: flex;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
	
}
#searchtop ul p{
	font-size: 2rem;
	color: white;
	font-weight: bold;
}
#searchtop ul li:nth-child(2){
	position: relative;
	
}
#searchtop ul li:nth-child(2) input{
	width: 30rem;
	height: 2.8rem;
	border-radius:1.5rem;
	border: none;
	outline: none;
	padding-left: 3rem;
}#searchtop ul li:nth-child(2) img{
	width: 1.5rem;
	height: 1.5rem;
	position: absolute;
	top: 0.75rem;
	left: 1rem;
}
</style>