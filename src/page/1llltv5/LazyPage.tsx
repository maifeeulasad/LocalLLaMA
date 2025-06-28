import React, { lazy, Suspense } from 'react';

const Page1llltv5 = lazy(() => import('./Page'));

const LazyPage1llltv5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llltv5 />
  </Suspense>
);

export { LazyPage1llltv5 };
