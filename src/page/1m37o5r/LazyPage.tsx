import React, { lazy, Suspense } from 'react';

const Page1m37o5r = lazy(() => import('./Page'));

const LazyPage1m37o5r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m37o5r />
  </Suspense>
);

export { LazyPage1m37o5r };
