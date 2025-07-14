import React, { lazy, Suspense } from 'react';

const Page1lz5cwa = lazy(() => import('./Page'));

const LazyPage1lz5cwa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz5cwa />
  </Suspense>
);

export { LazyPage1lz5cwa };
