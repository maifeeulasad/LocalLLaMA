import React, { lazy, Suspense } from 'react';

const Page1m99hwb = lazy(() => import('./Page'));

const LazyPage1m99hwb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m99hwb />
  </Suspense>
);

export { LazyPage1m99hwb };
