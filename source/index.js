export default {
    inserted: function(bindEl) {
        let lastY = -1,
            findEl = function(el) {
                // 查找滚动元素，取第一个overflow是auto或者scroll的元素
                if (el.nodeType !== 1) return null
                let overflowAttrs = ['scroll', 'auto'],
                    check =
                        overflowAttrs.indexOf(
                            window.getComputedStyle(el).overflow.toLowerCase()
                        ) > -1
                if (check) return el
                if (!el.hasChildNodes()) return null
                for (let i = 0; i < el.childNodes.length; i++) {
                    let result = findEl(el.childNodes[i])
                    if (result) {
                        return result
                    }
                }
                return null
            },
            el = null,
            isChildOfEl = function(el, node) {
                if (el === node) return true
                if (el.nodeType !== 1) return false
                for (let i = 0, nodes = el.childNodes; i < nodes.length; i++) {
                    if (node === nodes[i]) {
                        return true
                    }
                    if (isChildOfEl(nodes[i], node)) {
                        return true
                    }
                }
                return false
            }
        bindEl.addEventListener('touchmove', function(e) {
            // 如果触发touchmove的元素不是el，直接阻止，主要是处理滚动区域不是全屏的情况
            if (!el) {
                el = findEl(bindEl) || bindEl
            }
            if (!isChildOfEl(el, e.target)) {
                e.preventDefault()
                return
            }
            let scrollHeight = el.scrollHeight,
                offsetHeight = el.offsetHeight
            if (scrollHeight === offsetHeight) {
                e.preventDefault()
                return
            }
            let scrollTop = el.scrollTop,
                touchY = e.changedTouches[0].screenY,
                up = touchY <= lastY, // 手势往上滑动
                down = touchY >= lastY,
                arrivedTop = scrollTop <= 0,
                arrivedBottom = scrollHeight - scrollTop <= offsetHeight
            if (lastY === -1) {
                lastY = touchY
                return
            }
            lastY = touchY
            if (up && arrivedBottom) {
                e.preventDefault()
                return
            }
            if (down && arrivedTop) {
                e.preventDefault()
                return
            }
        })
        bindEl.addEventListener('touchend', function() {
            lastY = -1
        })
    },
}
