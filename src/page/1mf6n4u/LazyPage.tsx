import React, { lazy, Suspense } from 'react';

const Page1mf6n4u = lazy(() => import('./Page'));

const LazyPage1mf6n4u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf6n4u />
  </Suspense>
);

export { LazyPage1mf6n4u };
