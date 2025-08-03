import React, { lazy, Suspense } from 'react';

const Page1mgbs6r = lazy(() => import('./Page'));

const LazyPage1mgbs6r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgbs6r />
  </Suspense>
);

export { LazyPage1mgbs6r };
