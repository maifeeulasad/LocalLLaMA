import React, { lazy, Suspense } from 'react';

const Page1mh960c = lazy(() => import('./Page'));

const LazyPage1mh960c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh960c />
  </Suspense>
);

export { LazyPage1mh960c };
