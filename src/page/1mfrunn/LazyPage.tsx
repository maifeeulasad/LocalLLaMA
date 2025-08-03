import React, { lazy, Suspense } from 'react';

const Page1mfrunn = lazy(() => import('./Page'));

const LazyPage1mfrunn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfrunn />
  </Suspense>
);

export { LazyPage1mfrunn };
