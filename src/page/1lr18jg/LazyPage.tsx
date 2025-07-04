import React, { lazy, Suspense } from 'react';

const Page1lr18jg = lazy(() => import('./Page'));

const LazyPage1lr18jg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr18jg />
  </Suspense>
);

export { LazyPage1lr18jg };
