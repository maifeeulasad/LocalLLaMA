import React, { lazy, Suspense } from 'react';

const Page1mc9sk0 = lazy(() => import('./Page'));

const LazyPage1mc9sk0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc9sk0 />
  </Suspense>
);

export { LazyPage1mc9sk0 };
