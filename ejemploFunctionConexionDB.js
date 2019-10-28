var ibmdb = require('ibm_db');
/**
  * Retrieve event information by searching
  *
  * Written by Harry Bazalar
  */

function fetchEventByRuc(dsn, prueba) {
 try {
    //Consulta con una base de datos DB2
    var conn=ibmdb.openSync(dsn);
    // Permite usar un query para hacer busquedas dentro de una DB
    var data = conn.querySync("select prueba from persona where prueba like ?", prueba);
    conn.closeSync();
    var resString = "Datos de la persona:\n";
  if (prueba.length == 0) {
    resString = "Lo siento, no encontré el dato de la persona " + prueba + "\n";
  } else {
    for (var i = 0; i < data.length; i++) {
      resString += "CustNum: " + data[i]['PRUEBA'] }
  }
    // Return both generated string and data
    return {result : resString, data : data};
 } catch (e) {
     return { dberror : e }
 }
}

function main({ruc, __bx_creds: {dashDB:{dsn}}}) {
	return fetchEventByRuc(dsn,ruc);
}

