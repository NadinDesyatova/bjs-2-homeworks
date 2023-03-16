// Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }

    let result = func(...args);
    cache.push({hash, value: result});
    if (cache.length > 5) { 
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper; 
}

// Задача № 2
function debounceDecoratorNew(func, delay) {
  let isThrottled = false;
  let timeoutId = null;
  function wrapper(...args) { 
    wrapper.allCount++;  
    if (timeoutId === null) {
      wrapper.count++;
      timeoutId = 0;
      return func(...args);
    } 
    isThrottled = true;

    timeoutId = setTimeout(() => {
      isThrottled = false;
      wrapper.count++;
      return func(...args);
    }, delay);

    if (isThrottled) {
      return;
    }
  }

  wrapper.allCount = 0;
  wrapper.count = 0;
  
  return wrapper;
}
