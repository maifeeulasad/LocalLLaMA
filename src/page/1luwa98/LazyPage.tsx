import React, { lazy, Suspense } from 'react';

const Page1luwa98 = lazy(() => import('./Page'));

const LazyPage1luwa98 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luwa98 />
  </Suspense>
);

export { LazyPage1luwa98 };
