import React, { lazy, Suspense } from 'react';

const Page1lmqsru = lazy(() => import('./Page'));

const LazyPage1lmqsru = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmqsru />
  </Suspense>
);

export { LazyPage1lmqsru };
