import axios from 'axios';

export default {
    getContractors: () => {
        return axios.get('/api/contractors')
    },
    searchConsultants: (occupation) => {
        return axios.post('/search', { occupation: occupation })
    },
    addContractorToDB: (searchData) => {
        return axios.post('/api/contractors', searchData)
    },
    deleteContractor: (id) => {
        return axios.delete(`/api/contractors/${id}`)
    }
}