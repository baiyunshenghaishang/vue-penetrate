<template>
    <div>
        <div class="scroll">
            <div class="content">
                123
            </div>
        </div>
        <div ref="mask" class="mask" v-penetrate>
            <!-- <div class="innerBOx"> -->
            <!-- <div class="maskcontent"> -->
            <!-- <li v-for="n in 30" :key="n">{{n}}</li> -->
            <!-- </div> -->
            <!-- </div> -->
            <!-- <div class="bottom"></div> -->
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
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    background: rgba(0, 0, 0, 0.3);
}
.innerBOx {
    box-sizing: border-box;
    height: 100%;
    overflow: auto;
}
.maskcontent {
}
.bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: red;
}
</style>
