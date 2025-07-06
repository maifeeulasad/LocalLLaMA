import React, { lazy, Suspense } from 'react';

const Page1lswnto = lazy(() => import('./Page'));

const LazyPage1lswnto = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lswnto />
  </Suspense>
);

export { LazyPage1lswnto };
