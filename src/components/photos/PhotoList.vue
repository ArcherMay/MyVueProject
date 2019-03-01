<template>
    <div >
        <!--顶部轮播部分-->
        <div id="slider" class="mui-slider"><!--mui-fullscreen这个类会将顶部区域覆盖，建议去除-->
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
						<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
							科技
						</a>
					</div>
			    </div>
		</div>
         <!--下方图片部分-->
         <ul class="photo-list">
             <li>
                    <img  src="http://p0.qhimgs4.com/t010271f735bcb32aa9.jpg">
                    <div class="info">
                        <h3 class="info-title">图片标题</h3>
                        <div class="info-body">图片内容啦啦啦啦啦</div>
                    </div>
             </li>
         </ul>

    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data() {
        return {
            cates:[],//所有分类的列表数组
            list:[] //图片列表
        };
    },
    methods:{
        getAllCategory(){
            this.$http.get("api/getcategpry").then(
                result=>{
                    if(result.body.status===0){
                        this.cates=result.body.message;
                    }
                }
            );
        },
        getPhotoListByCateID(cateId){

            this.$http.get("api/getimages/"+cateId).then(result=>{
                if(result.body.status===0){
                    this.list=result.body.message;   
                }
            });
        }
    },
    mounted(){
         mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    }
};
</script>

