vue的防止穿透指令

主要用于遮罩层，用于阻止遮罩层下元素滚动。
**使用阻止`touchmove`事件方式阻止滚动，遮罩层如需使用`touchmove`事件，请勿使用**

[github地址](https://github.com/baiyunshenghaishang/vue-penetrate)

### 使用方式

```
    npm install penetrate
```

```javascript
    // 定义组件内指令,在组件中
    import penetrate from "penetrate";
    directives: {
        penetrate 
    },
    // 或者定义全局指令,在入口文件中
    import penetrate from "penetrate";
    Vue.directive('penetrate', penetrate)
```
```html
    <!-- 定义指令后在模板中使用 -->
    <div v-penetrate></div>
```