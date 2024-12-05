const createRoute = <TRoute>(author: string, route: TRoute) => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`);
  return route;
};
