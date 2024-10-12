import api from '../../config/api';

export const coursesService = {
    get: (id) => api.get(`/courses/${id}`),
    getAll: () => api.get('/courses'),
    getProgress: (id) => api.get(`/courses/progress/${id}`),
    saveProgress: (id, progress) => api.post(`/courses/progress/${id}`, { progress }),
    //create: () => api.post('/courses/create', {}),
    //delete: (id) => api.delete(`/courses/delete/${id}`),
};