import React, { lazy, Suspense } from 'react';

const Page1lyy0yi = lazy(() => import('./Page'));

const LazyPage1lyy0yi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyy0yi />
  </Suspense>
);

export { LazyPage1lyy0yi };
