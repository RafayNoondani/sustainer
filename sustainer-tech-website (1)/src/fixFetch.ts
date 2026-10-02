// Fix for environments where window.fetch has only a getter and throws
// TypeError: Cannot set property fetch of #<Window> which has only a getter
(function ensureWritableFetch() {
  try {
    if (typeof window === 'undefined') return;

    const originalFetch = window.fetch ? window.fetch.bind(window) : undefined;
    let customFetch = originalFetch;

    // 1. Patch Window.prototype if it has a getter without setter
    if (typeof Window !== 'undefined' && Window.prototype) {
      try {
        const protoDesc = Object.getOwnPropertyDescriptor(Window.prototype, 'fetch');
        if (protoDesc && !protoDesc.set && protoDesc.configurable) {
          Object.defineProperty(Window.prototype, 'fetch', {
            get() {
              return (this as any)._customFetch || originalFetch;
            },
            set(val) {
              (this as any)._customFetch = val;
            },
            configurable: true,
            enumerable: true,
          });
        }
      } catch {
        // Ignore prototype descriptor lock
      }
    }

    // 2. Patch window object directly
    try {
      const winDesc = Object.getOwnPropertyDescriptor(window, 'fetch');
      if (!winDesc || !winDesc.set) {
        Object.defineProperty(window, 'fetch', {
          get() {
            return customFetch || originalFetch;
          },
          set(val) {
            customFetch = val;
          },
          configurable: true,
          enumerable: true,
        });
      }
    } catch {
      // Ignore
    }

    // 3. Patch globalThis if distinct from window
    if (typeof globalThis !== 'undefined' && globalThis !== window) {
      try {
        const gtDesc = Object.getOwnPropertyDescriptor(globalThis, 'fetch');
        if (!gtDesc || !gtDesc.set) {
          Object.defineProperty(globalThis, 'fetch', {
            get() {
              return customFetch || originalFetch;
            },
            set(val) {
              customFetch = val;
            },
            configurable: true,
            enumerable: true,
          });
        }
      } catch {
        // Ignore
      }
    }
  } catch {
    // Ignore safe failure
  }
})();

export {};
