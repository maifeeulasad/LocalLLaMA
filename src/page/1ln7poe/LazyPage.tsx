import React, { lazy, Suspense } from 'react';

const Page1ln7poe = lazy(() => import('./Page'));

const LazyPage1ln7poe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln7poe />
  </Suspense>
);

export { LazyPage1ln7poe };
