import React, { lazy, Suspense } from 'react';

const Page1lmxpis = lazy(() => import('./Page'));

const LazyPage1lmxpis = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmxpis />
  </Suspense>
);

export { LazyPage1lmxpis };
