<template>
  <div>
    <Fashion />
  </div>
</template>

<script>
const Fashion = () => import('./shop/fashion-2')
export default {
  components: {
    Fashion
  }
}
</script>
