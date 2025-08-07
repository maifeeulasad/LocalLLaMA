import React, { lazy, Suspense } from 'react';

const Page1mjw3u9 = lazy(() => import('./Page'));

const LazyPage1mjw3u9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjw3u9 />
  </Suspense>
);

export { LazyPage1mjw3u9 };
