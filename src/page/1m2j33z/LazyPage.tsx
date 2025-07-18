import React, { lazy, Suspense } from 'react';

const Page1m2j33z = lazy(() => import('./Page'));

const LazyPage1m2j33z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2j33z />
  </Suspense>
);

export { LazyPage1m2j33z };
