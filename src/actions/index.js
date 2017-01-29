import { TEST_CHANGED } from './types';

export const testChanged = (testPayload) => {
  return {
    type: TEST_CHANGED,
    payload: testPayload
  };
};
