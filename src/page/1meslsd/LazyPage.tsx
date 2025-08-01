import React, { lazy, Suspense } from 'react';

const Page1meslsd = lazy(() => import('./Page'));

const LazyPage1meslsd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meslsd />
  </Suspense>
);

export { LazyPage1meslsd };
