import React, { lazy, Suspense } from 'react';

const Page1iskklo = lazy(() => import('./Page'));

const LazyPage1iskklo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1iskklo />
  </Suspense>
);

export { LazyPage1iskklo };
