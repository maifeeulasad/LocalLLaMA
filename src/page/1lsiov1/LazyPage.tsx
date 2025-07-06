import React, { lazy, Suspense } from 'react';

const Page1lsiov1 = lazy(() => import('./Page'));

const LazyPage1lsiov1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsiov1 />
  </Suspense>
);

export { LazyPage1lsiov1 };
