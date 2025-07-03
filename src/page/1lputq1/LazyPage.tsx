import React, { lazy, Suspense } from 'react';

const Page1lputq1 = lazy(() => import('./Page'));

const LazyPage1lputq1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lputq1 />
  </Suspense>
);

export { LazyPage1lputq1 };
