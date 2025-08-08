import React, { lazy, Suspense } from 'react';

const Page1mjzsx1 = lazy(() => import('./Page'));

const LazyPage1mjzsx1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjzsx1 />
  </Suspense>
);

export { LazyPage1mjzsx1 };
