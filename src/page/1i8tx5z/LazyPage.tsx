import React, { lazy, Suspense } from 'react';

const Page1i8tx5z = lazy(() => import('./Page'));

const LazyPage1i8tx5z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1i8tx5z />
  </Suspense>
);

export { LazyPage1i8tx5z };
