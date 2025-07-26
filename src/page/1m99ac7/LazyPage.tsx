import React, { lazy, Suspense } from 'react';

const Page1m99ac7 = lazy(() => import('./Page'));

const LazyPage1m99ac7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m99ac7 />
  </Suspense>
);

export { LazyPage1m99ac7 };
