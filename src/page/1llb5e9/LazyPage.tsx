import React, { lazy, Suspense } from 'react';

const Page1llb5e9 = lazy(() => import('./Page'));

const LazyPage1llb5e9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llb5e9 />
  </Suspense>
);

export { LazyPage1llb5e9 };
