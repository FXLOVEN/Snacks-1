<template>
    <div class="contion">
		<header data-am-widget="header" class="am-header am-header-default sq-head ">
			<div class="am-header-left am-header-nav">
				<a href="javascript:history.back()" class="">
					<i class="am-icon-chevron-left"></i>
				</a>
			</div>
			<h1 class="am-header-title header-t">
  	            <a href="" class="">商品详情</a>
            </h1>
	    </header>
	    <!--图片轮换-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="static/img/shangping/preserves/exhibition/preserves_1.jpg" alt="" srcset=""></div>
                <div class="swiper-slide"><img src="static/img/shangping/preserves/exhibition/preserves_1.jpg" alt="" srcset=""></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> -->
        </div>        
		<div class="detal-info">
			<p>超级无敌好吃的草莓干</p>
			<h2>商城价：<span>￥52.00</span></h2>
		</div>
		<div class="d-amount">
        	<h4>数量：</h4>
            <div class="d-stock">
              <a class="decrease">-</a>
                <input id="num" readonly="" class="text_box" name="" type="text" value="1">
                <input id="id" type="hidden" value="644">
                <a class="increase">+</a>
               <span id="dprice" class="price" style="display:none"> 36</span>
            </div>
        </div>
        <div style="background: #eee; height: 10px;"></div>
        <div class="am-tabs detail-list" data-am-tabs>
		  <ul class="am-tabs-nav am-nav am-nav-tabs">
		    <li class="am-active"><a href="#tab1">商品详情</a></li>
		    <li><a href="#tab2">商品评论</a></li>
		  </ul>
		
		  <div class="am-tabs-bd">
		    <div class="am-tab-panel am-fade am-in am-active detail " id="tab1" >
		            <p class="origin"><span class="origin-t">产地：</span>中国大陆</p>
                    <p class="origin"><span class="origin-t">重量：</span>150克/包</p>
                    <p class="origin-t origin-b">保质期：2年</p>
                    <img src="static/img/shangping/preserves/details/preserves_1_details_1.jpg" />
                    <img src="static/img/shangping/preserves/details/preserves_1_details_2.jpg" />
                    <img src="static/img/shangping/preserves/details/preserves_1_details_3.jpg" />
                    <img src="static/img/shangping/preserves/details/preserves_1_details_4.jpg" />
                    <img src="static/img/shangping/preserves/details/preserves_1_details_5.jpg" />
                    <img src="static/img/shangping/preserves/details/preserves_1_details_6.jpg" />
                    <img src="static/img/shangping/preserves/details/preserves_1_details_7.jpg" />
		    </div>
		    <div class="am-tab-panel am-fade detail " id="tab2">
		         <div class="comment">
		         	<span>好评：</span>
		         	<div class="com-good"></div>
		         	<span>100%</span>
		         </div>
		         <div class="comment">
		         	<span>中评：</span>
		         	<div class="com-bad"></div>
		         	<span>0%</span>
		         </div>
		         <div class="comment">
		         	<span>差评：</span>
		         	<div class="com-bad"></div>
		         	<span>0%</span>
		         </div>
		         <ul class="comment-list">
		           <li><a href="">全部</a></li>
		           <li><a href="">好评（20）</a></li>
		           <li><a href="">中评（5）</a></li>
		           <li><a href="">差评（0）</a></li>
		         </ul>
		         <ul class="comment-pic">
		         	<li>
		         		<div class="tit">
		         			<img src="images/tx.png" class="tx" />
		         			<span>这个仙女不太冷</span>
		         			<i> [2016-01-01]</i>
		         		</div>
		         		<div class="comment-con">
		         			听说很好吃
		         		</div>
		         	</li>
		         	<li>
		         		<div class="tit">
		         			<img src="images/tx.png" class="tx" />
		         			<span>盖世英雄少女心</span>
		         			<i> [2016-01-01]</i>
		         		</div>
		         		<div class="comment-con">
		         			他家保证不好吃不要钱~
		         		</div>
		         	</li>
		         </ul>
		    </div>
		  </div>
		</div>
		
		
		<!--底部-->
 <div style=" height: 55px;"></div>
 <ul class="fix-shopping">
 	<li><a href="#" class="join">加入购物车</a></li>
 	<li><a href="#" class="imm-buy">立即购买</a></li>
 </ul>
 
    </div>
</template>

<script>
    import "layui-css";
    import "swiper-css";
    import Swiper from "swiper-js";
    import "layui-css";
    import "amazeui-css";
    import Amazeui from "amazeui-js";   
        // import Layui from "layui-js";

    export default {
        name: "test",
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
        data() {
            return {
                msg: ""
            };
        }
    };
        //购物数量加减
        $(function(){
            $('.increase').click(function(){
                var self = $(this);
                var current_num = parseInt(self.siblings('input').val());
                current_num += 1;
                self.siblings('input').val(current_num);
                update_item(self.siblings('input').data('item-id'));
            })		
            $('.decrease').click(function(){
                var self = $(this);
                var current_num = parseInt(self.siblings('input').val());
                if(current_num > 1){
                    current_num -= 1;
                    self.siblings('input').val(current_num);
                    update_item(self.siblings('input').data('item-id'));
                }
            })
        })
    </script>

    <style lang="scss" scoped>
    body { padding: 0; margin: 0;}
    ol,ul,li {padding: 0;  margin: 0; list-style: none}
    h2,h3,h4,h5,ul,li,p,hr {padding: 0;margin: 0;}
    input {outline: none;}
    html{ padding: 0; margin: 0;}
    html,body{ height:100%}
    .sq-head{ background: #ff5500; position: fixed; top: 0; z-index: 9999; left: 0;}
    .sq-foot{background: #eee; color: #a4a4a4;}
    .content-list{border-top: 1px solid #ddd; margin-top: -1px;}
    .detal-info{ padding: 0 3%; color: #666; overflow: hidden;}
    .am-slider-default { text-align: center;}
    .am-slider-default .am-active{ background: #fdb325;}
    .am-slider-default .am-control-nav li a{ border: 0; width: 10px; height: 10px;}
    .am-slider-default .am-direction-nav .am-prev{ display: none;}
    .am-slider-default .am-direction-nav .am-next{ display: none;}
    .am-slider-default .am-control-nav{ bottom: 10px; }
    .am-slider-default .am-control-nav li a.am-active{  background: #cc6b17;} 
    .am-slider-default .am-control-nav li a{ background: #fff; border: 1px solid #cc6b17;}
    .am-slider-default{ margin: 0;}
    .decrease,.increase{
        text-decoration:none;
    }
    .header-t{
        font-size: 22px;
        line-height: 50px;
    }
    .detal-info p{ 
        line-height: 40px; 
        font-size: 20px;
    }
    .detal-info h2{ font-weight: normal;font-size: 18px;margin-top:12px;}
    .detal-info h2 span{ color: #ea5115;}
    .d-amount{
        padding: 0 3%;
        color: #666; 
        overflow: hidden;
    }
    .d-amount h4 {
        float: left;
        font-weight: normal;
        font-size: 18px;
        line-height: 2.5rem;
        margin-top: 12px;
        letter-spacing:8.4px;
        
    }
    .d-amount .d-stock .decrease {
        position: absolute;
        left: 0;
        width: 30%;
        height: 30px;
        
        display: block;
        border: 1px solid #ddd;
        text-align: center;
        line-height: 1.8rem;
        font-size: 16px; color: #666;
    }
    .d-amount .d-stock {
        float: left;
        width: 35%;
        height: 1.8rem;
        position: relative;
        margin: 1.0rem -1%;
    
    }
    .d-amount .d-stock input {
        position: absolute;
        left: 30%;
        width: 40%;
        height: 30px;
        border: 1px solid #ddd;
        border-left: none;
        border-right: none;
        text-align: center;
    }
    .d-amount .d-stock .increase {
        position: absolute;
        right: 0;
        width: 30%;
        height: 30px;
        display: block;
        border: 1px solid #ddd;
        text-align: center;
        line-height: 1.8rem;
        font-size: 16px;
        color: #666;
    }
    .detail img{ 
        width: 100%;
    }
    .origin{
        font-size: 15px;
        margin-top: 5px;
        line-height: 25px;
    } 
    .origin-t{
        letter-spacing:5px;
    }
    .origin-b{
        margin-bottom: 10px;
    }   
    .fix-shopping{ 
        position: fixed;  
        bottom: 0px; 
        width: 100%; 
        border-top: 1px 
        solid #ddd; 
        padding: 15px 0; 
        background: #fff; 
        z-index: 999;
    }
    .fix-shopping li{ 
        float: left; 
        width: 50%; 
        text-align: center;
    }
    .fix-shopping li a{ 
        width: 70%; 
        margin: 0 auto; 
        border-radius: 15px; 
        display: block; 
        padding: 5px 0;
    }
    .join{ 
        background: #959595; 
        color: #fff;
    }
    .imm-buy{ 
        background: #ff5500; 
        color: #fff;
    }
    .am-tabs{ 
        overflow: hidden;
    }
    .detail-list{ 
        padding: 15px 0;
    }
    .am-nav-tabs>li{ 
        margin-left: 3%; 
        margin-bottom: 0;
    }
    .am-nav-tabs>li.am-active>a, .am-nav-tabs>li.am-active>a:focus, .am-nav-tabs>li.am-active>a:hover{
         color: #f90505;
    }
    .am-nav-tabs>li>a{ 
        color: #666;
    }
    .comment { 
        overflow: hidden; 
        padding: 2px 3%; 
        color: #666; 
    }
    .comment span{ float: left;}
    .com-good { 
        margin-right: 10px; 
        margin-top: 8px; 
        float: left; 
        background: #cd6a17; 
        border-radius: 15px; 
        height: 1rem; 
        width: 60%;
    }
    .com-bad{ 
        margin-right: 10px; 
        margin-top: 8px;
        float: left; 
        border:1px solid #cd6a17;
        border-radius: 15px; height: 1rem; 
        width: 60%;
    }
    .comment-list li{ 
        float: left; 
        padding: 0 10px; 
        color: #666; 
        border-right: 1px solid #ddd;
    }
    .comment-list li:last-child{ border-right: 0;}
    .comment-list li a{ 
        color: #666; 
        font-size: 1.4rem;
    }
    .comment-list{ 
        margin-top: 1rem; 
        background: #f2f2f2; 
        overflow: hidden; 
        padding: 10px 0;
    }
    .am-tabs-bd .am-tab-panel{ 
        padding: 10px 0;
        }
    .comment-pic{ 
        margin:15px 3%; 
        overflow: hidden;
    }
    .comment-pic li{ 
        border: 1px solid #ddd; 
        margin: 10px 0; 
        overflow: hidden;
    }
    .comment-pic .tit{ 
        height: 35px; 
        background: #f2f2f2;
    }
    .comment-pic .tx{ 
        width: 2rem; 
        height: 2rem;  
        margin: 5px 0 0 5px; 
        float: left;
        }
    .comment-pic .tit span{ 
        color: #c79d0d; 
        line-height: 35px; 
        display: block; 
        float: left; 
        margin-left: 3%;
        }
    .comment-pic .tit i{ 
        font-style: normal; 
        color: #9b9b9b; 
        float: right; 
        padding-right: 3%; 
        line-height: 35px; 
        display: block;
    }
    .comment-con{ 
        padding: 15px 5%; 
        color: #707070; 
        background: #f7f7f7;
    }
    .detail p{ margin: 0 3%;}
</style>