import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BASE_API_URI } from "../config/config";

interface User {
    id: string;
    name: string;
    email: string;
}

interface UserState {
    user?: User | null;
    status: "fulfilled" | "loading" | "rejected" | "idle";
}

// First, create the thunk
export const login = createAsyncThunk(
    "user/login",
    async (userData: any, thunkAPI) => {
        const { email, password } = userData;
        try {
            const response = await fetch(
              `https://api.lafi.be/login`,
              {
                method: "POST",
                mode: 'no-cors',
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email,
                  password,
                }),
              }
            )
            let data = await response.json()
            console.log("response", data)
            if (response.status === 200) {
              //localStorage.setItem("token", data.token)
              return data
            } else {
              return thunkAPI.rejectWithValue(data)
            }
          } catch (e) {
            console.log("Error", e)
            thunkAPI.rejectWithValue(e)
          }
        console.log(email, password);
        console.log("Login Attempt");
    }
);

const initialState: UserState = {
    user: null,
    status: "idle",
};

// Then, handle actions in your reducers:
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(
            login.fulfilled,
            (state, action: PayloadAction<any>) => {
                console.log(action.payload)
            }
        );
        builder.addCase(
            login.rejected,
            (state, action: PayloadAction<any>) => {
                console.log(action.payload)
            }
        );
        builder.addCase(
            login.pending,
            (state, action: PayloadAction<any>) => {
                console.log(action.payload)
            }
        );
    },
});

export default userSlice.reducer;
