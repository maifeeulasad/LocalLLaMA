import React, { lazy, Suspense } from 'react';

const Page1mj8kbw = lazy(() => import('./Page'));

const LazyPage1mj8kbw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj8kbw />
  </Suspense>
);

export { LazyPage1mj8kbw };
