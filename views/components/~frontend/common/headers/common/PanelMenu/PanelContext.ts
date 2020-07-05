//#region Global imports
import { createContext } from 'react';
//#endregion Global imports

//#region Types
type contextDefault = {
	currentActivePanel: number;
	addItemToPanel: (itemId: number) => void;
	goBack: () => void;
	closePanel: () => void;
};
//#endregion Types


/**
 * Create a context:
 * We will create a context, But the context would be empty. So, We have to set the data inside the context
 * for that we will use the Provider and inside that Provider we will assign our data which helps the
 * children to easily access. But the question is How children will access that data?
 * I will answer it later.
 */
export const PanelContext = createContext< Partial<contextDefault> >({});

// We need a Provider to set the data.
export const PanelProvider = PanelContext.Provider;

/**
 * To use the Provider as a Higher Order Component just extract the Provider by using this approach
 * ---> export const AppProvider = AppContext.Provider;
 * After, that inside our App Component
 * ---> import {AppProvider} from './context';
 * ---> <AppProvider value={}><App /></AppProvider>
 */
/**
 * After set th data inside Provider, How we will access the data inside our children components?
 * For that we need a Consumer to access that data,
 * Old method:
 * When our child was class component then we were import `Consumer` on that child and inside the render method
 * we wrap Consumer with it and render something based on the context value.
 * Syntax:
 * <MyContext.Consumer> { value => render something based on the context value } </MyContext.Consumer>
 * But this method only works inside the render method but if we want to access the value outside the
 * render method then we use `static contextType` approach.
 * But for the functional component same render method approach also work but `static contextType` approach
 * doesn't work, for that we used `useContext(PanelContext)` hook and destructure all data inside that context.
 * This is modern approach.
 */
