import React, { lazy, Suspense } from 'react';

const Page1mi8lbl = lazy(() => import('./Page'));

const LazyPage1mi8lbl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi8lbl />
  </Suspense>
);

export { LazyPage1mi8lbl };
