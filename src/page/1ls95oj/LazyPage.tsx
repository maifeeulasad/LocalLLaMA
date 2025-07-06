import React, { lazy, Suspense } from 'react';

const Page1ls95oj = lazy(() => import('./Page'));

const LazyPage1ls95oj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls95oj />
  </Suspense>
);

export { LazyPage1ls95oj };
