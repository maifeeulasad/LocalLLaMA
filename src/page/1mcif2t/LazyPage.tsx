import React, { lazy, Suspense } from 'react';

const Page1mcif2t = lazy(() => import('./Page'));

const LazyPage1mcif2t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcif2t />
  </Suspense>
);

export { LazyPage1mcif2t };
