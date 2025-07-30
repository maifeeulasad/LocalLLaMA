import React, { lazy, Suspense } from 'react';

const Page1md2k1b = lazy(() => import('./Page'));

const LazyPage1md2k1b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md2k1b />
  </Suspense>
);

export { LazyPage1md2k1b };
