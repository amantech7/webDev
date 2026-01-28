import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCounterStore = create(
  persist(
    (set) => ({
      count: 0,

      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      plus5: () => set((state) => ({ count: state.count + 5 })),
      minus5: () => set((state) => ({ count: state.count - 5 })),
      reset: () => set({ count: 0 }),
    }),

    {
      name: 'counter-storage', // it will store count in localStorage
    }
  )
)

export { useCounterStore }
