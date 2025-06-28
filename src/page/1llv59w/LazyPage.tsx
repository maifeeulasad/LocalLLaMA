import React, { lazy, Suspense } from 'react';

const Page1llv59w = lazy(() => import('./Page'));

const LazyPage1llv59w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llv59w />
  </Suspense>
);

export { LazyPage1llv59w };
