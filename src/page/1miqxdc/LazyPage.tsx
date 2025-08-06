import React, { lazy, Suspense } from 'react';

const Page1miqxdc = lazy(() => import('./Page'));

const LazyPage1miqxdc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miqxdc />
  </Suspense>
);

export { LazyPage1miqxdc };
