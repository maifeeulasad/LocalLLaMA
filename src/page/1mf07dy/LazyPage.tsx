import React, { lazy, Suspense } from 'react';

const Page1mf07dy = lazy(() => import('./Page'));

const LazyPage1mf07dy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf07dy />
  </Suspense>
);

export { LazyPage1mf07dy };
