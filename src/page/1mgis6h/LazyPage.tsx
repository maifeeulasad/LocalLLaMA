import React, { lazy, Suspense } from 'react';

const Page1mgis6h = lazy(() => import('./Page'));

const LazyPage1mgis6h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgis6h />
  </Suspense>
);

export { LazyPage1mgis6h };
