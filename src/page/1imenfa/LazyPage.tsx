import React, { lazy, Suspense } from 'react';

const Page1imenfa = lazy(() => import('./Page'));

const LazyPage1imenfa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1imenfa />
  </Suspense>
);

export { LazyPage1imenfa };
