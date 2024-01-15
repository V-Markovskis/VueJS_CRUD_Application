import axios from "axios";

export const deleteData = async (id: string) => {
  try {
    await axios.delete(`http://localhost:3000/vikings/${id}`);
  } catch (error) {
    console.error("Error deleting data: ", error);
  }
};
