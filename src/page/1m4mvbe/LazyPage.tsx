import React, { lazy, Suspense } from 'react';

const Page1m4mvbe = lazy(() => import('./Page'));

const LazyPage1m4mvbe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4mvbe />
  </Suspense>
);

export { LazyPage1m4mvbe };
