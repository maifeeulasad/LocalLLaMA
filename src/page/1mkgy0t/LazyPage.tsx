import React, { lazy, Suspense } from 'react';

const Page1mkgy0t = lazy(() => import('./Page'));

const LazyPage1mkgy0t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkgy0t />
  </Suspense>
);

export { LazyPage1mkgy0t };
