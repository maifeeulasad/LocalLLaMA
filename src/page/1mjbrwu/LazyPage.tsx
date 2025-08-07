import React, { lazy, Suspense } from 'react';

const Page1mjbrwu = lazy(() => import('./Page'));

const LazyPage1mjbrwu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjbrwu />
  </Suspense>
);

export { LazyPage1mjbrwu };
