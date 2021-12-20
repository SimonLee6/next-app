

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

export function formatDay(timeStr: number) {
  const oneMin = 1000 * 60;
  const oneHour = oneMin * 60;
  const oneDay = oneHour * 24;
  const oneYear = oneDay * 365;
  let diffTime;
  let years;
  let days;
  let hours;
  let min;
  years = Math.floor(timeStr / oneYear);
  diffTime = timeStr - years * oneYear;
  days = Math.floor(diffTime / oneDay);
  diffTime = diffTime - days * oneDay;
  hours = Math.floor(diffTime / oneHour);
  diffTime = diffTime - hours * oneHour;
  min = Math.floor(diffTime / oneMin);
  diffTime = diffTime - min * oneMin;
  return ` ${years} 年 ${days} 天 ${hours} 小时 ${min} 分钟 ${Math.floor(
    diffTime / 1000
  )} 秒`;
}
