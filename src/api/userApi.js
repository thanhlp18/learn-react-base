import axiosClient from "./axiosClient";

const userApi = {
    getAll(params) {
        const url = '/userApi';
        return axiosClient.get(url, { params })
    },

    get(id) {
        const url = `/userApi/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = `/userApi`;
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/userApi/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/userApi/${id}`;
        return axiosClient.delete(url);
    }
};

export default userApi;