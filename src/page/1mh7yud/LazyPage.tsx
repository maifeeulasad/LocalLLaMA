import React, { lazy, Suspense } from 'react';

const Page1mh7yud = lazy(() => import('./Page'));

const LazyPage1mh7yud = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh7yud />
  </Suspense>
);

export { LazyPage1mh7yud };
