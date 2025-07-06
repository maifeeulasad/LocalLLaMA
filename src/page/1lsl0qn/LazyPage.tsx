import React, { lazy, Suspense } from 'react';

const Page1lsl0qn = lazy(() => import('./Page'));

const LazyPage1lsl0qn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsl0qn />
  </Suspense>
);

export { LazyPage1lsl0qn };
