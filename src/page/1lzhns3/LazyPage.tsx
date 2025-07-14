import React, { lazy, Suspense } from 'react';

const Page1lzhns3 = lazy(() => import('./Page'));

const LazyPage1lzhns3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzhns3 />
  </Suspense>
);

export { LazyPage1lzhns3 };
