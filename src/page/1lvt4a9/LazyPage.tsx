import React, { lazy, Suspense } from 'react';

const Page1lvt4a9 = lazy(() => import('./Page'));

const LazyPage1lvt4a9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvt4a9 />
  </Suspense>
);

export { LazyPage1lvt4a9 };
