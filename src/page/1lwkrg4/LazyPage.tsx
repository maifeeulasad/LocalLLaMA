import React, { lazy, Suspense } from 'react';

const Page1lwkrg4 = lazy(() => import('./Page'));

const LazyPage1lwkrg4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwkrg4 />
  </Suspense>
);

export { LazyPage1lwkrg4 };
