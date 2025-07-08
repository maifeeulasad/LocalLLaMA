import React, { lazy, Suspense } from 'react';

const Page1lu7506 = lazy(() => import('./Page'));

const LazyPage1lu7506 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu7506 />
  </Suspense>
);

export { LazyPage1lu7506 };
