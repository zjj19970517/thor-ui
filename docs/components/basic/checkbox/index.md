# Checkbox 多选

在一组备选项中进行多选。

## 基础用法

:::demo 使用 `demo`、`plain`、`round` 和 `circle` 来定义按钮的样式。

```vue
<template>
  <div class="button-demo-container-1">
    <TTCheckbox  v-model="checked1"  label="Option 1" size="large" />
    <TTCheckbox  v-model="checked2" label="Option 2" size="large" />
  </div>
</template>

<script>
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    setup() {

      const checked1 = ref(false);
      const checked2 = ref(true);

      return {
        checked1,
        checked2,
      }
    }
  })
  </script>

<style lang="css" scoped>
.button-demo-container-1 .tt-btn {
  margin: 0 10px 0 0;
}
</style>
```

:::

