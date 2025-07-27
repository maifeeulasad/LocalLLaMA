import React, { lazy, Suspense } from 'react';

const Page1m9tv80 = lazy(() => import('./Page'));

const LazyPage1m9tv80 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9tv80 />
  </Suspense>
);

export { LazyPage1m9tv80 };
