import React, { lazy, Suspense } from 'react';

const Page1m5pbj0 = lazy(() => import('./Page'));

const LazyPage1m5pbj0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5pbj0 />
  </Suspense>
);

export { LazyPage1m5pbj0 };
