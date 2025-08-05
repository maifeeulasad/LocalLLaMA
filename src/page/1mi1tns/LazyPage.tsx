import React, { lazy, Suspense } from 'react';

const Page1mi1tns = lazy(() => import('./Page'));

const LazyPage1mi1tns = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi1tns />
  </Suspense>
);

export { LazyPage1mi1tns };
