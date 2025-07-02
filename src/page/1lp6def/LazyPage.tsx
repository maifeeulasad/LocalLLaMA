import React, { lazy, Suspense } from 'react';

const Page1lp6def = lazy(() => import('./Page'));

const LazyPage1lp6def = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp6def />
  </Suspense>
);

export { LazyPage1lp6def };
