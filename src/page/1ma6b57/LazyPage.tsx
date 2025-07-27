import React, { lazy, Suspense } from 'react';

const Page1ma6b57 = lazy(() => import('./Page'));

const LazyPage1ma6b57 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma6b57 />
  </Suspense>
);

export { LazyPage1ma6b57 };
