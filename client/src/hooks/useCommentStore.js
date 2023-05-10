import { create } from "zustand";
import axios from "axios";

const useCommentStore = create((set) => ({
  comments: [],
  loading: false,
  error: null,
  fetchComments: async (id) => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get(
        `http://localhost:5000/api/suggestion/getSuggestions/${id}`
      );
      set({ comments: response.data, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
  postComment: async ({suggestion, userId, projectId}) => {
    try {
      set({ loading: true, error: null });
      await axios.post(`http://localhost:5000/api/suggestion/addSuggestion`, {
        suggestion,
        userId,
        projectId
      });
      set({ loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
}));

export default useCommentStore;
