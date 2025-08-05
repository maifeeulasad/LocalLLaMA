import React, { lazy, Suspense } from 'react';

const Page1mhf5jq = lazy(() => import('./Page'));

const LazyPage1mhf5jq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhf5jq />
  </Suspense>
);

export { LazyPage1mhf5jq };
