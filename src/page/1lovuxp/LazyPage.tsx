import React, { lazy, Suspense } from 'react';

const Page1lovuxp = lazy(() => import('./Page'));

const LazyPage1lovuxp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lovuxp />
  </Suspense>
);

export { LazyPage1lovuxp };
