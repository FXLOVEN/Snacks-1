<template>
    <div id="app">
        <!-- 抬头 -->
        <header>
            <div class="title-name text-center ">{{title}}</div>
        </header>

        <router-view/>

        <!-- 导航栏 -->
        <footer>
            <div class="navigation-bar ">
                <ul>
                    <li v-for="(item,index) in navIem" :key="item.id" @click="navBtn(index)">{{item}}</li>
                    <!-- <router-link tag="li" to="/index" exact>首页</router-link>
                    <router-link tag="li" to="/classification" exact>分类</router-link>
                    <router-link tag="li" to="/shoppingCart" exact>购物车</router-link>
                    <router-link tag="li" to="/information" exact>我</router-link> -->
                </ul>
            </div>
        </footer>

    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            navIem: ["首页", "分类", "购物车","空购物车","我","商品详情"]
        };
    },
    created() {
        var url = this.$router.options.routes[1].name;
        this.$router.push({ name: url });
        this.title = this.navIem[0];
    },
    methods: {
        created() {
            this.title = this.navIem[0];
        },
        navBtn(index) {
            var url = this.$router.options.routes[index + 1].name;
            this.$router.push({ name: url });
            this.title = this.navIem[index];
        }
    }
};
</script>

<style lang="scss" >
* {
    box-sizing: border-box;
}
html,
body {
    height: 100%;
    font: normal 16px "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0;
}
#app {
    height: 100%;
}

.content {
    height: calc(100% - 90px);
    overflow-x: hidden;
    overflow-y: auto;
}

ul {
    margin: 0;
    padding: 0;
}
ul li {
    list-style: none;
}

/* 抬头 */
header {
    height: 39px;
}
.title-name {
    line-height: 39px;
    background-color: #fff;
    color: #ff4f39;
}

/* 导航栏 */
footer {
    height: 50px;
}
.navigation-bar {
    background: #fff;
    color: green;
    border-top: 1px solid gainsboro;
}
.navigation-bar ul li {
    float: left;
    // width: 25%;
    margin-left: 2px;
    line-height: 50px;
    text-align: center;
}
</style>
