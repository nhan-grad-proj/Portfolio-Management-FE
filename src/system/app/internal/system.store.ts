import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../domain/entities/user.types';
import { SystemStore } from '../../domain/system-store.types';
import { AppState } from '../../infrastructure/config/redux.config';

const systemSlice = createSlice({
  name: 'system',
  initialState: {} as SystemStore,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.userSession = action.payload;
    }
  }
});

export const { reducer: systemReducer } = systemSlice;

export const systemActions = systemSlice.actions;

export const userSessionSelector = (state: AppState) =>
  state.system.userSession;
