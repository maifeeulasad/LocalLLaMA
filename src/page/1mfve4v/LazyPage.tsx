import React, { lazy, Suspense } from 'react';

const Page1mfve4v = lazy(() => import('./Page'));

const LazyPage1mfve4v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfve4v />
  </Suspense>
);

export { LazyPage1mfve4v };
