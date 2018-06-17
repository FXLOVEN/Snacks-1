<template>
    <div class="content">
        <form class="layui-form" action="">
            <section class="layui-form-item">
                <label class="layui-form-label">昵称</label>
                <div class="layui-input-block">
                    <input type="text" name="title" required  lay-verify="required" placeholder="请输入您的昵称" autocomplete="off" class="layui-input">
                </div>
            </section>
            <section class="layui-form-item">
                <label class="layui-form-label">E-mail</label>
                <div class="layui-input-inline">
                    <input type="text" name="title" required  lay-verify="required" placeholder="请输入您的安全邮箱" autocomplete="off" class="layui-input">
                </div>
            </section>
            <div class="layui-form-item">
                <label class="layui-form-label">单选框</label>
                <div class="layui-input-block">
                    <input type="radio" name="sex" value="男" title="男" checked>
                    <input type="radio" name="sex" value="女" title="女">
                    <input type="radio" name="sex" value="保密" title="保密">
                </div>
            </div>
            <section class="layui-form-item">
                <label class="layui-form-label">身份证号</label>
                <div class="layui-input-inline">
                    <input type="text" name="title" required  lay-verify="required" placeholder="请输入您的18位身份证号" autocomplete="off" class="layui-input">
                </div>
            </section>
            <section class="layui-form-item layui-form-text">
                <label class="layui-form-label">个人描述</label>
                <div class="layui-input-block">
                    <textarea name="desc" placeholder="请谈谈您对自己的认识" class="layui-textarea"></textarea>
                </div>
            </section>
            <div class="layui-form-item">
                <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
            </div>
        </form>
    </div>

</template>

<script>
import "layui-css";
import Layui from "layui-js";

export default {
    name: "test",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    mounted(){
        layui.use('form',function(){
            var form = layui.form;           
            form.render();           
        });
    }
};
</script>

<style lang="scss" scoped>
.content{
    font-size: 13px;
    section{
        border-bottom:1px solid #AEAEAE; 
        input,textarea{
            border: none;
            resize: none;
        }
    }
    .layui-form-label{
        text-overflow: clip;
        text-align: left;
    }
    .layui-input-block,.layui-input-inline{
        margin-left: 90px;
    }
    button{
        background: #359A35;
        margin: 10px;
        width: 94%;
        border-radius: 5px;
    }
}
</style>