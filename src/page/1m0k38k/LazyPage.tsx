import React, { lazy, Suspense } from 'react';

const Page1m0k38k = lazy(() => import('./Page'));

const LazyPage1m0k38k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0k38k />
  </Suspense>
);

export { LazyPage1m0k38k };
