import React, { lazy, Suspense } from 'react';

const Page1mjbne6 = lazy(() => import('./Page'));

const LazyPage1mjbne6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjbne6 />
  </Suspense>
);

export { LazyPage1mjbne6 };
