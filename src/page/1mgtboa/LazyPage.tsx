import React, { lazy, Suspense } from 'react';

const Page1mgtboa = lazy(() => import('./Page'));

const LazyPage1mgtboa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgtboa />
  </Suspense>
);

export { LazyPage1mgtboa };
