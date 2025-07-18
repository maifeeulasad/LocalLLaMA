import React, { lazy, Suspense } from 'react';

const Page1m35kib = lazy(() => import('./Page'));

const LazyPage1m35kib = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m35kib />
  </Suspense>
);

export { LazyPage1m35kib };
