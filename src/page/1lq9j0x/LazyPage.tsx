import React, { lazy, Suspense } from 'react';

const Page1lq9j0x = lazy(() => import('./Page'));

const LazyPage1lq9j0x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq9j0x />
  </Suspense>
);

export { LazyPage1lq9j0x };
