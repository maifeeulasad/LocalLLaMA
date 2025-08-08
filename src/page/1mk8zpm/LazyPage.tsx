import React, { lazy, Suspense } from 'react';

const Page1mk8zpm = lazy(() => import('./Page'));

const LazyPage1mk8zpm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk8zpm />
  </Suspense>
);

export { LazyPage1mk8zpm };
