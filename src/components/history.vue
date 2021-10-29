<template>
  <div>
    <div style="text-align: center">
      <span v-for='item in data' :key='item.id'>
        {{ item.content }}<br />
        {{ item.title }}
      </span>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
      data() {
        return { data: [] };
      },
      created() {
        this.historyData();
      },
      methods: {
        historyData() {
          axios.get("http://127.0.0.1:3000/history").then((res) => {
            this.data = res.data;
          });
        },
      },
};
</script>

<style lang="scss" scoped></style>
