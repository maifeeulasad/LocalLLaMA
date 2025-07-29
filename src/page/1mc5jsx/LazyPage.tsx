import React, { lazy, Suspense } from 'react';

const Page1mc5jsx = lazy(() => import('./Page'));

const LazyPage1mc5jsx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc5jsx />
  </Suspense>
);

export { LazyPage1mc5jsx };
