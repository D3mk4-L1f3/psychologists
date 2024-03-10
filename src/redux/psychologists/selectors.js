import { createSelector } from '@reduxjs/toolkit';

export const selectAllPsychologists = createSelector(
  [state => state.psychologists.psychologists],
  psychologists => psychologists,
  {
    devModeChecks: { identityFunctionCheck: 'never' },
  }
);

export const selectFavoritePsychologists = createSelector(
  [state => state.psychologists.favorite],
  favorite => favorite,
  {
    devModeChecks: { identityFunctionCheck: 'never' },
  }
);

export const selectIsLoading = state => state.psychologists.isLoading;
export const selectFavPending = state => state.psychologists.favPending;
export const selectError = state => state.psychologists.error;
export const selectPage = state => state.psychologists.page;
export const selectPages = state => state.psychologists.pages;
export const selectLimit = state => state.psychologists.limit;
