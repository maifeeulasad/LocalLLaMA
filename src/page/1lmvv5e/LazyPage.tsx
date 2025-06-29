import React, { lazy, Suspense } from 'react';

const Page1lmvv5e = lazy(() => import('./Page'));

const LazyPage1lmvv5e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmvv5e />
  </Suspense>
);

export { LazyPage1lmvv5e };
