import React, { lazy, Suspense } from 'react';

const Page1m9dysd = lazy(() => import('./Page'));

const LazyPage1m9dysd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9dysd />
  </Suspense>
);

export { LazyPage1m9dysd };
