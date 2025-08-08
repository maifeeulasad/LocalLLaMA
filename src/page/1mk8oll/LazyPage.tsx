import React, { lazy, Suspense } from 'react';

const Page1mk8oll = lazy(() => import('./Page'));

const LazyPage1mk8oll = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk8oll />
  </Suspense>
);

export { LazyPage1mk8oll };
