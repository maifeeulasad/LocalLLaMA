import React, { lazy, Suspense } from 'react';

const Page1mfrq3v = lazy(() => import('./Page'));

const LazyPage1mfrq3v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfrq3v />
  </Suspense>
);

export { LazyPage1mfrq3v };
