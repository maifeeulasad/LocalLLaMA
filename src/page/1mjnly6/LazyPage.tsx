import React, { lazy, Suspense } from 'react';

const Page1mjnly6 = lazy(() => import('./Page'));

const LazyPage1mjnly6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjnly6 />
  </Suspense>
);

export { LazyPage1mjnly6 };
