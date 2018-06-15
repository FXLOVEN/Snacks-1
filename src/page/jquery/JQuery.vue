<template>
    <div class="container">
        <div class="test">测试字符串</div>
    </div>
</template>

<script>
export default {
    name: "test",
    mounted() {
        $('.test').css({
            'font-size': '32px',
            'color': '#f00'
        });
    }
};
</script>

<style scoped>

</style>
