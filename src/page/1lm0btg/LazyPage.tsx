import React, { lazy, Suspense } from 'react';

const Page1lm0btg = lazy(() => import('./Page'));

const LazyPage1lm0btg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm0btg />
  </Suspense>
);

export { LazyPage1lm0btg };
