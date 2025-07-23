import React, { lazy, Suspense } from 'react';

const Page1m6ztb2 = lazy(() => import('./Page'));

const LazyPage1m6ztb2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6ztb2 />
  </Suspense>
);

export { LazyPage1m6ztb2 };
