import { Crewmate } from '@/enums/Crewmate.enum'
import { reactive } from 'vue'

const initialCrewmates = [
  Crewmate.Red,
  Crewmate.Blue,
  Crewmate.Green,
  Crewmate.Yellow,
  Crewmate.Orange,
  Crewmate.Black,
  Crewmate.White,
  Crewmate.Purple,
  Crewmate.Cyan,
  Crewmate.Lime
]

type Suspects = Record<Crewmate, number>

const initialSuspects = initialCrewmates.reduce((acc, crewmate) => {
  acc[crewmate] = 0
  return acc
}, {} as Suspects)

export const useNotebook = () => {
  const suspects = reactive({ ...initialSuspects })
  const crewmates = initialCrewmates
  const suspect = (crewmate: Crewmate) => {
    suspects[crewmate]++
  }
  const clear = () => {
    for (const crewmate of initialCrewmates) {
      suspects[crewmate] = 0
    }
  }

  return {
    crewmates,
    suspects,
    suspect,
    clear
  }
}
