/*
 * @Descripttion:
 * @version:
 * @Author: WuGuang
 */

/**
 * @Description: 防止多次快速点击
 * @Author: WuGuang
 * @param {*}
 */
 export const preventReClick = (app) => {
  app.directive('preventReClick', {
    mounted(el, binding) {
      el.addEventListener('click', () => {
        if (!el.disabled) {
          el.disabled = true;
          setTimeout(() => {
            el.disabled = false;
          }, binding.value || 1000);
        }
      });
    }
  });
};
