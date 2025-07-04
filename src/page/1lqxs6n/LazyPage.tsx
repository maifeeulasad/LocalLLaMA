import React, { lazy, Suspense } from 'react';

const Page1lqxs6n = lazy(() => import('./Page'));

const LazyPage1lqxs6n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqxs6n />
  </Suspense>
);

export { LazyPage1lqxs6n };
