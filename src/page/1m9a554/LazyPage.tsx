import React, { lazy, Suspense } from 'react';

const Page1m9a554 = lazy(() => import('./Page'));

const LazyPage1m9a554 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9a554 />
  </Suspense>
);

export { LazyPage1m9a554 };
