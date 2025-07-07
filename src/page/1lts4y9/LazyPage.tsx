import React, { lazy, Suspense } from 'react';

const Page1lts4y9 = lazy(() => import('./Page'));

const LazyPage1lts4y9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lts4y9 />
  </Suspense>
);

export { LazyPage1lts4y9 };
