/* CONCEPTS TO DISPLAY ON LABELS */
var horLabel = "X-axis";
var verLabel = "Y-axis";
var sizeLabel = "Bubble size";
var alphaLabel = "Opacity";
var colorLabel = "Color";

/* WIDTH-HEIGHT RATIO FOR THE CHART CANVAS*/
var ratio = 0.6;

/* WITH VALUE 1 BIGGEST BUBBLE IS 100px x 100px, IF YOU WANT IT 50 x 50, CHANGE VALUE TO 0.5, IF YOU WANT IT 200px, USE 2. WHEN THERE ARE ONLY TWO VARIABLES (NO SIZE VARIABLE), THE DEFAULT SIZE IS 10 PX*/
var bubblesize = 1.5;

/*NAME, X-AXIS, Y-AXIS, BUBBLE SIZE, COLOR, OPACITY*/
var data =[
  ["Albacete",182.9,62.2,120.7,4.4,145.1],
  ["Alicante",894.8,255.6,639.2,21.3,707.7],
  ["Almería",371.7,136,235.7,7.5,190.5],
  ["Álava",158.4,29,129.4,1.4,98],
  ["Asturias",480.4,114.1,366.2,8.7,437],
  ["Ávila",76.1,16.9,59.2,1.1,64.4],
  ["Badajoz",331.8,117.4,214.3,9.9,233.3],
  ["Balears, Illes",593.1,144.1,449,8.5,319.1],
  ["Bizkaia",550.1,94.3,455.8,10,405.1],
  ["Burgos",182.8,32.7,150.1,3.2,119.8],
  ["Cáceres",178.1,56.2,121.9,5.8,163.4],
  ["Cádiz",575,233.6,341.4,29,430],
  ["Cantabria",278.5,53.5,225,4.5,211.9],
  ["Castellón",292.6,81.1,211.5,5.4,192.1],
  ["Ciudad Real",227.8,69.6,158.2,7.2,202.4],
  ["Córdoba",378.1,131.1,247.1,14.6,270.3],
  ["Coruña, A",567.7,114,453.8,9.4,406.4],
  ["Cuenca",88.7,21.9,66.8,2.2,89],
  ["Gipuzkoa",313.7,39.5,274.2,3.2,259.2],
  ["Girona",377.8,91.5,286.3,9.5,218.9],
  ["Granada",436.5,162.9,273.6,16,315.5],
  ["Guadalajara",135.8,35,100.8,4.2,68],
  ["Huelva",248.5,89.5,158.9,5.1,172.3],
  ["Huesca",103.7,14.8,88.9,1,80.2],
  ["Jaén",303.4,111.6,191.8,10.2,231],
  ["León",202.6,48.1,154.5,5.2,211.8],
  ["Lleida",209.7,37.3,172.4,5,148.3],
  ["Lugo",152.7,25.9,126.7,2.4,145],
  ["Málaga",780.3,275.4,504.9,15,560.3],
  ["Murcia",732,216.6,515.5,13.1,456.3],
  ["Navarra",306.9,52.6,254.2,4.4,205],
  ["Ourense",133.5,30.3,103.2,3,148.1],
  ["Palencia",75.7,14.1,61.5,0.8,66.5],
  ["Palmas, Las",586.5,198.8,387.7,17.5,322],
  ["Pontevedra",449.5,107.1,342.3,7.5,357.7],
  ["Rioja, La",149.5,28,121.5,2.3,108.7],
  ["Salamanca",157.2,34.1,123.1,3.3,135],
  ["Santa Cruz de Tenerife",531.2,169.6,361.6,15.4,341.7],
  ["Segovia",78,15.9,62.1,1.9,54.9],
  ["Sevilla",929.1,302.5,626.6,26.2,607.2],
  ["Soria",44.6,7,37.6,0.9,32.9],
  ["Tarragona",408.9,104.8,304.1,8.9,250.4],
  ["Teruel",65,10.1,55,1.1,53.2],
  ["Toledo",352.6,107.9,244.7,7.9,200.3],
  ["Valencia/València",1304.6,363.4,941.2,16.7,774.3],
  ["Valladolid",269,53.2,215.7,3.1,178.4],
  ["Zamora",74,18.7,55.3,1.9,90.5],
  ["Zaragoza",488.7,97,391.6,8.1,310.7],
  ["Ceuta",33.4,12.6,20.8,3,27.1],
  ["Melilla",32.2,9.1,23.1,1.6,26.6]
]
