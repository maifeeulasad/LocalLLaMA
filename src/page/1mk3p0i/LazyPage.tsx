import React, { lazy, Suspense } from 'react';

const Page1mk3p0i = lazy(() => import('./Page'));

const LazyPage1mk3p0i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk3p0i />
  </Suspense>
);

export { LazyPage1mk3p0i };
