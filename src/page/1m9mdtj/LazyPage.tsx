import React, { lazy, Suspense } from 'react';

const Page1m9mdtj = lazy(() => import('./Page'));

const LazyPage1m9mdtj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9mdtj />
  </Suspense>
);

export { LazyPage1m9mdtj };
