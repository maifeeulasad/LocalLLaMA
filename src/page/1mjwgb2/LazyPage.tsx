import React, { lazy, Suspense } from 'react';

const Page1mjwgb2 = lazy(() => import('./Page'));

const LazyPage1mjwgb2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjwgb2 />
  </Suspense>
);

export { LazyPage1mjwgb2 };
