import React, { lazy, Suspense } from 'react';

const Page1lw402u = lazy(() => import('./Page'));

const LazyPage1lw402u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw402u />
  </Suspense>
);

export { LazyPage1lw402u };
