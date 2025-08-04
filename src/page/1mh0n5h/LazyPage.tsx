import React, { lazy, Suspense } from 'react';

const Page1mh0n5h = lazy(() => import('./Page'));

const LazyPage1mh0n5h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh0n5h />
  </Suspense>
);

export { LazyPage1mh0n5h };
