import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BASE_API_URI } from '../config/config'
import axios from 'axios'

interface User {
    id: string,
    name: string,
    email: string
}


interface UserState {
    user?: User | null,
    status: 'fulfilled' | 'loading' | 'rejected' | 'idle'
}

// First, create the thunk
export const login = createAsyncThunk(
  'user/login',
  async (userData: any, thunkAPI) => {
    const {email, password} = userData
    console.log(email, password)
  }
)

const initialState: UserState = {
    user: null,
    status: 'idle'
}

// Then, handle actions in your reducers:
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
      
    })
  },
})

export default userSlice.reducer