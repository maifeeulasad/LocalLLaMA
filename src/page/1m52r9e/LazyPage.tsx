import React, { lazy, Suspense } from 'react';

const Page1m52r9e = lazy(() => import('./Page'));

const LazyPage1m52r9e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m52r9e />
  </Suspense>
);

export { LazyPage1m52r9e };
