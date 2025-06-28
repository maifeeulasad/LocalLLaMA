import React, { lazy, Suspense } from 'react';

const Page1g4w2vs = lazy(() => import('./Page'));

const LazyPage1g4w2vs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1g4w2vs />
  </Suspense>
);

export { LazyPage1g4w2vs };
