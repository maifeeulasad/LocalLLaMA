import React, { lazy, Suspense } from 'react';

const Page1m43isp = lazy(() => import('./Page'));

const LazyPage1m43isp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m43isp />
  </Suspense>
);

export { LazyPage1m43isp };
