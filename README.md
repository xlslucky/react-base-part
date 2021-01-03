# react-base-part

## 颜色设置

> 样式优先级 ConfigProvider variables > document.body variables > 内置 variables

### 使用内置颜色

```js
import { ConfigProvider } from 'rbp-base-part'

...

return (
  <ConfigProvider>{children}</ConfigProvider>
)
```

### 自定义颜色

```css
body {
  --primary: #13c2c2;
  --primary-light: #e6fffb;
  --danger: #f5222d;
  --danger-light: #ffeaea;
  --warn: #fadb14;
  --warn-light: #fefbeb;
  --success: #52c41a;
  --success-light: #efffe8;
}
```