<template>
	<div class="tab">
		<router-link tag="div" class="tab-item" to="/illbarcont">
			<span class="tab-link">柱状图</span>
		</router-link>
		<router-link tag="div" class="tab-item" to="/illlinecont">
			<span class="tab-link">曲线图</span>
		</router-link>
	</div>
</template>

<style scoped>
	.tab{
		display: flex;
		height: 100%;
		font-size: 0.8em;
		background-color: black;
		color: white;
		text-align: center;
	}
	.tab-item{
		display: table;
		text-align: center;
		width: 100%;
	}
	.tab-link{
		display: table-cell;
		width: 100%;
		vertical-align: middle;
	}
	.router-link-active .tab-link{
		color: yellow;
		border-bottom: 2px solid white;
	}

</style>

<script>
	
</script>
