

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

export function getBrowser() {
  let userAgent = navigator.userAgent.toLowerCase();
  let type = "";
  if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
    type = "Safari";
  } else if (userAgent.includes("chrome")) {
    type = "Chrome";
  } else if (userAgent.includes("opr")) {
    type = "Opera";
  } else if (userAgent.includes("firefox")) {
    type = "Firefox";
  } else if (userAgent.includes("edge")) {
    type = "Edge";
  } else if (userAgent.includes("trident")) {
    type = "IE";
  } else {
    type = "未知";
  }
  return type;
}

export function getSystem() {
  let userAgent = navigator.userAgent.toLowerCase();
  let sys = "";
  if (userAgent.includes("mac")) {
    sys = "Mac";
  } else if (userAgent.includes("win")) {
    sys = "Windows";
  } else if (userAgent.includes("iphone")) {
    sys = "Iphone";
  } else if (userAgent.includes("linux") && userAgent.includes("android")) {
    sys = "Android";
  } else if (userAgent.includes("ipad")) {
    sys = "Ipad";
  } else {
    sys = "未知";
  }
  return sys;
}
