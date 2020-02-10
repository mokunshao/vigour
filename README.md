# Vigour

```
        _                       
 _   __(_)___ _____  __  _______
| | / / / __ `/ __ \/ / / / ___/
| |/ / / /_/ / /_/ / /_/ / /    
|___/_/\__, /\____/\__,_/_/     
      /____/                    
```

## Introduction 介绍

[![Build Status](https://www.travis-ci.org/mokunshao/vigour.svg?branch=master)](https://www.travis-ci.org/mokunshao/vigour)
[![codecov](https://codecov.io/gh/mokunshao/vigour/branch/master/graph/badge.svg)](https://codecov.io/gh/mokunshao/vigour)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/78e34ea31e8f44d9b0909ff68e0750e6)](https://www.codacy.com/manual/mokunshao/vigour?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mokunshao/vigour&amp;utm_campaign=Badge_Grade)

Vigour is a UI component libaray based on Vue.js (currently compatible with Vue.js 2.X). It's SSR-friendly. For more information, please refer to the [documentation](https://mokunshao.github.io/vigour/).

Thank you for using Vigour. I will try my best to make it better💪.

`Vigour` 是一个基于 `Vue.js` 的 UI 组件库（目前兼容 `Vue.js` 2.x）。它对服务端渲染（SSR）友好。有关详细信息，请参阅[文档](https://mokunshao.github.io/vigour/)。

感谢你使用 Vigour，我会努力完善它的💪。

## Quick-start CDN

```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/vigour/dist/vigour.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
  <div id="app">
    <vigour-checkbox :value="true">Hello World</vigour-checkbox>
    <vigour-button>Hello World</vigour-button>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vigour/dist/vigour.umd.js"></script>
  <script>
    new Vue({
      el: '#app',
      components:{
        [vigour.checkbox.name]:vigour.checkbox,
        [vigour.button.name]:vigour.button
      }
    })
  </script>
</body>
</html>
```

## CDN Links

* [https://cdn.jsdelivr.net/npm/vigour/dist/vigour.umd.min.js](https://cdn.jsdelivr.net/npm/vigour/dist/vigour.umd.min.js)
* [https://cdn.jsdelivr.net/npm/vigour/dist/vigour.css](https://cdn.jsdelivr.net/npm/vigour/dist/vigour.css)

## Installation 安装

You can install it using `NPM`:

你可以使用 `NPM` 安装：

```
npm install vigour
```

Or use `Yarn` to install:

或者使用 `Yarn` 安装：

```
yarn add vigour
```

## Usage 使用

### Import CSS 引入样式

You can import the CSS style of `Vigour` in the following ways.

通过以下方式，你可以引入 `Vigour` 的 CSS 样式。

```javascript
import 'vigour/dist/vigour.css';
```

### Import All Components 引入所有组件

You can import all the components of `Vigour` in the following ways.

通过以下方式，你可以引入 `Vigour` 的所有组件。

```javascript
import vigour from 'vigour';
Vue.use(vigour);
```

### Import Components on Demand 按需引入组件

You are free to choose the components you need to import in a way similar to the following.

通过类似以下的方式，你可以自由选择需要引入的组件。

```javascript
import { button } from 'vigour';
Vue.component(button.name, button);
```

Please note: in the case of on-demand import, if you want to use `Notification` and `Toast`, you need to import them in the following ways.

请注意：在按需引入的情况下，如果想使用 Notification 和 Toast，你需要通过以下方式引入它们。

```javascript
import {notification} from 'vigour';
Vue.use(notification);
```

```javascript
import {toast} from 'vigour';
Vue.use(toast);
```
