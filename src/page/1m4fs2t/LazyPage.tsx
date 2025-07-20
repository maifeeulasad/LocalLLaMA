import React, { lazy, Suspense } from 'react';

const Page1m4fs2t = lazy(() => import('./Page'));

const LazyPage1m4fs2t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4fs2t />
  </Suspense>
);

export { LazyPage1m4fs2t };
