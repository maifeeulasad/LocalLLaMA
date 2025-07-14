import React, { lazy, Suspense } from 'react';

const Page1lyyryy = lazy(() => import('./Page'));

const LazyPage1lyyryy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyyryy />
  </Suspense>
);

export { LazyPage1lyyryy };
