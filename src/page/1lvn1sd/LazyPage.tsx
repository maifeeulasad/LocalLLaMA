import React, { lazy, Suspense } from 'react';

const Page1lvn1sd = lazy(() => import('./Page'));

const LazyPage1lvn1sd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvn1sd />
  </Suspense>
);

export { LazyPage1lvn1sd };
