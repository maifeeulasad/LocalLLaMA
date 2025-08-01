import React, { lazy, Suspense } from 'react';

const Page1mete9h = lazy(() => import('./Page'));

const LazyPage1mete9h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mete9h />
  </Suspense>
);

export { LazyPage1mete9h };
