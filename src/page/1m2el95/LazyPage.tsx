import React, { lazy, Suspense } from 'react';

const Page1m2el95 = lazy(() => import('./Page'));

const LazyPage1m2el95 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2el95 />
  </Suspense>
);

export { LazyPage1m2el95 };
