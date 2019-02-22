<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newInfo">
						<img class="mui-media-object mui-pull-left" src="http://p0.qhimgs4.com/t010271f735bcb32aa9.jpg">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ new Date() | dateFormat}}</span>
                                <span>点击1次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="http://p0.qhimgs4.com/t010271f735bcb32aa9.jpg">
						<div class="mui-media-body">
						    <h1>幸福</h1>
							    <p class='mui-ellipsis'>
                                <span>发表时间：{{ new Date() | dateFormat}}</span>
                                <span>点击3次</span>
                                 </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="http://p0.qhimgs4.com/t010271f735bcb32aa9.jpg">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ new Date() | dateFormat}}</span>
                                <span>点击2次</span>
                            </p>
						</div>
					</a>
				</li>
			</ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mydate:new Date()
        }
    }
}
</script>

<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px;
            }

            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>
