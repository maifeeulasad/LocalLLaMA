import React, { lazy, Suspense } from 'react';

const Page1mh3wzs = lazy(() => import('./Page'));

const LazyPage1mh3wzs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh3wzs />
  </Suspense>
);

export { LazyPage1mh3wzs };
