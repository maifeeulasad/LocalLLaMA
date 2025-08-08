import React, { lazy, Suspense } from 'react';

const Page1mk1jwk = lazy(() => import('./Page'));

const LazyPage1mk1jwk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk1jwk />
  </Suspense>
);

export { LazyPage1mk1jwk };
