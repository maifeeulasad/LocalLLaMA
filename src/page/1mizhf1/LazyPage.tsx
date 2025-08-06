import React, { lazy, Suspense } from 'react';

const Page1mizhf1 = lazy(() => import('./Page'));

const LazyPage1mizhf1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mizhf1 />
  </Suspense>
);

export { LazyPage1mizhf1 };
