import React, { lazy, Suspense } from 'react';

const Page1mezgxf = lazy(() => import('./Page'));

const LazyPage1mezgxf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mezgxf />
  </Suspense>
);

export { LazyPage1mezgxf };
