import React, { lazy, Suspense } from 'react';

const Page1lvk1ms = lazy(() => import('./Page'));

const LazyPage1lvk1ms = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvk1ms />
  </Suspense>
);

export { LazyPage1lvk1ms };
