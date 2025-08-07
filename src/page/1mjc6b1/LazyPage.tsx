import React, { lazy, Suspense } from 'react';

const Page1mjc6b1 = lazy(() => import('./Page'));

const LazyPage1mjc6b1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjc6b1 />
  </Suspense>
);

export { LazyPage1mjc6b1 };
