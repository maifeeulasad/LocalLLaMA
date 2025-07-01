import React, { lazy, Suspense } from 'react';

const Page1louk6a = lazy(() => import('./Page'));

const LazyPage1louk6a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1louk6a />
  </Suspense>
);

export { LazyPage1louk6a };
