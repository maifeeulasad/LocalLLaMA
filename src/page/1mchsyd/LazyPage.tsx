import React, { lazy, Suspense } from 'react';

const Page1mchsyd = lazy(() => import('./Page'));

const LazyPage1mchsyd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mchsyd />
  </Suspense>
);

export { LazyPage1mchsyd };
