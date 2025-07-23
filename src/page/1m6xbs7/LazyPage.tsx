import React, { lazy, Suspense } from 'react';

const Page1m6xbs7 = lazy(() => import('./Page'));

const LazyPage1m6xbs7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6xbs7 />
  </Suspense>
);

export { LazyPage1m6xbs7 };
