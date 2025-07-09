import React, { lazy, Suspense } from 'react';

const Page1lvg25f = lazy(() => import('./Page'));

const LazyPage1lvg25f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvg25f />
  </Suspense>
);

export { LazyPage1lvg25f };
