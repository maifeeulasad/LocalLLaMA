import React, { lazy, Suspense } from 'react';

const Page1lu4t37 = lazy(() => import('./Page'));

const LazyPage1lu4t37 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu4t37 />
  </Suspense>
);

export { LazyPage1lu4t37 };
