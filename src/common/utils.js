//前端防抖
export function debounce(fn, delay){
  console.log(fn);
  let timer = null;
  return function(...args){
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func && func.apply(this, args);
    }, delay)
  }
}
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};

export function combination(arr, m) {
  let r = [];
  _([], arr, m);
  return r;
  function _(t, a, m) {
    //t:临时数组 a:目标数组 m：多少个数进行组合
    if (m === 0) {
      r[r.length] = t;//相当于push
      return;
    }
    for (let i = 0; i <= a.length - m; i++) {
      //从0开始 到n-m

      let b = t.slice();//将t赋值给b 不能用=赋值，使用slice会形成新的数组赋值
      b.push(a[i])
      _(b, a.slice(i + 1), m - 1);
    }
  }
}

