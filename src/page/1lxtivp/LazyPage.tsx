import React, { lazy, Suspense } from 'react';

const Page1lxtivp = lazy(() => import('./Page'));

const LazyPage1lxtivp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxtivp />
  </Suspense>
);

export { LazyPage1lxtivp };
