import React, { lazy, Suspense } from 'react';

const Page1m7503r = lazy(() => import('./Page'));

const LazyPage1m7503r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7503r />
  </Suspense>
);

export { LazyPage1m7503r };
