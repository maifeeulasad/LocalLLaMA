import React, { lazy, Suspense } from 'react';

const Page1lydp3k = lazy(() => import('./Page'));

const LazyPage1lydp3k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lydp3k />
  </Suspense>
);

export { LazyPage1lydp3k };
