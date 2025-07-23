import React, { lazy, Suspense } from 'react';

const Page1m6h67y = lazy(() => import('./Page'));

const LazyPage1m6h67y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6h67y />
  </Suspense>
);

export { LazyPage1m6h67y };
