import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          console.tron.createEnhancer(),
          applyMiddleware(...middewares)
        )
      : applyMiddleware(...middewares);

  return createStore(reducers, enhancer);
};
