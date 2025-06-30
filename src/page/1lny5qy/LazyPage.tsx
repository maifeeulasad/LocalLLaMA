import React, { lazy, Suspense } from 'react';

const Page1lny5qy = lazy(() => import('./Page'));

const LazyPage1lny5qy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lny5qy />
  </Suspense>
);

export { LazyPage1lny5qy };
