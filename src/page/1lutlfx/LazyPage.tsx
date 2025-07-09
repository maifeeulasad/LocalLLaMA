import React, { lazy, Suspense } from 'react';

const Page1lutlfx = lazy(() => import('./Page'));

const LazyPage1lutlfx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lutlfx />
  </Suspense>
);

export { LazyPage1lutlfx };
