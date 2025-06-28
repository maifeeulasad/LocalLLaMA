import React, { lazy, Suspense } from 'react';

const Page1llw6ws = lazy(() => import('./Page'));

const LazyPage1llw6ws = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llw6ws />
  </Suspense>
);

export { LazyPage1llw6ws };
