import React, { lazy, Suspense } from 'react';

const Page1mcz2pu = lazy(() => import('./Page'));

const LazyPage1mcz2pu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcz2pu />
  </Suspense>
);

export { LazyPage1mcz2pu };
