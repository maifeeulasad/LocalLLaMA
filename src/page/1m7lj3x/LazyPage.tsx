import React, { lazy, Suspense } from 'react';

const Page1m7lj3x = lazy(() => import('./Page'));

const LazyPage1m7lj3x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7lj3x />
  </Suspense>
);

export { LazyPage1m7lj3x };
