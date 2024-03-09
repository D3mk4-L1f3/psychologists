import { createSelector } from '@reduxjs/toolkit';

export const selectAllPsychologists = createSelector(
  state => state.psychologists.psychologists,
  psychologists => psychologists,
  {
    devModeChecks: { identityFunctionCheck: 'never' },
  }
);

export const selectError = state => state.drugs.error;
export const selectIsLoading = state => state.drugs.isLoading;
