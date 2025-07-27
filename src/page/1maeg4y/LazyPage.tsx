import React, { lazy, Suspense } from 'react';

const Page1maeg4y = lazy(() => import('./Page'));

const LazyPage1maeg4y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maeg4y />
  </Suspense>
);

export { LazyPage1maeg4y };
