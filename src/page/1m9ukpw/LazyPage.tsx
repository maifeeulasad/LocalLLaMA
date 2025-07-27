import React, { lazy, Suspense } from 'react';

const Page1m9ukpw = lazy(() => import('./Page'));

const LazyPage1m9ukpw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9ukpw />
  </Suspense>
);

export { LazyPage1m9ukpw };
