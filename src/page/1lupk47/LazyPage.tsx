import React, { lazy, Suspense } from 'react';

const Page1lupk47 = lazy(() => import('./Page'));

const LazyPage1lupk47 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lupk47 />
  </Suspense>
);

export { LazyPage1lupk47 };
