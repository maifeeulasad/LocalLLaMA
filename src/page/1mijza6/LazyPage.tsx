import React, { lazy, Suspense } from 'react';

const Page1mijza6 = lazy(() => import('./Page'));

const LazyPage1mijza6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mijza6 />
  </Suspense>
);

export { LazyPage1mijza6 };
