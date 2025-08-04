import React, { lazy, Suspense } from 'react';

const Page1mh6zja = lazy(() => import('./Page'));

const LazyPage1mh6zja = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh6zja />
  </Suspense>
);

export { LazyPage1mh6zja };
