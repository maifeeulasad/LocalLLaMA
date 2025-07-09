import React, { lazy, Suspense } from 'react';

const Page1lvf7ww = lazy(() => import('./Page'));

const LazyPage1lvf7ww = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvf7ww />
  </Suspense>
);

export { LazyPage1lvf7ww };
