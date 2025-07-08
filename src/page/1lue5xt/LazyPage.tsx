import React, { lazy, Suspense } from 'react';

const Page1lue5xt = lazy(() => import('./Page'));

const LazyPage1lue5xt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lue5xt />
  </Suspense>
);

export { LazyPage1lue5xt };
