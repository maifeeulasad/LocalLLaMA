import React, { lazy, Suspense } from 'react';

const Page1m3rpx1 = lazy(() => import('./Page'));

const LazyPage1m3rpx1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3rpx1 />
  </Suspense>
);

export { LazyPage1m3rpx1 };
