import React, { lazy, Suspense } from 'react';

const Page1mjyuv5 = lazy(() => import('./Page'));

const LazyPage1mjyuv5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjyuv5 />
  </Suspense>
);

export { LazyPage1mjyuv5 };
