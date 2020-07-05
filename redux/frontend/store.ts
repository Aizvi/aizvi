//#region Global Imports
import { createStore, combineReducers, applyMiddleware, Action } from 'redux';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { IntlReducer as Intl } from 'react-redux-multilingual';
import thunk,{ ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//#endregion Global Imports


//#region Reducers
const rootReducer = combineReducers({
	Intl
});
//#endregion Reducers

//#region Store

// In second argument we will add our `persistedState` which is load from the local storage.

export const initializeFrontendStore = (preloadedState = {}) => {
	return createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
};

//#endregion Store

// Note: `RootState` type will be used in the connect’s mapDispatchToProps and below ThunkAction type.
export type RootState = ReturnType<typeof rootReducer>;

// To reduce repetition, we might want to define a reusable AppThunk type once, in our store file,
// and then use that type whenever we write a thunk.
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, null, Action<string>>;
