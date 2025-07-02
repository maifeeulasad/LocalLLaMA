import React, { lazy, Suspense } from 'react';

const Page1lp5obe = lazy(() => import('./Page'));

const LazyPage1lp5obe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp5obe />
  </Suspense>
);

export { LazyPage1lp5obe };
