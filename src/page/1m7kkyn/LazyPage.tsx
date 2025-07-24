import React, { lazy, Suspense } from 'react';

const Page1m7kkyn = lazy(() => import('./Page'));

const LazyPage1m7kkyn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7kkyn />
  </Suspense>
);

export { LazyPage1m7kkyn };
