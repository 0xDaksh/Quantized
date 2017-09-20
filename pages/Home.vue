<template>
  <el-button
    plain
    @click="open3">
    Success
  </el-button>
  <el-button
    plain
    @click="open4">
    Warning
  </el-button>
  <el-button
    plain
    @click="open5">
    Info
  </el-button>
  <el-button
    plain
    @click="open6">
    Error
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
      },

      open4() {
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message'
        });
      },

      open6() {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
      }
    }
  }
</script>