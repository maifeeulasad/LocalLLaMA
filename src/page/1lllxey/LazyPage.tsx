import React, { lazy, Suspense } from 'react';

const Page1lllxey = lazy(() => import('./Page'));

const LazyPage1lllxey = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lllxey />
  </Suspense>
);

export { LazyPage1lllxey };
