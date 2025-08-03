import React, { lazy, Suspense } from 'react';

const Page1mfh4ee = lazy(() => import('./Page'));

const LazyPage1mfh4ee = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfh4ee />
  </Suspense>
);

export { LazyPage1mfh4ee };
