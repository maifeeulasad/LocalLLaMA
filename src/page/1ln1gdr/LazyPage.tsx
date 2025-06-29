import React, { lazy, Suspense } from 'react';

const Page1ln1gdr = lazy(() => import('./Page'));

const LazyPage1ln1gdr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln1gdr />
  </Suspense>
);

export { LazyPage1ln1gdr };
