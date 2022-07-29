/*
 * @Author: WuGuang
 * @Date: 2022-07-28 14:37:43
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
 */

export const onFocusDerective = (app) => {
  app.directive('focus', {
    mounted(el) {
      el.focus();
    }
  })
}
