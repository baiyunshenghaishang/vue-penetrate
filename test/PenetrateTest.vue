<template>
    <div>
        <div class="scroll">
            <div class="scontent">
                123
            </div>
        </div>
        <div class="multiChooseContent" v-penetrate>
            <div class="content">
                <div class="innerContent">
                    <li v-for="n in 40" :key="n">{{ n }}</li>
                </div>
                <div class="btn-box flex"></div>
            </div>
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
.scontent {
    height: 200vh;
    background: linear-gradient(to bottom, #fff, #ff0000);
}
.multiChooseContent {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.3);
}
.content {
    box-sizing: border-box;
    position: absolute;
    top: 40vw;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 4%;
}
.innerContent {
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
</style>
