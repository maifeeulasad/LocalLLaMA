import React, { lazy, Suspense } from 'react';

const Page1mbviok = lazy(() => import('./Page'));

const LazyPage1mbviok = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbviok />
  </Suspense>
);

export { LazyPage1mbviok };
