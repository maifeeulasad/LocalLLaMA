import React, { lazy, Suspense } from 'react';

const Page1lupg1f = lazy(() => import('./Page'));

const LazyPage1lupg1f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lupg1f />
  </Suspense>
);

export { LazyPage1lupg1f };
