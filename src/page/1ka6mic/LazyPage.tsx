import React, { lazy, Suspense } from 'react';

const Page1ka6mic = lazy(() => import('./Page'));

const LazyPage1ka6mic = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ka6mic />
  </Suspense>
);

export { LazyPage1ka6mic };
