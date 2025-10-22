import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
 
const modeAtom = atomWithStorage("mode", "lightMode")
 
export function useMode() {
    return useAtom(modeAtom)
}