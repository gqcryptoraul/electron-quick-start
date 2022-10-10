document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle()
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system()
  document.getElementById('theme-source').innerHTML = 'System'
})

document.getElementById('open-fiscal').addEventListener('click', async () => {
   //var ruta ="c:\\Users\\User\\electron-quick-start\\dll\\rigazsaNetsoft.dll
   puerto = document.querySelector('#puerto').value;
   alert('El puerto Seleccionado es COM: ' + puerto)
   var ruta = __dirname + "\\dll\\rigazsaNetsoft.dll"
  
  var ffi = require("ffi-napi");
 
  

var libm = ffi.Library(ruta, {
  'PFabrepuerto': [ 'string', ['string'] ],
  'PFabrepuertoWiFi': [ 'string', ['string','string'] ],
  'PFcierrapuerto': [ 'string', [] ],
  'PFestatus': [ 'string', ['string'] ],
  'PFrepx': [ 'string', [] ],
  'PFrepz': [ 'string', [] ],
  'PFrepMemNF': [ 'string', ['string','string','string'] ],
  'PFRepMemoriaNumero': [ 'string', ['string','string','string'] ],
  'PFrepmemauditorapf': [ 'string', ['string','string','string'] ],
  'PFrepmemauditorapn': [ 'string', ['string','string','string'] ],
  'PFabrefiscal': [ 'string', ['string','string'] ],
  'PFTfiscal': [ 'string', ['string'] ],
  'PFsubtotal': [ 'string', [] ],
  'PFCancelaDoc': [ 'string', ['string','string'] ],
  'PFrenglon': [ 'string', ['string','string','string','string'] ],
  'PFtotal': [ 'string', [] ],
  'PFparcial': [ 'string', [] ],
  'PFDevolucion': [ 'string', ['string','string','string','string','string','string'] ],
  'PFBarra': [ 'string', ['string','string','string'] ],
  'PFdescuentomonto': [ 'string', ['string','string', 'string'] ],
  'PFdescuentoporc': [ 'string', ['string','string', 'string'] ],
  'PFAbreNF': [ 'string', [] ],
  'PFLineaNF': [ 'string', ['string'] ],
  'PFCierraNF': [ 'string', [] ],
  'PFSerial': [ 'string', [] ],
  'PFCortar': [ 'string', [] ],
  'PFavanzapapel': [ 'string', [] ],
  'PFGaveta': [ 'string', [] ],
  'PFconsultaconfiguracion': [ 'string', ['string'] ],
  'PFcambiofecha': [ 'string', ['string','string'] ],
  'PFLeereloj': [ 'string', [] ],
  'PFconfencabezado': [ 'string', ['string'] ],
  'PFconfpiepagina': [ 'string', ['string'] ],
  'PFconfintervaloZ': [ 'string', ['string'] ],
  'PFconfhoramilitar': [ 'string', ['string'] ],
  'PFconfacumuladorescero': [ 'string', ['string'] ],
  'PFconfconexwifi': [ 'string', ['string','string','string','string','string','string','string','string'] ],
  'PFappremotaenvio': [ 'string', ['string'] ],
  'PFultimo': [ 'string', [] ],
  'PFcanceladocRG': [ 'string', [] ],
  'PFpagoMonto': [ 'string', ['string'] ],
  'PFpagoImpuesto': [ 'string', ['string'] ]
   });
   
   
   var PFabrepuerto = libm.PFabrepuerto(puerto)
   alert(PFabrepuerto)

})
