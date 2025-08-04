import React, { lazy, Suspense } from 'react';

const Page1mgo662 = lazy(() => import('./Page'));

const LazyPage1mgo662 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgo662 />
  </Suspense>
);

export { LazyPage1mgo662 };
