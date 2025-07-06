import React, { lazy, Suspense } from 'react';

const Page1lsmtzr = lazy(() => import('./Page'));

const LazyPage1lsmtzr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsmtzr />
  </Suspense>
);

export { LazyPage1lsmtzr };
