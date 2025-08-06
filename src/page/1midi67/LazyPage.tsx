import React, { lazy, Suspense } from 'react';

const Page1midi67 = lazy(() => import('./Page'));

const LazyPage1midi67 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1midi67 />
  </Suspense>
);

export { LazyPage1midi67 };
