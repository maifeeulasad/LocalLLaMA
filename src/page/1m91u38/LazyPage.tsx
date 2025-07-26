import React, { lazy, Suspense } from 'react';

const Page1m91u38 = lazy(() => import('./Page'));

const LazyPage1m91u38 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m91u38 />
  </Suspense>
);

export { LazyPage1m91u38 };
