import { configureStore } from '@reduxjs/toolkit';

// slice
// import member from './slice/member';
// import modal from './slice/modal';
// import log from './slice/log';
// import chat from './slice/chat';
import layout from './slice/layout';

const store = configureStore({
  reducer: {
    // userSlice: member,
    // modalSlice: modal,
    // logSlice: log,
    // chatSlice: chat
    layoutSlice: layout
  }
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
