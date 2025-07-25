import React, { lazy, Suspense } from 'react';

const Page1m8ja65 = lazy(() => import('./Page'));

const LazyPage1m8ja65 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8ja65 />
  </Suspense>
);

export { LazyPage1m8ja65 };
