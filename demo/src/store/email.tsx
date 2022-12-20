import services from '@demo/services';
import createSliceState from './common/createSliceState';
export default createSliceState({
  name: 'email',
  initialState: null,
  reducers: {
    set: (state, action) => state,
  },
  effects: {
    send: async (
      state,
      payload: {
        data: Parameters<typeof services.common.sendTestEmail>[0];
        success: () => void;
        error:(msg:string)=>void
      }
    ) => {
      try {
       await services.common.sendTestEmail(payload.data);
        payload.success();
      } catch (error) {
        payload.error(error as string);
      }
    },
  },
});
