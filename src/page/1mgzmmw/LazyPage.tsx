import React, { lazy, Suspense } from 'react';

const Page1mgzmmw = lazy(() => import('./Page'));

const LazyPage1mgzmmw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgzmmw />
  </Suspense>
);

export { LazyPage1mgzmmw };
