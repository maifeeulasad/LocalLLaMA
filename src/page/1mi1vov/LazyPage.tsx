import React, { lazy, Suspense } from 'react';

const Page1mi1vov = lazy(() => import('./Page'));

const LazyPage1mi1vov = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi1vov />
  </Suspense>
);

export { LazyPage1mi1vov };
