import React, { lazy, Suspense } from 'react';

const Page1m0r95k = lazy(() => import('./Page'));

const LazyPage1m0r95k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0r95k />
  </Suspense>
);

export { LazyPage1m0r95k };
