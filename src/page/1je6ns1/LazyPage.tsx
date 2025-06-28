import React, { lazy, Suspense } from 'react';

const Page1je6ns1 = lazy(() => import('./Page'));

const LazyPage1je6ns1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1je6ns1 />
  </Suspense>
);

export { LazyPage1je6ns1 };
