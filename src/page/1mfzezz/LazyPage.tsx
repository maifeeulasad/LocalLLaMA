import React, { lazy, Suspense } from 'react';

const Page1mfzezz = lazy(() => import('./Page'));

const LazyPage1mfzezz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfzezz />
  </Suspense>
);

export { LazyPage1mfzezz };
