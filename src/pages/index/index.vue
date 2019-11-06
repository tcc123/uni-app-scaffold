<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log(config)
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		text-align: center;
		height: 400upx;
		background: $uni-color-primary;
		.logo {
			height: 200upx;
			width: 200upx;
			margin-top: 200upx;
		}
		.title {
			font-size: 36upx;
			color: #8f8f94;
		}
	}
</style>
