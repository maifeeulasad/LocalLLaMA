import React, { lazy, Suspense } from 'react';

const Page1lol3na = lazy(() => import('./Page'));

const LazyPage1lol3na = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lol3na />
  </Suspense>
);

export { LazyPage1lol3na };
