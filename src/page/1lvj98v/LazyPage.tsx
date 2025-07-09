import React, { lazy, Suspense } from 'react';

const Page1lvj98v = lazy(() => import('./Page'));

const LazyPage1lvj98v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvj98v />
  </Suspense>
);

export { LazyPage1lvj98v };
