import React, { lazy, Suspense } from 'react';

const Page1lm91sr = lazy(() => import('./Page'));

const LazyPage1lm91sr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm91sr />
  </Suspense>
);

export { LazyPage1lm91sr };
