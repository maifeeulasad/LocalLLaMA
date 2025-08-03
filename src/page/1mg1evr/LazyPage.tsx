import React, { lazy, Suspense } from 'react';

const Page1mg1evr = lazy(() => import('./Page'));

const LazyPage1mg1evr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg1evr />
  </Suspense>
);

export { LazyPage1mg1evr };
