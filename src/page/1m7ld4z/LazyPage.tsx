import React, { lazy, Suspense } from 'react';

const Page1m7ld4z = lazy(() => import('./Page'));

const LazyPage1m7ld4z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7ld4z />
  </Suspense>
);

export { LazyPage1m7ld4z };
