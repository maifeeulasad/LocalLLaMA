import React, { lazy, Suspense } from 'react';

const Page1mdpe8v = lazy(() => import('./Page'));

const LazyPage1mdpe8v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdpe8v />
  </Suspense>
);

export { LazyPage1mdpe8v };
