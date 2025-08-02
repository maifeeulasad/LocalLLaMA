import React, { lazy, Suspense } from 'react';

const Page1mex4wg = lazy(() => import('./Page'));

const LazyPage1mex4wg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mex4wg />
  </Suspense>
);

export { LazyPage1mex4wg };
