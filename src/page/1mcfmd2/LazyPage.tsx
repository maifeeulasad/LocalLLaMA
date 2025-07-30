import React, { lazy, Suspense } from 'react';

const Page1mcfmd2 = lazy(() => import('./Page'));

const LazyPage1mcfmd2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcfmd2 />
  </Suspense>
);

export { LazyPage1mcfmd2 };
