import React, { lazy, Suspense } from 'react';

const Page1ltstdt = lazy(() => import('./Page'));

const LazyPage1ltstdt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltstdt />
  </Suspense>
);

export { LazyPage1ltstdt };
