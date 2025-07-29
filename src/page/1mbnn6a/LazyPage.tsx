import React, { lazy, Suspense } from 'react';

const Page1mbnn6a = lazy(() => import('./Page'));

const LazyPage1mbnn6a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbnn6a />
  </Suspense>
);

export { LazyPage1mbnn6a };
