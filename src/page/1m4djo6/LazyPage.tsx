import React, { lazy, Suspense } from 'react';

const Page1m4djo6 = lazy(() => import('./Page'));

const LazyPage1m4djo6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4djo6 />
  </Suspense>
);

export { LazyPage1m4djo6 };
