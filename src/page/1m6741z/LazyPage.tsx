import React, { lazy, Suspense } from 'react';

const Page1m6741z = lazy(() => import('./Page'));

const LazyPage1m6741z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6741z />
  </Suspense>
);

export { LazyPage1m6741z };
