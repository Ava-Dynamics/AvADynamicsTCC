import api from '../../config/api';

export const postsService = {
    getAll: () => api.get("/posts"),
    create: (content) => api.post("/posts", { content }),
};