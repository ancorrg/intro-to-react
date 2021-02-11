/*eslint import/first: "off", no-unused-vars: "off"*/

// ES Modules

// More info: https://flaviocopes.com/es-modules/

/* Def:
 * A module is a JavaScript file that exports
 * one or more values (objects, functions or variables),
 * using the export keyword.
 */

// Default export (one per module)
export default "hello";

const count = 13;

// Named export
export { count };
