import React, { lazy, Suspense } from 'react';

const Page1mf92r1 = lazy(() => import('./Page'));

const LazyPage1mf92r1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf92r1 />
  </Suspense>
);

export { LazyPage1mf92r1 };
