import React, { lazy, Suspense } from 'react';

const Page1md1md1 = lazy(() => import('./Page'));

const LazyPage1md1md1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md1md1 />
  </Suspense>
);

export { LazyPage1md1md1 };
