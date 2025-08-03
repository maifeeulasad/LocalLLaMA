import React, { lazy, Suspense } from 'react';

const Page1mg5zcx = lazy(() => import('./Page'));

const LazyPage1mg5zcx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg5zcx />
  </Suspense>
);

export { LazyPage1mg5zcx };
