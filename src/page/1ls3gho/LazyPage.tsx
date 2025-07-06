import React, { lazy, Suspense } from 'react';

const Page1ls3gho = lazy(() => import('./Page'));

const LazyPage1ls3gho = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls3gho />
  </Suspense>
);

export { LazyPage1ls3gho };
