import React, { lazy, Suspense } from 'react';

const Page1mg1e80 = lazy(() => import('./Page'));

const LazyPage1mg1e80 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg1e80 />
  </Suspense>
);

export { LazyPage1mg1e80 };
