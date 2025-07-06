import React, { lazy, Suspense } from 'react';

const Page1lsxxo2 = lazy(() => import('./Page'));

const LazyPage1lsxxo2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsxxo2 />
  </Suspense>
);

export { LazyPage1lsxxo2 };
