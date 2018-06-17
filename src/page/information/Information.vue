<template>
    <div class="content">
        <div class="inf_logo">
            <img src="static/img/information.jpg">
            <h3>这个仙女不太冷</h3>
        </div> 
        <div class="inf_one">
            <h5>我的订单
                <router-link tag="i" :to="{name: 'PersonalData'}" class="layui-icon"> 
                    <span>查看全部订单</span>
                    &#xe602; 
                </router-link>
            </h5>
            <ul>
                <li>
                    <p>
                        <i class="layui-icon">&#xe65e;</i>
                    </p>
                    <p>待付款</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon">&#xe628;</i>
                    </p>
                    <p>待发货</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon">&#x1005;</i>
                    </p>
                    <p>待收货</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon">&#xe63c;</i>
                    </p>
                    <p>待评价</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon">&#xe6af;</i>
                    </p>
                    <p>退款/售后</p>
                </li>
            </ul>
        </div>

        <div class="inf_two">
            <h5>常用功能</h5>            
            <ul>
                <li>
                    <p>
                        <i class="layui-icon yellow">&#xe735;</i>
                    </p>
                    <p>会员中心</p>
                </li>
                <router-link tag="li" :to="{name: 'Address'}"> 
                    <p>
                        <i class="layui-icon green">&#xe715;</i>
                    </p>
                    <p>地址管理</p>
                </router-link>
                <!-- <li>
                    <p>
                        <i class="layui-icon green">&#xe715;</i>
                    </p>
                    <p>地址管理</p>
                </li> -->
                <li>
                    <p>
                        <i class="layui-icon blue">&#xe600;</i>
                    </p>
                    <p>我的收藏</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon yellow">&#xe69c;</i>
                    </p>
                    <p>我要吐槽</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon green">&#xe641;</i>
                    </p>
                    <p>分享APP</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon blue">&#xe621;</i>
                    </p>
                    <p>优惠券</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon yellow">&#xe606;</i>
                    </p>
                    <p>帮助中心</p>
                </li>
            </ul>
        </div>
        <button class="layui-btn layui-btn-fluid">退出登录</button>
    </div>
    
</template>

<script>
import "layui-css";

export default {
    name: "test",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    }
};
</script>

<style lang="scss" scoped>
.content {
    background: #eaeaea;
    font-size: 10px;
    .inf_logo {
        width: 100%;
        height: 130px;
        background: url("/static/img/information.jpg") no-repeat;
        background-size: 100% 170%;
        display: inline-block;
        text-align: center;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50px;
            margin: 8px;
        }
    }
    h5 {
        text-indent: 10px;
        font-size: 15px;
        color: #454545;
        padding-top: 10px;
        padding-bottom: 20px;
        position: relative;
        i {
            position: absolute;
            right: 10px;
            color: #a4a4a4;
            span {
                font-size: 10px;
                color: #a4a4a4;
            }
        }
    }
    .inf_one {
        margin: 10px;
        background: #fff;
        border-radius: 5px;            
        li {
            width: 18.5%;
            color: #898989;
            display: inline-block;
            text-align: center;
            padding-bottom: 10px;
            p{
                padding-bottom: 10px;
                i{
                    font-size: 20px;
                }
            }
        }
    }
    .inf_two {
        margin: 10px;
        background: #fff;
        border-radius: 5px;
        li {
            width: 24%;
            color: #898989;
            display: inline-block;
            text-align: center;
            padding-bottom: 10px;
            p{
                padding-bottom: 10px;
                i{
                    font-size: 20px;
                }
            }
        }
        .yellow{
            color: #F5D383;
        }
        .green{
            color: #9FB971;
        }
        .blue{
            color: #ADD8FA;
        }
    }
    button{
        background: #CC3333;
        margin: 10px;
        width: 94%;
        border-radius: 5px;
    }
}
</style>