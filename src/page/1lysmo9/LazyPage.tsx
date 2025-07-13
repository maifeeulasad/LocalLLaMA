import React, { lazy, Suspense } from 'react';

const Page1lysmo9 = lazy(() => import('./Page'));

const LazyPage1lysmo9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lysmo9 />
  </Suspense>
);

export { LazyPage1lysmo9 };
