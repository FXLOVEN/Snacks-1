<template>
    <div class="content">
        <div class="classification">
            <!-- 分类 -->
            <div class="search-box">
                <i class="glyphicon glyphicon-search"></i>
                <input class="search" type="text" placeholder="请输入你先查找的零食名称进行搜索">
            </div>

            <!-- 商品目录 -->
            <div class="product-catalogue">
                <ul>
                    <li>
                        <div class="product-catalogue-left">
                            <img src="/static/img/nut_1.jpg" alt="">
                        </div>
                        <div class="product-catalogue-right">
                            <p class="product-name">美味的坚果</p>
                            <p class="product-business">Nicholas C. Zakas</p>
                            <p class="product-price">¥ 99.99</p>
                            <i class="ico-right">></i>
                        </div>
                    </li>
                    <li>
                        <div class="product-catalogue-left">
                            <img src="/static/img/nut_1.jpg" alt="">
                        </div>
                        <div class="product-catalogue-right">
                            <p class="product-name">美味的坚果</p>
                            <p class="product-business">Nicholas C. Zakas</p>
                            <p class="product-price">¥ 99.99</p>
                            <i class="ico-right">></i>
                        </div>
                    </li>
                    <li>
                        <div class="product-catalogue-left">
                            <img src="/static/img/nut_1.jpg" alt="">
                        </div>
                        <div class="product-catalogue-right">
                            <p class="product-name">美味的坚果</p>
                            <p class="product-business">Nicholas C. Zakas</p>
                            <p class="product-price">¥ 99.99</p>
                            <i class="ico-right">></i>
                        </div>
                    </li>
                    <li>
                        <div class="product-catalogue-left">
                            <img src="/static/img/nut_1.jpg" alt="">
                        </div>
                        <div class="product-catalogue-right">
                            <p class="product-name">美味的坚果</p>
                            <p class="product-business">Nicholas C. Zakas</p>
                            <p class="product-price">¥ 99.99</p>
                            <i class="ico-right">></i>
                        </div>
                    </li>
                 
                </ul>
                <div class="text-center">加载更多
                    <i class="glyphicon glyphicon-eject"></i>
                </div>

            </div>
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
// 分类
.classification {
    img {
        width: 70px;
    }
    // 搜索
    .search-box {
        width: 100%;
        text-align: center;
        position: relative;

        .glyphicon-search {
            position: absolute;
            top: 13px;
            left: 5px;
        }
        .search {
            width: 100%;
            height: 30px;
            border: 1px solid gainsboro;
            border-radius: 30px;
            margin-top: 5px;
            margin-bottom: 15px;
            padding-left: 30px;
            font-size: 14px;
        }
    }

    // 商品目录
    .product-catalogue {
        ul {
            li {
                height: 110px;
                border-bottom: 1px solid gainsboro;
                padding: 10px 0;
                box-sizing: border-box;
            }
        }
        .product-catalogue-left {
            float: left;
            margin-right: 5px;
            padding-left: 10px;
        }
        .product-catalogue-right {
            padding-top: 10px;
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
            .ico-right {
                position: absolute;
                top: 40px;
                right: 10px;
            }
        }
    }
}
</style>
