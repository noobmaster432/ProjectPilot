import { create } from "zustand";
import axios from "axios";

const useProjectDetailStore = create((set) => ({
  project: [],
  loading: false,
  error: null,
  fetchProjectData: async (id) => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get(
        `http://localhost:5000/api/project/getproject/${id}`
      );
      set({ project: response.data?.project, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
}));

export default useProjectDetailStore;
