import axios from "axios";
import type { IViking } from "@/models/viking";

export const editData = async (viking: IViking, id: string) => {
  try {
    await axios.put(`http://localhost:3000/vikings/${id}`, viking);
  } catch (error) {
    console.error("Failed to update data: ", error);
  }
};
