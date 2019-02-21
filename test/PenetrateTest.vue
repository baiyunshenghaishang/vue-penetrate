<template>
    <div>
        <div class="scroll">
            <div class="content">
                123
            </div>
        </div>
        <div ref="mask" class="mask" v-penetrate>
            <div class="maskcontent">maskcontent</div>
        </div>
    </div>
</template>

<script>
import penetrate from '../source/index.js'
export default {
    name: 'PenetrateTest',
    directives: {
        penetrate,
    },
}
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
}
.scroll {
    height: 100vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.content {
    height: 200vh;
    background: linear-gradient(to bottom, #fff, #ff0000);
}
.mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background: rgba(0, 0, 0, 0.3);
}
.maskcontent {
    height: 200vh;
}
</style>
