export default {
  scrollToPosition(sTop: number) {
    let top = 0;
    let scrollId = null;
    const scrollToTop = () => {
      top = document.documentElement.scrollTop || document.body.scrollTop
      scrollId = window.requestAnimationFrame(scrollToTop)
      window.scrollTo(0, sTop)
      if (top === sTop) {
        window.cancelAnimationFrame(scrollId)
      }
    }
    scrollToTop();
  },
}