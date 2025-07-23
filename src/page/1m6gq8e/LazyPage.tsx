import React, { lazy, Suspense } from 'react';

const Page1m6gq8e = lazy(() => import('./Page'));

const LazyPage1m6gq8e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6gq8e />
  </Suspense>
);

export { LazyPage1m6gq8e };
