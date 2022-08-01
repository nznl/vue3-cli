/*
 * @Author: WuGuang
 * @Date: 2022-07-28 14:37:49
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
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
