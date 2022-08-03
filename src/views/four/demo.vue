<!--
 * @Author: WuGuang
 * @Date: 2022-08-03 15:27:58
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
-->
<template>
  123456局部组件
  <slot name="footer"></slot>
  <slot></slot>
</template>

<script>
  export default {
    props: ['message']
  }
</script>
