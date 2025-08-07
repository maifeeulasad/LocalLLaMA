import React, { lazy, Suspense } from 'react';

const Page1mjn1u5 = lazy(() => import('./Page'));

const LazyPage1mjn1u5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjn1u5 />
  </Suspense>
);

export { LazyPage1mjn1u5 };
