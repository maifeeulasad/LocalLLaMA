import React, { lazy, Suspense } from 'react';

const Page1mbtb3t = lazy(() => import('./Page'));

const LazyPage1mbtb3t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbtb3t />
  </Suspense>
);

export { LazyPage1mbtb3t };
