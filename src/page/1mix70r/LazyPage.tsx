import React, { lazy, Suspense } from 'react';

const Page1mix70r = lazy(() => import('./Page'));

const LazyPage1mix70r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mix70r />
  </Suspense>
);

export { LazyPage1mix70r };
