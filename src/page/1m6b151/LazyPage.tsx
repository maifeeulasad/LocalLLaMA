import React, { lazy, Suspense } from 'react';

const Page1m6b151 = lazy(() => import('./Page'));

const LazyPage1m6b151 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6b151 />
  </Suspense>
);

export { LazyPage1m6b151 };
