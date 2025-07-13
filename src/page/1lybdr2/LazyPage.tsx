import React, { lazy, Suspense } from 'react';

const Page1lybdr2 = lazy(() => import('./Page'));

const LazyPage1lybdr2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lybdr2 />
  </Suspense>
);

export { LazyPage1lybdr2 };
