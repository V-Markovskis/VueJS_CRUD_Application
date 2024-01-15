import axios from "axios";
import type { IViking } from "@/models/viking";

export const getSingleData = async (
  id: string,
): Promise<IViking | undefined> => {
  try {
    const response = await axios.get(`http://localhost:3000/vikings/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching single record: ", error);
  }
};
