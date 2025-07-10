import React, { lazy, Suspense } from 'react';

const Page1lvydpk = lazy(() => import('./Page'));

const LazyPage1lvydpk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvydpk />
  </Suspense>
);

export { LazyPage1lvydpk };
