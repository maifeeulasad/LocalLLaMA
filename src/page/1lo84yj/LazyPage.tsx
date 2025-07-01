import React, { lazy, Suspense } from 'react';

const Page1lo84yj = lazy(() => import('./Page'));

const LazyPage1lo84yj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo84yj />
  </Suspense>
);

export { LazyPage1lo84yj };
