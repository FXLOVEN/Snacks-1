<template>
    <div class="content">
        <form class="layui-form" action="">
            <section class="layui-form-item">
                <label class="layui-form-label">姓名</label>
                <div class="layui-input-block">
                    <input type="text" name="title" required  lay-verify="required" placeholder="请填写您的真实姓名" autocomplete="off" class="layui-input">
                </div>
            </section>
            <section class="layui-form-item">
                <label class="layui-form-label">联系电话</label>
                <div class="layui-input-inline">
                    <input type="text" name="title" required  lay-verify="required" placeholder="请填写您的电话号码" autocomplete="off" class="layui-input">
                </div>
            </section>
            <section class="layui-form-item">
                <label class="layui-form-label">邮政编码</label>
                <div class="layui-input-inline">
                    <input type="text" name="title" required  lay-verify="required" placeholder="请填写您所在地区的邮政编码" autocomplete="off" class="layui-input">
                </div>
            </section>
            <section class="layui-form-item">
                <label class="layui-form-label">地址</label>
                <div class="layui-input-inline">
                <select name="quiz1">
                    <option value="">请选择省</option>
                    <option value="浙江" selected="">浙江省</option>
                    <option value="你的工号">江西省</option>
                    <option value="你最喜欢的老师">福建省</option>
                </select>
                </div>
                <div class="layui-input-inline">
                <select name="quiz2">
                    <option value="">请选择市</option>
                    <option value="杭州">杭州</option>
                    <option value="宁波">宁波</option>
                    <option value="温州">温州</option>
                    <option value="温州">台州</option>
                    <option value="温州">绍兴</option>
                </select>
                </div>
                <div class="layui-input-inline">
                <select name="quiz3">
                    <option value="">请选择县/区</option>
                    <option value="西湖区">西湖区</option>
                    <option value="余杭区">余杭区</option>
                    <option value="拱墅区">临安市</option>
                </select>
                </div>
            </section>
            <section class="layui-form-item">
                <label class="layui-form-label">详细地址</label>
                <div class="layui-input-inline">
                    <input type="text" name="title" required  lay-verify="required" placeholder="请填写详细的街道、楼栋、门牌号" autocomplete="off" class="layui-input">
                </div>
            </section>
            <div class="layui-form-item">
                <button class="layui-btn" lay-submit lay-filter="formDemo">确认地址</button>
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