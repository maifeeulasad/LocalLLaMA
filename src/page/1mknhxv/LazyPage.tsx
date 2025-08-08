import React, { lazy, Suspense } from 'react';

const Page1mknhxv = lazy(() => import('./Page'));

const LazyPage1mknhxv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mknhxv />
  </Suspense>
);

export { LazyPage1mknhxv };
