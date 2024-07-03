import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;


// Редьюсер — это функция, которая получает текущее состояние и 
// объект, решает , как обновить состояние при необходимости, и 
// возвращает новое состояние: . Вы можете думать о редьюсере как
//  о прослушивателе событий, который обрабатывает события на основе 
//  полученного типа действия (события).