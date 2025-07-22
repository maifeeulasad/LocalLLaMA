import React, { lazy, Suspense } from 'react';

const Page1m6akeo = lazy(() => import('./Page'));

const LazyPage1m6akeo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6akeo />
  </Suspense>
);

export { LazyPage1m6akeo };
