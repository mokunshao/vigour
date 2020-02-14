<template>
  <div>
    <vigour-tree
      :data="json"
      :onToggle="onToggle"
      :onClick="onClick"
    ></vigour-tree>
  </div>
</template>

<script>
import { Tree } from '../../../src/components/tree/index';

export default {
  components: {
    [Tree.name]: Tree,
  },
  data() {
    return {
      json: [
        {
          label: '家用电器',
          isExpanded: true,
          id: 1,
          children: [
            {
              label: '电视',
              id: 11,
              isExpanded: true,
              children: [
                {
                  label: '超薄电视',
                  id: 111,
                },
                {
                  label: '全面屏电视',
                  id: 112,
                },
              ],
            },
            {
              label: '空调',
              id: 12,
              children: [
                {
                  label: '中央空调',
                  id: 121,
                },
                {
                  label: '变频空调',
                  id: 122,
                },
              ],
            },
          ],
        },
        {
          label: '电脑',
          id: 2,
          children: [
            {
              label: '电脑整机',
              id: 21,
              children: [
                {
                  label: '笔记本',
                  id: 211,
                },
                {
                  label: '游戏本',
                  id: 212,
                },
              ],
            },
            {
              label: '电脑配件',
              id: 22,
              children: [
                {
                  label: '显示器',
                  id: 221,
                },
                {
                  label: 'CPU',
                  id: 222,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onToggle(data) {
      console.log('onToggle', data);
    },
    onClick(data) {
      console.log('onClick', data);
    },
  },
};
</script>
