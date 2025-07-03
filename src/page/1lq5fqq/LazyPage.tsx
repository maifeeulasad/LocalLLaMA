import React, { lazy, Suspense } from 'react';

const Page1lq5fqq = lazy(() => import('./Page'));

const LazyPage1lq5fqq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq5fqq />
  </Suspense>
);

export { LazyPage1lq5fqq };
