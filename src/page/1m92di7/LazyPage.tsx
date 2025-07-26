import React, { lazy, Suspense } from 'react';

const Page1m92di7 = lazy(() => import('./Page'));

const LazyPage1m92di7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m92di7 />
  </Suspense>
);

export { LazyPage1m92di7 };
