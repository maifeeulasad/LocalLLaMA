import React, { lazy, Suspense } from 'react';

const Page1md6cxq = lazy(() => import('./Page'));

const LazyPage1md6cxq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md6cxq />
  </Suspense>
);

export { LazyPage1md6cxq };
