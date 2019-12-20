---
title: Getting Started
---

## Introduction

Vigour - A UI components libaray based on Vue 2.x . It's SSR Friendly.

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
