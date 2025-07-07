import React, { lazy, Suspense } from 'react';

const Page1lth6ga = lazy(() => import('./Page'));

const LazyPage1lth6ga = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lth6ga />
  </Suspense>
);

export { LazyPage1lth6ga };
