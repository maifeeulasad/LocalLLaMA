import React, { lazy, Suspense } from 'react';

const Page1luyhi9 = lazy(() => import('./Page'));

const LazyPage1luyhi9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luyhi9 />
  </Suspense>
);

export { LazyPage1luyhi9 };
