import React, { lazy, Suspense } from 'react';

const Page1lsoflk = lazy(() => import('./Page'));

const LazyPage1lsoflk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsoflk />
  </Suspense>
);

export { LazyPage1lsoflk };
