import React, { lazy, Suspense } from 'react';

const Page1ltmrvo = lazy(() => import('./Page'));

const LazyPage1ltmrvo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltmrvo />
  </Suspense>
);

export { LazyPage1ltmrvo };
