<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>icon</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="icon in iconList" :key="icon">
          <th>{{ icon }}</th>
          <th>
            <vigour-icon :name="icon"></vigour-icon>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import icon from '../../../src/components/icon';

export default {
  components: {
    [icon.name]: icon
  },
  data() {
    return {
      iconList: ['caution', 'clear', 'download', 'info', 'left', 'loading', 'right', 'settings', 'thumbs-up', 'upload']
    }
  },
}
</script>
