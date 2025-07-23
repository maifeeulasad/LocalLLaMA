import React, { lazy, Suspense } from 'react';

const Page1m71f20 = lazy(() => import('./Page'));

const LazyPage1m71f20 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m71f20 />
  </Suspense>
);

export { LazyPage1m71f20 };
