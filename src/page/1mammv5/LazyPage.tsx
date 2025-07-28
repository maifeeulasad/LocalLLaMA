import React, { lazy, Suspense } from 'react';

const Page1mammv5 = lazy(() => import('./Page'));

const LazyPage1mammv5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mammv5 />
  </Suspense>
);

export { LazyPage1mammv5 };
