# Vigour

```
        _                       
 _   __(_)___ _____  __  _______
| | / / / __ `/ __ \/ / / / ___/
| |/ / / /_/ / /_/ / /_/ / /    
|___/_/\__, /\____/\__,_/_/     
      /____/                    
```

[![Build Status](https://www.travis-ci.org/mokunshao/vigour.svg?branch=master)](https://www.travis-ci.org/mokunshao/vigour)
[![codecov](https://codecov.io/gh/mokunshao/vigour/branch/master/graph/badge.svg)](https://codecov.io/gh/mokunshao/vigour)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/78e34ea31e8f44d9b0909ff68e0750e6)](https://www.codacy.com/manual/mokunshao/vigour?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mokunshao/vigour&amp;utm_campaign=Badge_Grade)

## Introduction

Vigour is a UI component libaray based on Vue.js (currently compatible with Vue.js 2.X). It's SSR-friendly. For more information, please refer to the [documentation](https://mokunshao.github.io/vigour/).

Thank you for using Vigour. I will try my best to make it better.

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

* https://cdn.jsdelivr.net/npm/vigour/dist/vigour.umd.js
* https://cdn.jsdelivr.net/npm/vigour/dist/vigour.css

## Installation

You can install it using npm:

```
npm install vigour
```

Or use yarn to install:

```
yarn add vigour
```

## Usage

### Import CSS

```javascript
import 'vigour/dist/vigour.css';
```

### Import All Components

```javascript
import vigour from 'vigour';
Vue.use(vigour);
```

### Import on Demand

```javascript
import {button} from 'vigour';
Vue.component(button.name,button);
```

When you want to use Notification and Toast when using on-demand import, you need to import them in the following ways

```javascript
import {notification} from 'vigour';
Vue.use(notification);
```

```javascript
import {toast} from 'vigour';
Vue.use(toast);
```
