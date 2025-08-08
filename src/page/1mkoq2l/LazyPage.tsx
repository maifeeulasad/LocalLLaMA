import React, { lazy, Suspense } from 'react';

const Page1mkoq2l = lazy(() => import('./Page'));

const LazyPage1mkoq2l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkoq2l />
  </Suspense>
);

export { LazyPage1mkoq2l };
