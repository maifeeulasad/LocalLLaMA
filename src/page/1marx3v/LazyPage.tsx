import React, { lazy, Suspense } from 'react';

const Page1marx3v = lazy(() => import('./Page'));

const LazyPage1marx3v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1marx3v />
  </Suspense>
);

export { LazyPage1marx3v };
