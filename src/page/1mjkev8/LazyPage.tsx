import React, { lazy, Suspense } from 'react';

const Page1mjkev8 = lazy(() => import('./Page'));

const LazyPage1mjkev8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjkev8 />
  </Suspense>
);

export { LazyPage1mjkev8 };
