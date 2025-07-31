import React, { lazy, Suspense } from 'react';

const Page1mduk5t = lazy(() => import('./Page'));

const LazyPage1mduk5t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mduk5t />
  </Suspense>
);

export { LazyPage1mduk5t };
