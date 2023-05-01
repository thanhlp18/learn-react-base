import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userApi from 'api/userApi';

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        // call API
        const data = await userApi.register(payload);
        // save data to local storage
        localStorage.setItem('access_token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user))
        console.log('data:', data.user)
        return data.user
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        setting: {},
    },
    reducers: {},
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    }
})

const { reducer } = userSlice;
export default reducer;
