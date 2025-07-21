import React, { lazy, Suspense } from 'react';

const Page1m4vw29 = lazy(() => import('./Page'));

const LazyPage1m4vw29 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4vw29 />
  </Suspense>
);

export { LazyPage1m4vw29 };
