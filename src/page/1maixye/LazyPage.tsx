import React, { lazy, Suspense } from 'react';

const Page1maixye = lazy(() => import('./Page'));

const LazyPage1maixye = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maixye />
  </Suspense>
);

export { LazyPage1maixye };
