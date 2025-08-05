import React, { lazy, Suspense } from 'react';

const Page1mhp2e5 = lazy(() => import('./Page'));

const LazyPage1mhp2e5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhp2e5 />
  </Suspense>
);

export { LazyPage1mhp2e5 };
