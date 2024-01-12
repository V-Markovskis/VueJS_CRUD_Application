import axios from "axios";
import type { IViking } from "@/models/viking";

export const postNewRecord = async (viking: IViking) => {
  try {
    await axios.post("http://localhost:3000/vikings", viking);
  } catch (error) {
    console.error("Error creating movie:", error);
  }
};
