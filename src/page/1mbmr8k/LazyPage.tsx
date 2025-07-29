import React, { lazy, Suspense } from 'react';

const Page1mbmr8k = lazy(() => import('./Page'));

const LazyPage1mbmr8k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbmr8k />
  </Suspense>
);

export { LazyPage1mbmr8k };
