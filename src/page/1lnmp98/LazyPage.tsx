import React, { lazy, Suspense } from 'react';

const Page1lnmp98 = lazy(() => import('./Page'));

const LazyPage1lnmp98 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnmp98 />
  </Suspense>
);

export { LazyPage1lnmp98 };
