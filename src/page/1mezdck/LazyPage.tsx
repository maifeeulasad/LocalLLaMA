import React, { lazy, Suspense } from 'react';

const Page1mezdck = lazy(() => import('./Page'));

const LazyPage1mezdck = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mezdck />
  </Suspense>
);

export { LazyPage1mezdck };
