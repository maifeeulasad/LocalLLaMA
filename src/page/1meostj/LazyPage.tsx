import React, { lazy, Suspense } from 'react';

const Page1meostj = lazy(() => import('./Page'));

const LazyPage1meostj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meostj />
  </Suspense>
);

export { LazyPage1meostj };
