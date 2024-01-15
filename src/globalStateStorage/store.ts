import { defineStore } from "pinia";
import type { IViking } from "@/models/viking";

export const useVikingsStore = defineStore("vikings", {
  state: () => ({
    vikings: [] as IViking[],
  }),
});
