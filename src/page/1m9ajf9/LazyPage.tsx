import React, { lazy, Suspense } from 'react';

const Page1m9ajf9 = lazy(() => import('./Page'));

const LazyPage1m9ajf9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9ajf9 />
  </Suspense>
);

export { LazyPage1m9ajf9 };
