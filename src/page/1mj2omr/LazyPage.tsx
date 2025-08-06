import React, { lazy, Suspense } from 'react';

const Page1mj2omr = lazy(() => import('./Page'));

const LazyPage1mj2omr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj2omr />
  </Suspense>
);

export { LazyPage1mj2omr };
