import React, { lazy, Suspense } from 'react';

const Page1mhcyu0 = lazy(() => import('./Page'));

const LazyPage1mhcyu0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhcyu0 />
  </Suspense>
);

export { LazyPage1mhcyu0 };
