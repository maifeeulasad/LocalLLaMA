import React, { lazy, Suspense } from 'react';

const Page1lx10ja = lazy(() => import('./Page'));

const LazyPage1lx10ja = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx10ja />
  </Suspense>
);

export { LazyPage1lx10ja };
