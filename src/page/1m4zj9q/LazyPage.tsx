import React, { lazy, Suspense } from 'react';

const Page1m4zj9q = lazy(() => import('./Page'));

const LazyPage1m4zj9q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4zj9q />
  </Suspense>
);

export { LazyPage1m4zj9q };
