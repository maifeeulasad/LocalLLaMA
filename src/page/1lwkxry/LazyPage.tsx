import React, { lazy, Suspense } from 'react';

const Page1lwkxry = lazy(() => import('./Page'));

const LazyPage1lwkxry = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwkxry />
  </Suspense>
);

export { LazyPage1lwkxry };
