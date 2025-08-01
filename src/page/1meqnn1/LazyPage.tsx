import React, { lazy, Suspense } from 'react';

const Page1meqnn1 = lazy(() => import('./Page'));

const LazyPage1meqnn1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meqnn1 />
  </Suspense>
);

export { LazyPage1meqnn1 };
