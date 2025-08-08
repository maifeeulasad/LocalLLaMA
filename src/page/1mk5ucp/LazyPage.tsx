import React, { lazy, Suspense } from 'react';

const Page1mk5ucp = lazy(() => import('./Page'));

const LazyPage1mk5ucp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk5ucp />
  </Suspense>
);

export { LazyPage1mk5ucp };
