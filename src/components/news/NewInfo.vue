<template>
    <div class="newsinfo-container">
        <!--标题-->
        <h3 class="title"> {{infotitle}}</h3>
        <!--子标题-->
        <p class="subtitle">
            <span> 发表时间：{{infoTime | dateFormat}}</span>
            <span> 点击：{{infoNum}} 次</span>
        </p>
        <!--内容区域-->
        <div class="content" >
            hahahahhhhhhahaahahahahahahh
        </div>

        <!--评论子组件区域-->
        <comment-box></comment-box>
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            infotitle:'标题',
            infoTime: new Date(),
            infoNum:'1'
        }
    },
    components:{
        "comment-box":comment
    }
}
</script>
<style lang="scss" scoped>
    .newsinfo-container {
        .subtitle {
            display: flex;
            justify-content: space-between
        }
    }
</style>
