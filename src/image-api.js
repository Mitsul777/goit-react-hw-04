import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/';

const fetchImages = async (searchQuery, page) => {
    const response = await axios.get('search/photos', {
        params: {
            query: searchQuery,
            page,
            client_id: '4o3r31pahed4kQ-Bg_HjhMGEuPwSA3QwLU0pMDIlgqQ',
            per_page: 10,
        }
    });
    return response.data;
};

export default fetchImages;
