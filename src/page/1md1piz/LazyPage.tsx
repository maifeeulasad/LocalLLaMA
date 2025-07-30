import React, { lazy, Suspense } from 'react';

const Page1md1piz = lazy(() => import('./Page'));

const LazyPage1md1piz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md1piz />
  </Suspense>
);

export { LazyPage1md1piz };
