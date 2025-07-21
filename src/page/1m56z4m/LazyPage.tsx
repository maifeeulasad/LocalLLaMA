import React, { lazy, Suspense } from 'react';

const Page1m56z4m = lazy(() => import('./Page'));

const LazyPage1m56z4m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m56z4m />
  </Suspense>
);

export { LazyPage1m56z4m };
