<template>
    <div class="content">
        <div class="inf_logo">
            <img src="static/img/information.jpg" alt="">
            <p>这个仙女不太冷</p>
        </div>
        <div class="inf_one">
            <h5>我的订单
                <i class="layui-icon">
                    <span>查看全部订单</span>
                    &#xe602;</i>
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
            <ul>
                <h5>常用功能</h5>
                <li>
                    <p>
                        <i class="layui-icon">&#xe65e;</i>
                    </p>
                    <p>会员中心</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon">&#xe65e;</i>
                    </p>
                    <p>地址管理</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon">&#xe65e;</i>
                    </p>
                    <p>我的收藏</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon">&#xe65e;</i>
                    </p>
                    <p>我要吐槽</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon">&#xe65e;</i>
                    </p>
                    <p>分享APP</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon">&#xe65e;</i>
                    </p>
                    <p>优惠券</p>
                </li>
                <li>
                    <p>
                        <i class="layui-icon">&#xe65e;</i>
                    </p>
                    <p>帮助中心</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
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
    .inf_logo {
        width: 100%;
        height: 130px;
        background: url("/static/img/information.jpg") no-repeat;
        background-size: 100% 170%;
        display: inline-block;
        text-align: center;
        line-height: 30px;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50px;
            margin-top: 10px;
        }
    }
    .inf_one {
        margin: 10px;
        background: #fff;
        border-radius: 5px;
        h5 {
            color: #454545;
            i {
                position: absolute;
                right: 20px;
                color: #a4a4a4;
            }
            span {
                font-size: 10px;
                color: #a4a4a4;
            }
        }
        li {
            font-size: 13px;
            color: #898989;
            display: inline-block;
        }
    }
    .inf_two {
        margin: 10px;
        background: #fff;
        border-radius: 5px;
        h5 {
            i {
                position: absolute;
                right: 20px;
            }
        }
        li {
            font-size: 13px;
            color: #5e5e5e;
            display: inline-block;
        }
    }
}
</style>