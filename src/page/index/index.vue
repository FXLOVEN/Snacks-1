<template>
    <div class="content">

        <!-- Swiper 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="/static/img/lunbo/01.jpg" alt="" srcset=""></div>
                <div class="swiper-slide"><img src="/static/img/lunbo/02.jpg" alt="" srcset=""></div>
                <div class="swiper-slide"><img src="/static/img/lunbo/03.jpg" alt="" srcset=""></div>
                <div class="swiper-slide"><img src="/static/img/lunbo/04.jpg" alt="" srcset=""></div>
                <div class="swiper-slide"><img src="/static/img/lunbo/05.jpg" alt="" srcset=""></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <!-- 信息通知 -->
        <div class="notice text-center">
            <!-- <ul id="#play-ul">
                <li>
                    <i class="glyphicon glyphicon-bell"></i>
                    <span>双12全场坚果低至1折，更有隐藏神秘惊喜</span>
                </li>
                <li>
                    <i class="glyphicon glyphicon-bell"></i>
                    <span>果冻最新上线啦</span>
                </li>
                <li>
                    <i class="glyphicon glyphicon-bell"></i>
                    <span>好吃的食物</span>
                </li>

            </ul> -->
            <div id="box">
                <ul id="con1" ref="con1" :class="{anim:animate==true}">
                    <li v-for='item in items' :key="item.id">
                        <i class="glyphicon glyphicon-bell"></i>{{item.name}}</li>
                </ul>
            </div>

        </div>

        <!-- 产品信息 -->
        <div class="product-information">
            <h4>新书上架</h4>
            <ul>
                <li>
                    <img src="static/img/nut_1.jpg" alt="">
                    <p>商品名称</p>
                    <p class="money">$99.9</p>
                </li>
                <li>
                    <img src="static/img/nut_1.jpg" alt="">
                    <p>商品名称</p>
                    <p class="money">$99.9</p>
                </li>
                <li>
                    <img src="static/img/nut_1.jpg" alt="">
                    <p>商品名称</p>
                    <p class="money">$99.9</p>
                </li>
                <li>
                    <img src="static/img/nut_1.jpg" alt="">
                    <p>商品名称</p>
                    <p class="money">$99.9</p>
                </li>
                <li>
                    <img src="static/img/nut_1.jpg" alt="">
                    <p>商品名称</p>
                    <p class="money">$99.9</p>
                </li>
                <li>
                    <img src="static/img/nut_1.jpg" alt="">
                    <p>商品名称</p>
                    <p class="money">$99.9</p>
                </li>
                <li>
                    <img src="static/img/nut_1.jpg" alt="">
                    <p>商品名称</p>
                    <p class="money">$99.9</p>
                </li>
                <li>
                    <img src="static/img/nut_1.jpg" alt="">
                    <p>商品名称</p>
                    <p class="money">$99.9</p>
                </li>
                <li>
                    <img src="static/img/nut_1.jpg" alt="">
                    <p>商品名称</p>
                    <p class="money">$99.9</p>
                </li>
                <li>
                    <img src="static/img/nut_1.jpg" alt="">
                    <p>商品名称</p>
                    <p class="money">$99.9</p>
                </li>
                <li>
                    <img src="static/img/nut_1.jpg" alt="">
                    <p>商品名称</p>
                    <p class="money">$99.9</p>
                </li>
            </ul>
        </div>

    </div>

</template>

<script>
import "swiper-css";
import Swiper from "swiper-js";

export default {
    name: "Swiper",
    mounted() {
        // swiper 轮播图
        var swiper = new Swiper(".swiper-container", {
            //图片间的间隙
            spaceBetween: 1,
            centeredSlides: false,
            autoplay: {
                // 延迟
                delay: 2500,
                disableOnInteraction: false
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
    },
    // 新闻滚动
    data() {
        return {
            animate: false,
            items: [
                //消息列表对应的数组
                { name: "双12全场坚果低至6折，更有隐藏神秘惊喜" },
                { name: "坚果最新上线啦" },
                { name: "好礼无限送" }
            ]
        };
    },
    created() {
        setInterval(this.scroll, 1000); // 在钩子函数中调用我在method 里面写的scroll()方法，注意此处不要忘记加this,我在这个位置掉了好几次坑，都是因为忘记写this。
    },
    methods: {
        scroll() {
            let con1 = this.$refs.con1;
            // con1.style.marginTop='0px';
            this.animate = !this.animate;
            var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
            setTimeout(function() {
                that.items.push(that.items[0]);
                that.items.shift();
                // con1.style.marginTop='0px';
                that.animate = !that.animate; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
            }, 500);
        }
    }
};
</script>


<style lang="scss" scoped>
/* html,
body {
    position: relative;
    height: 100%;
} */
body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

/* 轮播图 */
.swiper-container {
    width: 100%;
    height: auto;
}
.swiper-slide {
    // height: 180px;
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-slide img {
    width: 100%;
    // height: 180px;
}

/* 信息通知 */
.notice {
    font-size: 14px;
    padding: 5px 0;
    border-bottom: 1px solid gainsboro;
    ul {
        height: 21px;
        overflow: hidden;
        li {
            height: 21px;
        }
    }
}

/* 产品信息 */
.product-information ul li {
    width: 50%;
    text-align: center;
    float: left;
}

.product-information img {
    width: 70%;
}
.product-information ul li .money {
    color: red;
}
</style>