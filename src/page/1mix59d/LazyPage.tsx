import React, { lazy, Suspense } from 'react';

const Page1mix59d = lazy(() => import('./Page'));

const LazyPage1mix59d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mix59d />
  </Suspense>
);

export { LazyPage1mix59d };
