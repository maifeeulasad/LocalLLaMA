import React, { lazy, Suspense } from 'react';

const Page1lph2zh = lazy(() => import('./Page'));

const LazyPage1lph2zh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lph2zh />
  </Suspense>
);

export { LazyPage1lph2zh };
