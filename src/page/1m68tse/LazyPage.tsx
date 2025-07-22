import React, { lazy, Suspense } from 'react';

const Page1m68tse = lazy(() => import('./Page'));

const LazyPage1m68tse = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m68tse />
  </Suspense>
);

export { LazyPage1m68tse };
