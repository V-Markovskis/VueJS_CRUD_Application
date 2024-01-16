import { defineStore } from "pinia";
import type { IViking } from "@/models/viking";
import getAllData from "@/callsToDB/getAllData";

export const useVikingsStore = defineStore("vikings", {
  state: () => ({
    vikings: [] as IViking[],
    editMode: false,
  }),
  actions: {
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
    async getAllData() {
      this.vikings = await getAllData();
    },
  },
});
