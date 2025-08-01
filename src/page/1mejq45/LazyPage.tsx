import React, { lazy, Suspense } from 'react';

const Page1mejq45 = lazy(() => import('./Page'));

const LazyPage1mejq45 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mejq45 />
  </Suspense>
);

export { LazyPage1mejq45 };
