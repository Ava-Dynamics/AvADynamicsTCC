import api from '../../config/api';

export const userService = {
    get: () => api.get('/users'),
    getAll: () => api.get('/users/all'),
    getScore: () => api.get('/users/score'),
    getMedals: () => api.get('/users/medals'),
    receiveMedal: (name) => api.post('/users/medals', { name }),
    getJourney: () => api.get('/users/journey'),
    find: (name, email) => {
        const params = new URLSearchParams();
        if (name) { params.append('name', name) }
        if (email) { params.append('email', email) }
        return api.get('/users/find', params);
    },
    getFollowing: () => api.get('/users/following'),
    follow: (id, supertokenId) => api.post('/users/follow', { id, supertokenId }),
    update: (data) => api.post('/users/profile', data),
    //delete: () => api.delete()
};