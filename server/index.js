const endpoints = require("./endpoints");

//Server in node to skip cors
endpoints.servidor.Start();
endpoints.servidor.GetIDsMarker();
endpoints.servidor.GetDetailsOfMarker();
endpoints.servidor.GetTypes();
