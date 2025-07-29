import React, { lazy, Suspense } from 'react';

const Page1mc8hn6 = lazy(() => import('./Page'));

const LazyPage1mc8hn6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc8hn6 />
  </Suspense>
);

export { LazyPage1mc8hn6 };
