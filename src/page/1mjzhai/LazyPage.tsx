import React, { lazy, Suspense } from 'react';

const Page1mjzhai = lazy(() => import('./Page'));

const LazyPage1mjzhai = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjzhai />
  </Suspense>
);

export { LazyPage1mjzhai };
