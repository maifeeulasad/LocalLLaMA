import React, { lazy, Suspense } from 'react';

const Page1m81whq = lazy(() => import('./Page'));

const LazyPage1m81whq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m81whq />
  </Suspense>
);

export { LazyPage1m81whq };
