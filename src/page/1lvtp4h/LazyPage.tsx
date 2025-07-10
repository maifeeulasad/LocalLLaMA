import React, { lazy, Suspense } from 'react';

const Page1lvtp4h = lazy(() => import('./Page'));

const LazyPage1lvtp4h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvtp4h />
  </Suspense>
);

export { LazyPage1lvtp4h };
