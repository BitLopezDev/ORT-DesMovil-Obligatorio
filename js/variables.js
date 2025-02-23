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
// * NAV Follows
const NAV = document.querySelector("ion-nav");
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
  "*",
  "use",
  "using",
  "root",
  "admin",
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
  "flush",
  "user",
  "from",
  "join",
  "inner",
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
//////////////////////////////////
/**
 * * Array of activities
 *  [
        {
            "id": 1,
            "nombre": "Caminata",
            "imagen": 5
        },
        {
            "id": 2,
            "nombre": "Pesas",
            "imagen": 6
        },
        {
            "id": 4,
            "nombre": "Fútbol",
            "imagen": 2
        },
        {
            "id": 5,
            "nombre": "Natación",
            "imagen": 1
        },
        {
            "id": 6,
            "nombre": "HIIT",
            "imagen": 6
        },
        {
            "id": 7,
            "nombre": "Correr",
            "imagen": 5
        },
        {
            "id": 8,
            "nombre": "Bicicleta",
            "imagen": 4
        },
        {
            "id": 9,
            "nombre": "Basketball",
            "imagen": 3
        }
    ]
 */

let activitiesarray = Array();
//////////////////////////////////
/**
 * * Array of activities
 * from https://movetrack.develotion.com/registros.php?idUsuario=1632
 * [
        {
            "id": 77196,
            "idActividad": 6,
            "idUsuario": 1632,
            "tiempo": 110,
            "fecha": "2024-09-21"
        },
        {
            "id": 77200,
            "idActividad": 6,
            "idUsuario": 1632,
            "tiempo": 110,
            "fecha": "2024-09-21"
        }
    ]

 */
let listarray = Array();
//////////////////////////////////
let usersCountryArray = new Array();

let usersCountCountryArray = new Array();

var Argentina;
var Bolivia;
var Brazil;
var Chile;
var Colombia;
var Ecuador;
var Paraguay;
var Peru;
var Uruguay;
var Venezuela;
