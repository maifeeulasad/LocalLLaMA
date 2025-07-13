import React, { lazy, Suspense } from 'react';

const Page1ly894z = lazy(() => import('./Page'));

const LazyPage1ly894z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly894z />
  </Suspense>
);

export { LazyPage1ly894z };
