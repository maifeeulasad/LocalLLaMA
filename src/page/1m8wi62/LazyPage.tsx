import React, { lazy, Suspense } from 'react';

const Page1m8wi62 = lazy(() => import('./Page'));

const LazyPage1m8wi62 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8wi62 />
  </Suspense>
);

export { LazyPage1m8wi62 };
