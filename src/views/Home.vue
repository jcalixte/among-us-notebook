<template>
  <div class="home">
    <Notebook />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Notebook from '@/components/Notebook.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Notebook
  }
})
</script>
