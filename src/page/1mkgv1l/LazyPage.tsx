import React, { lazy, Suspense } from 'react';

const Page1mkgv1l = lazy(() => import('./Page'));

const LazyPage1mkgv1l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkgv1l />
  </Suspense>
);

export { LazyPage1mkgv1l };
