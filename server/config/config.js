//======================
// PUERTO
//======================
process.env.PORT = process.env.PORT || 3000;


//======================
// ENTORNO
//======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//======================
// BASE DE DATOS
//======================

let urlDB;

if (process.env.NODE_ENV === 'DEV') {
    urlDB = "mongodb://localhost:27017/cafe";
} else {
    urlDB = "mongodb+srv://jrivero:Ms8nAg8HeQvhW7SZ@cluster0.l8gi8.mongodb.net/test?authSource=admin&replicaSet=atlas-edtr20-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
}

process.env.URLDB = urlDB;