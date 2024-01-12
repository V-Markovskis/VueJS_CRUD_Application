import axios from "axios";
import type { IViking } from "@/models/viking";

const getAllData = async (): Promise<IViking[]> => {
  try {
    const response = await axios.get("http://localhost:3000/vikings");
    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
    return [];
  }
};

export default getAllData;
