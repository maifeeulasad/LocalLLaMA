import React, { lazy, Suspense } from 'react';

const Page1miagcn = lazy(() => import('./Page'));

const LazyPage1miagcn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miagcn />
  </Suspense>
);

export { LazyPage1miagcn };
