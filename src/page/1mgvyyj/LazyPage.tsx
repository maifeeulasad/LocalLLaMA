import React, { lazy, Suspense } from 'react';

const Page1mgvyyj = lazy(() => import('./Page'));

const LazyPage1mgvyyj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgvyyj />
  </Suspense>
);

export { LazyPage1mgvyyj };
