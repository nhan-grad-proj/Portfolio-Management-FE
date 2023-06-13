import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'src/system/infrastructure/config/redux.config';

export const selectAdminState = (state: AppState) => state.user;

export const selectJoinedInDates = createSelector(
  selectAdminState,
  state => state.filters.joinedIn
);

export const selectMemberType = createSelector(
  selectAdminState,
  state => state.filters.memberType
);
