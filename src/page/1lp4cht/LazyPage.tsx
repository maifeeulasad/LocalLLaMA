import React, { lazy, Suspense } from 'react';

const Page1lp4cht = lazy(() => import('./Page'));

const LazyPage1lp4cht = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp4cht />
  </Suspense>
);

export { LazyPage1lp4cht };
