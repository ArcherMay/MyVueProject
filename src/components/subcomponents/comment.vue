<template>
    <div class="cmt-container">
        <h1> 发表评论</h1>
        <hr>
        <textarea placeholder="请输入评论内容（最多可输入120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="item in comments" :key="item.add_time">
                <div class="cmt-title">
                    第1楼 &nbsp;&nbsp;{{item.user_name}} &nbsp;&nbsp;发表时间{{item.add_time |dateFormat}}
                </div>
                 <div class="cmt-body">
                     {{ item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">获取更多</mt-button>
    
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data() {
        return {
            commenttime:new Date(),
            comments:[],
            msg:""
        };
    },
    methods: {
        postComment() {
            if(this.msg.trim().length===0){
                return Toast("评论内容不能空...");
            }
            var cmt = {
                user_name:"匿名用户",
                add_time:Date.now(),
                content:this.msg.trim()
            };
            this.comments.unshift(cmt);
            this.msg="";
        },
        getMore() {
            return Toast("加载更多...");
        }
    }
}
</script>
<style lang="scss" scoped>
    .cmt-container {
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list {
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    line-height: 30px;
                    background-color: #cccccc;
                    display: flex;
                    justify-content: space-between;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2em;
                } 
            }
        }
    }
</style>


