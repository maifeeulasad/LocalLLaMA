import React, { lazy, Suspense } from 'react';

const Page1mcz8sc = lazy(() => import('./Page'));

const LazyPage1mcz8sc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcz8sc />
  </Suspense>
);

export { LazyPage1mcz8sc };
