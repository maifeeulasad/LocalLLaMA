import React, { lazy, Suspense } from 'react';

const Page1md2ul2 = lazy(() => import('./Page'));

const LazyPage1md2ul2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md2ul2 />
  </Suspense>
);

export { LazyPage1md2ul2 };
