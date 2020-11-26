<template>
  <button class="button" @click="clear">
    Nouvelle partie
  </button>
  <div class="notebook">
    <div v-for="crewmate in crewmates" :key="crewmate" class="crewmate">
      <Crewmate
        :color="crewmate"
        :is-suspected="suspects[crewmate] > 0"
        @suspect="suspect"
      />
      <div class="gommettes">
        <div v-for="suspected in suspects[crewmate]" :key="suspected">
          🔴
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useNotebook } from './useNotebook.hook'
import Crewmate from '@/components/Crewmate.vue'

export default defineComponent({
  name: 'Notebook',
  components: {
    Crewmate
  },
  setup() {
    const { crewmates, suspects, suspect, clear } = useNotebook()
    const hasGameStarted = computed(() =>
      Object.values(suspects).some((s) => s > 0)
    )

    return {
      crewmates,
      suspects,
      suspect,
      clear,
      hasGameStarted
    }
  }
})
</script>

<style scoped lang="scss">
.notebook {
  .crewmate {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .gommettes {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
