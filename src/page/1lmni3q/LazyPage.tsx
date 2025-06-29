import React, { lazy, Suspense } from 'react';

const Page1lmni3q = lazy(() => import('./Page'));

const LazyPage1lmni3q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmni3q />
  </Suspense>
);

export { LazyPage1lmni3q };
