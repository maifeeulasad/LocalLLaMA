import React, { lazy, Suspense } from 'react';

const Page1mg1cg5 = lazy(() => import('./Page'));

const LazyPage1mg1cg5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg1cg5 />
  </Suspense>
);

export { LazyPage1mg1cg5 };
