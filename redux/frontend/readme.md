The Redux Provider is a Higher Order component only works with PageComponents implemented in `reduxProvider.ts`. Since the `IndexPage` component is wrapped in `withRedux` the redux context will be automatically initialized and provided to `IndexPage`.  
     
All components have access to the redux store using `useSelector`, `useDispatch` or `connect` from`react-redux`.