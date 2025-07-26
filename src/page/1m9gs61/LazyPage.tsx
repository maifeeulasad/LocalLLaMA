import React, { lazy, Suspense } from 'react';

const Page1m9gs61 = lazy(() => import('./Page'));

const LazyPage1m9gs61 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9gs61 />
  </Suspense>
);

export { LazyPage1m9gs61 };
