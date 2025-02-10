const URL_BASE = "https://movetrack.develotion.com/";
const IMG_BASE = "https://movetrack.develotion.com/imgs/";
const MENU = document.querySelector("#menu");
const ROUTER = document.querySelector("#routing");
const HOME = document.querySelector("#screen-home");
const LOGIN = document.querySelector("#screen-login");
const REGISTER = document.querySelector("#screen-register");
const LOGOUT = document.querySelector("#screen-logout");
const ADD_EXERCISE = document.querySelector("#screen-add-exercise");
const LIST = document.querySelector("#screen-list");
const FILTER = document.querySelector("#screen-filter");
const TIME = document.querySelector("#screen-time");
const MAP = document.querySelector("#screen-map");
/**
 * * All sections
 */
const ALLSECTIONS = new Array(
  ROUTER,
  HOME,
  LOGIN,
  REGISTER,
  LOGOUT,
  ADD_EXERCISE,
  LIST,
  FILTER,
  TIME,
  MAP
);
const SQLI = Array(
  "insert",
  "delete",
  "select",
  "update",
  "drop",
  "alter",
  "create",
  "truncate",
  "exec",
  "union",
  "or",
  "and",
  "where",
  "from",
  "join",
  "table",
  "database",
  "column",
  "values",
  "into",
  "set",
  "grant",
  "revoke",
  "commit",
  "rollback",
  "savepoint",
  "procedure",
  "function",
  "trigger",
  "view",
  "index",
  "constraint",
  "primary",
  "foreign",
  "key",
  "references",
  "check",
  "default",
  "if",
  "exists",
  "not",
  "null",
  "like",
  "between",
  "in",
  "case",
  "when",
  "then",
  "else",
  "end",
  "cast",
  "convert",
  "declare",
  "fetch",
  "open",
  "close",
  "cursor",
  "while",
  "loop",
  "for",
  "each",
  "begin",
  "end",
  "print",
  "exec",
  "execute",
  "sp_",
  "xp_",
  "sys.",
  "information_schema"
);
let countriesarray = Array();