import React, { lazy, Suspense } from 'react';

const Page1mhlhto = lazy(() => import('./Page'));

const LazyPage1mhlhto = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhlhto />
  </Suspense>
);

export { LazyPage1mhlhto };
