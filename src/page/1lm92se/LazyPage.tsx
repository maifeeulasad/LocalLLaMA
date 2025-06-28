import React, { lazy, Suspense } from 'react';

const Page1lm92se = lazy(() => import('./Page'));

const LazyPage1lm92se = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm92se />
  </Suspense>
);

export { LazyPage1lm92se };
