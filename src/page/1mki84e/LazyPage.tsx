import React, { lazy, Suspense } from 'react';

const Page1mki84e = lazy(() => import('./Page'));

const LazyPage1mki84e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mki84e />
  </Suspense>
);

export { LazyPage1mki84e };
