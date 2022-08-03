/*
 * @Author: WuGuang
 * @Date: 2022-08-02 17:21:44
 * @Description:;
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
 */
export default {
  todoListsA: ({listA}) => id => {
    return listA.filter(list => list === id);
  }
}
