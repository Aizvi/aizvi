/**
 * These types are automatically added to the global scope, because there is no import/export
 * statement at the file top-level. Or in other words, they become global type declarations, as the
 * file is not a module. And you don't have to import global declarations manually, they are
 * implicitly known (like the TS lib types).
 * If you want to convert this into a module, add export {} in src/types/types.d.ts to make it a
 * module - now there will be an error triggered.
 * Regarding the `declare`: You can just leave that keyword out. A type is always an ambient (just
 * a declaration "without implementation" at run-time) declaration, so it is kind of redundant.
 * ---
 * Don’t use namespace:
 * namespace was kinda useful in pre ES2015 modules era. We don't need it anymore.
 * Cannot be used with babel for transpiling, If you really need some kind of namespacing within
 * your module, just use idiomatic JavaScript.
 * ----
 * Should we use Type aliases or interfaces?
 * From practical side, using interface declaration will create an identity (interface name) in
 * compiler errors, on the contrary `type aliases` doesn't create an identity and will be unwinded to
 * show all the properties and nested types it consists of. Although I prefer to use `type` most of
 * the time there are some places this can become too noisy when reading compiler errors and that's
 * why I like to leverage this distinction to hide some of not so important type details in errors
 * using interfaces identity.
 * Technical difference:
 * interfaces are different from types in TypeScript, but they can be used for very similar things
 * as far as common React uses cases are concerned. Here's a helpful rule of thumb:
 * always use interface for public API's definition when authoring a library or 3rd party ambient
 * type definitions.
 * consider using `type` for your React Component Props and State, because it is more constrained.
 * Types are useful for union types (e.g. type MyType = TypeA | TypeB) whereas Interfaces are better
 * for declaring dictionary shapes and then implementing or extending them.
 */
//#region Types

// Global Types for reusability
type PromiseResult<T> = T extends Promise<infer U> ? U : T;


// Type for Product
type Product = {
	id: number;
};

type ProductDummy = {
	title: string;
	description: string;
	image: string;
	price: string;
}

// Type for ProductCategory
type ProductCategory = {
	id: number;
	name: string;
	slug: string;
	parent: number;
	image: string | null;
	count: number;
};

//#endregion Types
