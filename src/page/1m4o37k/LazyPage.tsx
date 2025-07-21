import React, { lazy, Suspense } from 'react';

const Page1m4o37k = lazy(() => import('./Page'));

const LazyPage1m4o37k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4o37k />
  </Suspense>
);

export { LazyPage1m4o37k };
