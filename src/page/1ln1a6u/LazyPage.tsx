import React, { lazy, Suspense } from 'react';

const Page1ln1a6u = lazy(() => import('./Page'));

const LazyPage1ln1a6u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln1a6u />
  </Suspense>
);

export { LazyPage1ln1a6u };
