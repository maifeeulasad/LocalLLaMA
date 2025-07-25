import React, { lazy, Suspense } from 'react';

const Page1m83644 = lazy(() => import('./Page'));

const LazyPage1m83644 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m83644 />
  </Suspense>
);

export { LazyPage1m83644 };
