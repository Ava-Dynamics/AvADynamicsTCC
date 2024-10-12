import api from '../../config/api';

export const newspaperService = {
    getAll: (page, quantity) => {
        const params = new URLSearchParams();
        if (page) { params.append('page', page) }
        if (quantity) { params.append('quantity', quantity) }
        return api.get('/newspapers');
    }
};