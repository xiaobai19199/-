<template>
	<div id="homecon">
		<div class="homecon">
			<ul>
			<li><p>日本菜</p></li>
			<li><p>SPA</p></li>
			<li><p>结婚</p></li>
			
			<li><p>家装</p></li>
			<li><p>宠物</p></li>
			<li><p>全部分类</p></li>
			<li><p>学习培训</p></li>
			<li><p>西餐</p></li>
			<li><p>火车机票</p></li>
			<li><p>烧烤</p></li>
		</ul>
		<ul>
			<router-link to="/"><li></li></router-link>
			<router-link to="/home2"><li></li></router-link>
			<router-link to="/home3"><li style="background-color: red;"></li></router-link>
		</ul>
		</div>
		
	</div>
</template>

<script>
	
</script>

<style scoped="scoped">
	#homecon{
		width: 100%;
		height: 20rem;
		background-color: #f1f1f1;
	}
	#homecon .homecon{
		width:100%;
		height:18rem;
		background-color: white;
	}.homecon ul:nth-child(1){
		width: 95%;
		height: 14rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		flex-wrap: wrap;
	}.homecon ul:nth-child(1) li{
	    width: 6rem;
	    text-align: center;
	}.homecon ul:nth-child(1) li p{
		font-size: 1.2rem;
	}.homecon ul:nth-child(2){
		width: 4rem;
		height: 4rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}.homecon ul:nth-child(2) li{
		width: 0.8rem;
		height: 0.8rem;
		background-color: #cfcfcf;
		border-radius: 0.4rem;
	}
</style>