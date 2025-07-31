import React, { lazy, Suspense } from 'react';

const Page1md84d6 = lazy(() => import('./Page'));

const LazyPage1md84d6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md84d6 />
  </Suspense>
);

export { LazyPage1md84d6 };
