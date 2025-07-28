import React, { lazy, Suspense } from 'react';

const Page1malflg = lazy(() => import('./Page'));

const LazyPage1malflg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1malflg />
  </Suspense>
);

export { LazyPage1malflg };
