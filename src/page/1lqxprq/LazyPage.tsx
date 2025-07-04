import React, { lazy, Suspense } from 'react';

const Page1lqxprq = lazy(() => import('./Page'));

const LazyPage1lqxprq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqxprq />
  </Suspense>
);

export { LazyPage1lqxprq };
