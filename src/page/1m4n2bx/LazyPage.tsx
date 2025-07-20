import React, { lazy, Suspense } from 'react';

const Page1m4n2bx = lazy(() => import('./Page'));

const LazyPage1m4n2bx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4n2bx />
  </Suspense>
);

export { LazyPage1m4n2bx };
