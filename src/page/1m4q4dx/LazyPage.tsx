import React, { lazy, Suspense } from 'react';

const Page1m4q4dx = lazy(() => import('./Page'));

const LazyPage1m4q4dx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4q4dx />
  </Suspense>
);

export { LazyPage1m4q4dx };
