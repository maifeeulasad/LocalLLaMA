import React, { lazy, Suspense } from 'react';

const Page1lq8gjv = lazy(() => import('./Page'));

const LazyPage1lq8gjv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq8gjv />
  </Suspense>
);

export { LazyPage1lq8gjv };
