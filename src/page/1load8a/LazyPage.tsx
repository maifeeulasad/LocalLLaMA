import React, { lazy, Suspense } from 'react';

const Page1load8a = lazy(() => import('./Page'));

const LazyPage1load8a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1load8a />
  </Suspense>
);

export { LazyPage1load8a };
