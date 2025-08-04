import React, { lazy, Suspense } from 'react';

const Page1mh2v1h = lazy(() => import('./Page'));

const LazyPage1mh2v1h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh2v1h />
  </Suspense>
);

export { LazyPage1mh2v1h };
