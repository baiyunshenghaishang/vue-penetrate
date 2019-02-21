export default {
    bind: function(el) {
        let lastY = -1
        el.addEventListener('touchmove', function(e) {
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
        el.addEventListener('touchend', function() {
            lastY = -1
        })
    },
}
