import React, { lazy, Suspense } from 'react';

const Page1lm9xlq = lazy(() => import('./Page'));

const LazyPage1lm9xlq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm9xlq />
  </Suspense>
);

export { LazyPage1lm9xlq };
