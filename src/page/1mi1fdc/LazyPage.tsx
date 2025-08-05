import React, { lazy, Suspense } from 'react';

const Page1mi1fdc = lazy(() => import('./Page'));

const LazyPage1mi1fdc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi1fdc />
  </Suspense>
);

export { LazyPage1mi1fdc };
