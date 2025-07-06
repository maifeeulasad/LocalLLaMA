import React, { lazy, Suspense } from 'react';

const Page1lrbwmz = lazy(() => import('./Page'));

const LazyPage1lrbwmz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrbwmz />
  </Suspense>
);

export { LazyPage1lrbwmz };
