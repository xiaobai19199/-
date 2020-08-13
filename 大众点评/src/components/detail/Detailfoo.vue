<template>
	<div id="detailfoo">
		<p>用户点评</p>
		<ul>
			<li v-for="item in data">
				<p>
					<span><img src="../../assets/img/buy2_03.png"/></span>
					<span>{{item.username}}</span>
				</p>
				<p>
					<span><img src="../../assets/img/say1_05.png"/></span>
					<span><img src="../../assets/img/say1_05.png"/></span>
					<span><img src="../../assets/img/say1_05.png"/></span>
					<span><img src="../../assets/img/say1_05.png"/></span>
					<span><img src="../../assets/img/say1_05.png"/></span>
				</p>
				<p>
					{{item.comment}}
				</p>
			</li>
		</ul>
		
	</div>
</template>

<script>
	import im from "../../assets/img/say1_03.png"
	export default {
		name: 'App',
		data() {
			return {
				data: [],
				star: []
			}
		},
		methods: {

		},
		components: {

		},

		mounted() {
			let that = this;
			this.$axios.get("http://39.106.36.168:8080/dazhong-comment/comment/api/detail/comment/0/1").then(
				res => {
					console.log(res);
					that.data = res.data.data;

				}
			).catch(err => {
				console.log(err)
			});

		},
		updated() {
			let that = this;

			this.$axios.get("http://39.106.36.168:8080/dazhong-comment/comment/api/detail/comment/0/1").then(
				res => {
					for(let i = 0; i < res.data.data.length; i++) {
						that.star.push(res.data.data[i].star);
						console.log(that.star);
						for(let a = 0; a < that.star[i];a++) {
							
						$("#detailfoo ul li").eq(i).find(" p:nth-child(2) span img").eq(a).attr("src",im)
							
							
							console.log(a)
						}
					}
				}).catch(err => {
				console.log(err)
			});
		}

	}
</script>

<style>
	#detailfoo {
		width: 100%;
		background-color: #F1F1F1;
	}
	
	#detailfoo>p {
		width: 100%;
		height: 3.5rem;
		background-color: white;
		padding: 0 2.5%;
		line-height: 3.5rem;
		font-size: 2rem;
		font-weight: bold;
		border-bottom: 1px solid #F1F1F1;
	}
	
	#detailfoo>ul {
		width: 100%;
		padding-bottom: 2rem;
		background-color: white;
	}
	
	#detailfoo>ul>li {
		width: 95%;
		height: 9rem;
		margin: 0 auto;
		border-bottom: 1px solid #F1F1F1;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	
	#detailfoo>ul>li>p:nth-child(1) {
		display: flex;
		align-items: center;
	}
	
	#detailfoo>ul>li>p {
		margin-top: 1rem;
	}
	
	#detailfoo>ul>li>p:nth-child(1) span:nth-child(1) img {
		width: 1.5rem;
		height: 1.5rem;
	}
	
	#detailfoo>ul>li>p:nth-child(2) span img {
		width: 1.5rem;
		height: 1.5rem;
	}
	
	#detailfoo>ul>li>p:nth-child(1) span:nth-child(2) {
		font-size: 1.5rem;
		font-weight: bold;
	}
	
	#detailfoo>ul>li>p:nth-child(3) {
		font-size: 1.5rem;
		color: darkgrey;
	}
</style>