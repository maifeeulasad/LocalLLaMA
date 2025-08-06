import React, { lazy, Suspense } from 'react';

const Page1mj0dbv = lazy(() => import('./Page'));

const LazyPage1mj0dbv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj0dbv />
  </Suspense>
);

export { LazyPage1mj0dbv };
