<template>
    <div class="content">
        <!-- 编辑 -->
        <div class="text-right">编辑</div>

        <!-- 商品目录 -->
        <div class="product-catalogue">
            <ul>
                <li>
                    <div class="product-catalogue-left">
                        <img src="/static/img/img-book.jpg" alt="">
                    </div>
                    <div class="product-catalogue-right">
                        <p class="product-name">JavaScript高级程序设计</p>
                        <p class="product-business">Nicholas C. Zakas</p>
                        <p class="product-price">¥ 99.99</p>
                        <div class="product-number">
                            <button class="layui-btn layui-btn-primary layui-btn-xs">
                                <i class="layui-icon">-</i>
                            </button>
                            <!-- <input class="product-number-text" type="text"> -->
                            <div class="layui-input-inline product-number-text">
                                <input type="text" name="username" lay-verify="required" placeholder="1" autocomplete="off" class="layui-input">
                            </div>
                            <button class="layui-btn layui-btn-primary layui-btn-xs">
                                <i class="layui-icon">+</i>
                            </button>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="product-catalogue-left">
                        <img src="/static/img/img-book.jpg" alt="">
                    </div>
                    <div class="product-catalogue-right">
                        <p class="product-name">JavaScript高级程序设计</p>
                        <p class="product-business">Nicholas C. Zakas</p>
                        <p class="product-price">¥ 99.99</p>
                        <div class="product-number">
                            <button class="layui-btn layui-btn-primary layui-btn-xs">
                                <i class="layui-icon">-</i>
                            </button>
                            <!-- <input class="product-number-text" type="text"> -->
                            <div class="layui-input-inline product-number-text">
                                <input type="text" name="username" lay-verify="required" placeholder="1" autocomplete="off" class="layui-input">
                            </div>
                            <button class="layui-btn layui-btn-primary layui-btn-xs">
                                <i class="layui-icon">+</i>
                            </button>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="product-catalogue-left">
                        <img src="/static/img/img-book.jpg" alt="">
                    </div>
                    <div class="product-catalogue-right">
                        <p class="product-name">JavaScript高级程序设计</p>
                        <p class="product-business">Nicholas C. Zakas</p>
                        <p class="product-price">¥ 99.99</p>
                        <div class="product-number">
                            <button class="layui-btn layui-btn-primary layui-btn-xs">
                                <i class="layui-icon">-</i>
                            </button>
                            <!-- <input class="product-number-text" type="text"> -->
                            <div class="layui-input-inline product-number-text">
                                <input type="text" name="username" lay-verify="required" placeholder="1" autocomplete="off" class="layui-input">
                            </div>
                            <button class="layui-btn layui-btn-primary layui-btn-xs">
                                <i class="layui-icon">+</i>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
            <button class="layui-btn layui-btn-fluid">前往支付</button>

<form class="layui-form layui-form-pane" action="">
  <div class="layui-form-item" pane>
    <label class="layui-form-label">单选框</label>
    <div class="layui-input-block">
      <input type="radio" name="sex" value="男" title="男">
      <input type="radio" name="sex" value="女" title="女" checked>
    </div>
  </div>
</form>

        </div>

    </div>
</template>

<script>
import "layui-css";
import Layui from "layui-js";

// layui.use('form', function(){
// var form = layui.form(); 
// form.render();
// });
export default {
    name: "test",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
            
        };
    },
    mounted(){
        layui.use('form', function(){  
                var form = layui.form;   
                form.render();  
        });   
    }

};
</script>

<style lang="scss" scoped>
.content {
    background-color: rgb(230, 230, 230);
}

// 商品目录
.product-catalogue {
    background-color: #fff;
    ul {
        li {
            height: 110px;
            border-bottom: 1px solid gainsboro;
            padding: 5px 0;
            box-sizing: border-box;
        }
    }
    .product-catalogue-left {
        float: left;
        margin-right: 5px;
        padding-left: 10px;
        img {
            width: 70px;
        }
    }
    .product-catalogue-right {
        // padding-top: 10px;
        position: relative;
        p {
            margin-bottom: 10px;
        }
        .product-name {
            color: rgb(127, 113, 204);
        }
        .product-business {
            font-size: 14px;
            color: rgb(161, 153, 153);
        }
        .product-price {
            font-size: 18px;
            color: rgb(235, 18, 18);
        }
        .product-number {
            position: absolute;
            top: 60px;
            right: 10px;
            .product-number-text {
                width: 50px;
                height: 22px;
                input {
                    text-align: center;
                    height: 22px;
                }
                // border: 2px solid gainsboro;
            }
        }
    }
}
</style>