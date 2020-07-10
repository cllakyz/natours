import axios from 'axios';
import { showAlert } from "./alerts";

// type is either 'password' pr 'data'
export const updateSettings = async (data, type) => {
    try {
        const url = type === 'password' ? 'updateMyPassword' : 'updateMe';

        const res = await axios({
            method: 'PATCH',
            url: `/api/v1/users/${url}`,
            data
        });

        if (res.data.status === 'success') {
            showAlert('success', `${type.toUpperCase()} updated successfully.`);
        }

    } catch (e) {
        showAlert('error', e.response.data.message);
    }
};