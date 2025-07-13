import React, { lazy, Suspense } from 'react';

const Page1lysqk7 = lazy(() => import('./Page'));

const LazyPage1lysqk7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lysqk7 />
  </Suspense>
);

export { LazyPage1lysqk7 };
