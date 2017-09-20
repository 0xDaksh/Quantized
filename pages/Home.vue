<template>
  <el-button
    plain
    @click="open3">
    Success
  </el-button>
</template>

<script>
  export default {
    methods: {
      open3() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      }
    }
  }
</script>