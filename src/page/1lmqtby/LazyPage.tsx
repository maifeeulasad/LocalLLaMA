import React, { lazy, Suspense } from 'react';

const Page1lmqtby = lazy(() => import('./Page'));

const LazyPage1lmqtby = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmqtby />
  </Suspense>
);

export { LazyPage1lmqtby };
