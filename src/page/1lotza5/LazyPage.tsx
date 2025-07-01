import React, { lazy, Suspense } from 'react';

const Page1lotza5 = lazy(() => import('./Page'));

const LazyPage1lotza5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lotza5 />
  </Suspense>
);

export { LazyPage1lotza5 };
