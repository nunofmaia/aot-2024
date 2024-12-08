// `declare global` is only required because this is a module.
// Otherwise, `declare namespace NodeJS` would be sufficient
// and the `export {}` would not be necessary.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MOOD_LIGHTS: "true";
      BATH_TEMPERATURE: "327.59";
      STRAWBERRIES: "chocolate";
    }
  }
}

export {};
