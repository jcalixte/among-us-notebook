<template>
  <button class="button" @click="clear">
    Nouvelle partie
  </button>
  <div class="notebook">
    <div v-for="crewmate in crewmates" :key="crewmate" class="crewmate">
      <Crewmate
        :color="crewmate"
        :is-suspected="suspects[crewmate] > 0"
        :is-playing="suspects[crewmate] < 3"
        @suspect="suspect"
      />
      <div class="gommettes">
        <div
          v-for="suspected in suspects[crewmate]"
          :key="suspected"
          class="gommette"
        ></div>
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
$size: 20px;
$gommette_color: #b71540;

.notebook {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .crewmate {
    align-items: center;
    position: relative;

    .gommettes {
      position: absolute;
      top: 1rem;
      right: 1rem;

      .gommette {
        width: $size;
        height: $size;
        background-color: $gommette_color;
        border-radius: $size / 2;
        margin: 5px;
      }
    }
  }
}
</style>
