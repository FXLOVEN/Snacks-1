<template>
    <div class="content">
        <div class="car-null">
            <button class="layui-btn layui-btn-primary">不哭，马上去逛逛</button>
        </div>

    </div>
</template>

<script>
import "layui-css";
// import Layui from "layui-js";

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
    background-color: #efefef;
}

.car-null {
    width: 100%;
    height: 400px;
    background: url("/static/img/car-null.jpg") no-repeat center;
    position: relative;
    button {
        position: absolute;
        top: 83%;
        width: 70%;
        left: 16%;
        border-radius: 5px;
    }
}
</style>