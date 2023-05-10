import { create } from "zustand";
import axios from "axios";

const useProjectsStore = create((set) => ({
  projectData: [],
  loading: false,
  error: null,
  fetchProjectData: async () => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get("http://localhost:5000/api/project/getallprojects");
      set({ projectData: response.data.projects, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
}));

export default useProjectsStore;
