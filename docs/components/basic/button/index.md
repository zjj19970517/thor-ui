---
layout: doc
---

# Button 按钮

常用的操作按钮。

## 基础用法

:::demo 使用 `demo`、`plain`、`round` 和 `circle` 来定义按钮的样式。

```vue
<template>
  <div class="button-demo-container-1">
    <TTButton type="primary">Primary按钮</TTButton>
    <TTButton type="success">Success按钮</TTButton>
    <TTButton type="warning">Warning按钮</TTButton>
    <TTButton type="danger">Danger按钮</TTButton>
    <TTButton type="info">Info按钮</TTButton>
  </div>
</template>

<style lang="css" scoped>
.button-demo-container-1 .tt-btn {
  margin: 0 10px 0 0;
}
</style>
```

:::
