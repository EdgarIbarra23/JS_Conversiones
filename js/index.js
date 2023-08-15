const miSelect = document.getElementById('decision');

const nuevosValores = ['valor0','valor1', 'valor2', 'valor3', 'valor4', 'valor5', 'valor6', 'valor7', 'valor8', 'valor9', 'valor10', 'valor11', 'valor12', 'valor13', 'valor14'];
const nuevosTextos = ['Seleccione...','Consumo de Combustible', 'Energia', 'Frecuencia', 'Longitud', 'Masa', 'Presión', 'Tamaño de Datos', 'Tasa de Transmisión de Datos', 'Temperatura', 'Tiempo', 'Velocidad', 'Volumen', 'Ángulo Plano', 'Área'];

let nuevosOption;
for (let i = 0; i < nuevosValores.length; i++) {
  nuevosOption = document.createElement('option');
  nuevosOption.value = nuevosValores[i];
  nuevosOption.text = nuevosTextos[i];
  miSelect.appendChild(nuevosOption);
}

miSelect.addEventListener('change', function(){

  const select1 = document.getElementById('selector1');
  const select2 = document.getElementById('selector2');
  let formula = document.getElementById('formula');
  let inputIngreso = document.getElementById('valor1');
  const optionPredeterminados = "Seleccione..."
  let valor_select1;
  let valor_select2;

  select1.innerHTML = '';
  select2.innerHTML = '';
  document.getElementById('valorFinal').value = '';
  formula.textContent = '';
  inputIngreso.value = 0;

  const datos = {
    valor1: {
      valor : ['1.0','1.1', '1.2', '1.3', '1.4'],
      texto : [optionPredeterminados, 'Milla por Galón Americano', 'Milla por Galón (Imperial)', 'Kilómetro por Litro', 'Litro por 100 Kilómetros']
    },

    valor2: {
      valor : ['2.0', '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '2.10'],
      texto : [optionPredeterminados,'Julio', 'KiloJulio', 'Cáloria-Gramo', 'KiloCaloría', 'Vatio-Hora', 'Kilovatio-Hora', 'Electronvoltio', 'Unidad Términca Británica', 'Termia EstadoUnidense', 'Pie-Libra-Fuerza']
    },

    valor3 : {
      valor : ['3.0','3.1', '3.2', '3.3', '3.4'],
      texto : [optionPredeterminados, 'Hercio', 'KiloHercio', 'MegaHercio', 'GigaHercio']
    },

    valor4 : {
      valor : ['4.0','4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '4.10', '4.11'],
      texto : [optionPredeterminados, 'Kilómetro', 'Metro', 'Centímetro', 'Milímetro', 'Micrómetro', 'Nanómetro', 'Milla', 'Yarda', 'Pie', 'Pulgada', 'Milla Náutica']
    },

    valor5 : {
      valor : ['5.0','5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '5.10'],
      texto : [optionPredeterminados, 'Tonelada', 'Kilogramo', 'Gramo', 'Miligramo', 'Microgramo', 'Tonelada Larga', 'Tonelada Corta', 'Stone', 'Libra', 'Onza']
    },

    valor6 : {
      valor : ['6.0','6.1', '6.2', '6.3', '6.4', '6.5'],
      texto : [optionPredeterminados, 'Atmósfera', 'Bar', 'Libra por Pulgada Cuadrada', 'Pascal', 'Torr']
    },

    valor7 : {
      valor : ['7.0','7.1','7.2', '7.3', '7.4', '7.5', '7.6', '7.7', '7.8', '7.9', '7.10', '7.11','7.12', '7.13', '7.14', '7.15', '7.16', '7.17', '7.18', '7.19', '7.20', '7.21', '7.22'],
      texto : [optionPredeterminados, 'Bit', 'Kilobit', 'Kibibit', 'Megabit', 'Mebibit', 'Gigabit', 'Gibibit', 'Terabit', 'Tebibit', 'Petabit', 'Pebibit', 'Byte', 'Kilobyte', 'Kibibyte', 'Megabyte', 'Mebibyte', 'Gigabyte', 'Gibibyte', 'Terabyte', 'Tebibyte', 'Petabyte', 'Pebibyte']
    },

    valor8 : {
      valor : ['8.0', '8.1', '8.2', '8.3', '8.4', '8.5', '8.6', '8.7', '8.8', '8.9', '8.10', '8.11','8.12', '8.13'],
      texto : [optionPredeterminados, 'Bit por Segundo', 'Kilobit por Segundo', 'Kilobyte por Segundo', 'Kibibit por Segundo', 'Megabit por Segundo', 'Megabyte por Segundo', 'Mebibir por Segundo', 'Gigabit por Segundo', 'Gigabyte por Segundo', 'Gibibit por Segundo', 'Terabit por Segundo', 'Terabyte por Segundo', 'Tebibit por Segundo']
    },

    valor9 : {
      valor : ['9.0','9.1', '9.2', '9.3'],
      texto : [optionPredeterminados, 'Grado Celsius', 'Grado Fahrenheit', 'Kelvin']
    }, 

    valor10: {
      valor : ['10.0','10.1','10.2', '10.3', '10.4', '10.5', '10.6', '10.7', '10.8', '10.9', '10.10', '10.11','10.12'],
      texto : [optionPredeterminados, 'Nanosegundo', 'Microsegundo', 'Milisegundo', 'Segundo', 'Minuto', 'Hora', 'Día', 'Semana', 'Mes', 'Año', 'Década', 'Síglo']
    },

    valor11 : {
      valor : ['11.0', '11.1', '11.2', '11.3', '11.4', '11.5'],
      texto : [optionPredeterminados, 'Milla por Hora', 'Pie por Segundo', 'Metro por Segundo', 'Kilómetro por Hora', 'Nudo']
    },

    valor12 : {
      valor : ['12.0', '12.1','12.2', '12.3', '12.4', '12.5', '12.6', '12.7', '12.8', '12.9', '12.10', '12.11','12.12', '12.13', '12.14', '12.15', '12.16', '12.17', '12.18', '12.19'],
      texto : [optionPredeterminados, 'Galón Estadounidense', 'Cuarto Estadounidense', 'Pinta Estadounidense', 'Taza Americana Oficial', 'Onza Líquida Estadounidense', 'Cucharada Estadounidense', 'Cucharadita Estadounidense', 'Metro Cúbico', 'Litro', 'Mililitro', 'Galón Imperial', 'Cuarto Imperial', 'Pinta Imperial', 'Taza Imperial', 'Onza Liquida Imperial', 'Cucharada Imperial', 'Cucharadita Imperial', 'Pie Cúbico', 'Pulgada Cúbica']
    },

    valor13 : {
      valor : ['13.0','13.1','13.2', '13.3', '13.4', '13.5', '13.6'],
      texto : [optionPredeterminados, 'Grado', 'Grado Centesimal', 'Milirradián', 'Minuto de Arco', 'Radián', 'Segundo de Arco']
    },

    valor14 : {
      valor : ['14.0', '14.1', '14.2', '14.3', '14.4', '14.5', '14.6', '14.7', '14.8'],
      texto : [optionPredeterminados, 'Kilómetro Cuadrado', 'Metro Cuadrado', 'Milla Cuadrada', 'Yarda Cuadrada', 'Pie Cuadrado', 'Pulgada Cuadrada', 'Hectaria', 'Acre']
    }
  }

  function traerValoresAndTexto(valores, texto){
    for (let i = 0; i < valores.length; i++){
      valor_select1 = document.createElement('option');
      valor_select1.value = valores[i];
      valor_select1.text = texto[i];
      select1.appendChild(valor_select1);

      valor_select2 = document.createElement('option');
      valor_select2.value = valores[i];
      valor_select2.text = texto[i];
      select2.appendChild(valor_select2);
    }
  };

  function NoValido(){
    formula.textContent = "Seleccione las unidades para realizar la conversión.";
    formula.style.color = "RED";
    document.getElementById('valorFinal').value = '';
  }

  switch (miSelect.value) {
    
    case 'valor1':
      traerValoresAndTexto(datos.valor1.valor, datos.valor1.texto);
      
      function FormulaCombustible(valor1, valor2) {
        let valorPrincipal = parseFloat(inputIngreso.value);
        let operacion;

        if (valor1 == valor2 || valor1 == "1.0" && valor2 || valor1 && valor2 == "1.0"){
          NoValido();
        }  else {

          switch (valor1) {

            case "1.1": 

              switch (valor2) {
                 
                case "1.2":
                  operacion = valorPrincipal * 1201;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de consumo de combustible por 1,201";
                  formula.style.color = 'black';
                break;

                case "1.3":
                  operacion = valorPrincipal / 2352;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de consumo de combustible entre 2,352";
                  formula.style.color = 'black';
                break;

                case "1.4":
                  operacion = 235215 / valorPrincipal;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "235.215/("+valorPrincipal+"US mpg) = "+operacion+"L/100 km";
                  formula.style.color = 'black';
                break;
              }
              
            break;

            case "1.2": 

              switch (valor2) {
                 
                case "1.1":
                  operacion = valorPrincipal / 1201;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de consumo de combustible entre 1,201"
                  formula.style.color = 'black';
                break;

                case "1.3":
                  operacion = valorPrincipal / 2825;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de consumo de combustible entre 2,825";
                  formula.style.color = 'black';
                break;

                case "1.4":
                  operacion = 282481 / valorPrincipal;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "282.481/("+valorPrincipal+" I mpg) = "+operacion+" L/100 km";
                  formula.style.color = 'black';
                break;
              }

            break;

            case "1.3": 

              switch (valor2) {
                 
                case "1.1":
                  operacion = valorPrincipal * 2352;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de consumo de combustible por 2,352";
                  formula.style.color = 'black';
                break;

                case "1.2":
                  operacion = valorPrincipal * 2825;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de consumo de combustible por 2,825";
                  formula.style.color = 'black';
                break;

                case "1.4":
                  operacion = 100 / valorPrincipal;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "100/("+valorPrincipal+" km/L) = "+operacion+" L/100 km";
                  formula.style.color = 'black';
                break;
              }

            break;

            case "1.4": 

              switch (valor2) {
                 
                case "1.1":
                  operacion = 235215 / valorPrincipal;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "235.215/("+valorPrincipal+" L/100 km) = "+operacion+" US mpg";
                  formula.style.color = 'black';
                break;

                case "1.2":
                  operacion = 282481 / valorPrincipal;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "282.481/("+valorPrincipal+" L/100 km) = "+operacion+" I mpg";
                  formula.style.color = 'black';
                break;

                case "1.3":
                  operacion = 100 / valorPrincipal;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "100/("+valorPrincipal+" L/100 km) = "+operacion+" km/L";
                  formula.style.color = 'black';
                break;
              }

            break;
          }
        }
      }

      inputIngreso.addEventListener("input", function(){
        FormulaCombustible(select1.value, select2.value);
      });

      select1.addEventListener("change", function(){
        FormulaCombustible(select1.value, select2.value);
      });
      
      select2.addEventListener("change", function(){
        FormulaCombustible(select1.value, select2.value);
      });
    break;

    case 'valor2':
      traerValoresAndTexto(datos.valor2.valor, datos.valor2.texto);
      
      function FormulaEnergia(valor1, valor2){
        let valorPrincipal = inputIngreso.value;
        let operacion;

        if (valor1 == valor2 || valor1 == "2.0" && valor2 || valor1 && valor2 == "2.0"){
          NoValido();
        }  else {

          switch (valor1){

            case "2.1":

              switch (valor2) {
              
                case "2.2":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 1000";
                  formula.style.color = "black";
                break;
                
                case "2.3":
                  operacion = valorPrincipal / 4.184;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 4,184";
                  formula.style.color = "black";
                break;

                case "2.4":
                  operacion = valorPrincipal / 4184;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 4184";
                  formula.style.color = "black";
                break;

                case "2.5":
                  operacion = valorPrincipal / 3600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 3600";
                  formula.style.color = "black";
                break;

                case "2.6":
                  operacion = valorPrincipal / 3.6e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 3,6e+6 o 3.600.000";
                  formula.style.color = "black";
                break;

                case "2.7":
                  operacion = valorPrincipal * 6.242e+18;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 6,242e+18 o 6.242.000.000.000.000.000";
                  formula.style.color = "black";
                break;

                case "2.8":
                  operacion = valorPrincipal / 1055;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 1055";
                  formula.style.color = "black";
                break;

                case "2.9":
                  operacion = valorPrincipal / 1.055e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 1,055e+8 o 105.500.000";
                  formula.style.color = "black";
                break;

                case "2.10":
                  operacion = valorPrincipal / 1.356;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 1,356";
                  formula.style.color = "black";
                break;
              }
            break;  
          
            case "2.2":

              switch (valor2) {
              
                case "2.1":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 1000";
                  formula.style.color = "black";
                break;
                
                case "2.3":
                  operacion = valorPrincipal * 239;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 239";
                  formula.style.color = "black";
                break;

                case "2.4":
                  operacion = valorPrincipal / 4.184;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 4,184";
                  formula.style.color = "black";
                break;

                case "2.5":
                  operacion = valorPrincipal / 3.6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 3,6";
                  formula.style.color = "black";
                break;

                case "2.6":
                  operacion = valorPrincipal / 3600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 3600";
                  formula.style.color = "black";
                break;

                case "2.7":
                  operacion = valorPrincipal * 6.242e+21;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 6,242e+21 o 6.242.000.000.000.000.000.000";
                  formula.style.color = "black";
                break;

                case "2.8":
                  operacion = valorPrincipal / 1.055;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 1,055";
                  formula.style.color = "black";
                break;

                case "2.9":
                  operacion = valorPrincipal / 105500;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 105500";
                  formula.style.color = "black";
                break;

                case "2.10":
                  operacion = valorPrincipal * 737.6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 737,6";
                  formula.style.color = "black";
                break;
              }
            break;
                 
            case "2.3":

              switch (valor2) {
              
                case "2.1":
                  operacion = valorPrincipal * 4.184;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 4,184";
                  formula.style.color = "black";
                break;
                
                case "2.2":
                  operacion = valorPrincipal / 239;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 239";
                  formula.style.color = "black";
                break;

                case "2.4":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 1000";
                  formula.style.color = "black";
                break;

                case "2.5":
                  operacion = valorPrincipal / 860.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 860,4";
                  formula.style.color = "black";
                break;

                case "2.6":
                  operacion = valorPrincipal / 860400;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 860400";
                  formula.style.color = "black";
                break;

                case "2.7":
                  operacion = valorPrincipal / 2.611e+19;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 2,611e+19 o 26.110.000.000.000.000.000";
                  formula.style.color = "black";
                break;

                case "2.8":
                  operacion = valorPrincipal / 252.2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 252,2";
                  formula.style.color = "black";
                break;

                case "2.9":
                  operacion = valorPrincipal / 2.521e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 2,521e+7 o 25.210.000";
                  formula.style.color = "black";
                break;

                case "2.10":
                  operacion = valorPrincipal * 3.086;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 3,086";
                  formula.style.color = "black";
                break;
              }
            break;

            case "2.4":

              switch (valor2) {
              
                case "2.1":
                  operacion = valorPrincipal * 4184;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 4184";
                  formula.style.color = "black";
                break;
                
                case "2.2":
                  operacion = valorPrincipal * 4.184;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 4,184";
                  formula.style.color = "black";
                break;

                case "2.3":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 1000";
                  formula.style.color = "black";
                break;

                case "2.5":
                  operacion = valorPrincipal * 1.162;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 1,162";
                  formula.style.color = "black";
                break;

                case "2.6":
                  operacion = valorPrincipal / 860.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 860,4";
                  formula.style.color = "black";
                break;

                case "2.7":
                  operacion = valorPrincipal * 2.611e+22;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 2,611e+22";
                  formula.style.color = "black";
                break;

                case "2.8":
                  operacion = valorPrincipal * 3.966;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 3,966";
                  formula.style.color = "black";
                break;

                case "2.9":
                  operacion = valorPrincipal / 25210;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 25210";
                  formula.style.color = "black";
                break;

                case "2.10":
                  operacion = valorPrincipal * 3086;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 3086";
                  formula.style.color = "black";
                break;
              }
            break;

            case "2.5":

              switch (valor2) {
              
                case "2.1":
                  operacion = valorPrincipal * 3600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 3600";
                  formula.style.color = "black";
                break;
                
                case "2.2":
                  operacion = valorPrincipal * 3.6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 3,6";
                  formula.style.color = "black";
                break;

                case "2.3":
                  operacion = valorPrincipal * 860.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 860,4";
                  formula.style.color = "black";
                break;

                case "2.4":
                  operacion = valorPrincipal / 1.162;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 1,162";
                  formula.style.color = "black";
                break;

                case "2.6":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 1000";
                  formula.style.color = "black";
                break;

                case "2.7":
                  operacion = valorPrincipal * 2.247e+22;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 2,247e+22";
                  formula.style.color = "black";
                break;

                case "2.8":
                  operacion = valorPrincipal * 3.412;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por ";
                  formula.style.color = "black";
                break;

                case "2.9":
                  operacion = valorPrincipal / 29300;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 29300";
                  formula.style.color = "black";
                break;

                case "2.10":
                  operacion = valorPrincipal * 2655;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 2655";
                  formula.style.color = "black";
                break;
              }
            break;

            case "2.6":

              switch (valor2) {
              
                case "2.1":
                  operacion = valorPrincipal * 3.6e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 3,6e+6";
                  formula.style.color = "black";
                break;
                
                case "2.2":
                  operacion = valorPrincipal * 3600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 3600";
                  formula.style.color = "black";
                break;

                case "2.3":
                  operacion = valorPrincipal * 860400;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 860400";
                  formula.style.color = "black";
                break;

                case "2.4":
                  operacion = valorPrincipal * 860.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 860,4";
                  formula.style.color = "black";
                break;

                case "2.5":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 1000";
                  formula.style.color = "black";
                break;

                case "2.7":
                  operacion = valorPrincipal * 2.247e+25;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 2,247e+25";
                  formula.style.color = "black";
                break;

                case "2.8":
                  operacion = valorPrincipal * 3412;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 3412";
                  formula.style.color = "black";
                break;

                case "2.9":
                  operacion = valorPrincipal / 29.3;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 29,3";
                  formula.style.color = "black";
                break;

                case "2.10":
                  operacion = valorPrincipal * 2.655e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 2,655e+6";
                  formula.style.color = "black";
                break;
              }
            break;
            
            case "2.7":

              switch (valor2) {
              
                case "2.1":
                  operacion = valorPrincipal / 6.242e+18;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 6,242e+18";
                  formula.style.color = "black";
                break;
                
                case "2.2":
                  operacion = valorPrincipal / 6.242e+21;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 6,242e+21";
                  formula.style.color = "black";
                break;

                case "2.3":
                  operacion = valorPrincipal / 2.611e+19;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 2,611e+19";
                  formula.style.color = "black";
                break;

                case "2.4":
                  operacion = valorPrincipal / 2.611e+22;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 2,611e+22";
                  formula.style.color = "black";
                break;

                case "2.5":
                  operacion = valorPrincipal / 2.247e+22;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 2,247e+22";
                  formula.style.color = "black";
                break;

                case "2.6":
                  operacion = valorPrincipal / 2.247e+25;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 2,247e+25";
                  formula.style.color = "black";
                break;

                case "2.8":
                  operacion = valorPrincipal / 6.585e+21;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 6,585e+21";
                  formula.style.color = "black";
                break;

                case "2.9":
                  operacion = valorPrincipal / 6.584e+26;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 6,584e+26";
                  formula.style.color = "black";
                break;

                case "2.10":
                  operacion = valorPrincipal / 8.462e+18;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 8,462e+18";
                  formula.style.color = "black";
                break;
              }
            break;

            case "2.8":

              switch (valor2) {
              
                case "2.1":
                  operacion = valorPrincipal * 1055;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 1055";
                  formula.style.color = "black";
                break;
                
                case "2.2":
                  operacion = valorPrincipal * 1.055;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 1,055";
                  formula.style.color = "black";
                break;

                case "2.3":
                  operacion = valorPrincipal * 252.2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 252,2";
                  formula.style.color = "black";
                break;

                case "2.4":
                  operacion = valorPrincipal / 3.966;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 3,966";
                  formula.style.color = "black";
                break;

                case "2.5":
                  operacion = valorPrincipal / 3.412;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 3,412";
                  formula.style.color = "black";
                break;

                case "2.6":
                  operacion = valorPrincipal / 3412;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 3412";
                  formula.style.color = "black";
                break;

                case "2.7":
                  operacion = valorPrincipal * 6.585e+21;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 6,585e+21";
                  formula.style.color = "black";
                break;

                case "2.9":
                  operacion = valorPrincipal / 99980;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 99980";
                  formula.style.color = "black";
                break;

                case "2.10":
                  operacion = valorPrincipal * 778.2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 778,2";
                  formula.style.color = "black";
                break;
              }
            break;
        
            case "2.9":

              switch (valor2) {
              
                case "2.1":
                  operacion = valorPrincipal * 1.055e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 1,055e+8";
                  formula.style.color = "black";
                break;
                
                case "2.2":
                  operacion = valorPrincipal * 105500;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 105500";
                  formula.style.color = "black";
                break;

                case "2.3":
                  operacion = valorPrincipal * 2.521e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 2,521e+7";
                  formula.style.color = "black";
                break;

                case "2.4":
                  operacion = valorPrincipal * 25210;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 25210";
                  formula.style.color = "black";
                break;

                case "2.5":
                  operacion = valorPrincipal * 29300;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 29300";
                  formula.style.color = "black";
                break;

                case "2.6":
                  operacion = valorPrincipal * 29.3;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de energía por 29,3";
                  formula.style.color = "black";
                break;

                case "2.7":
                  operacion = valorPrincipal / 6.584e+26;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 6,584e+26";
                  formula.style.color = "black";
                break;

                case "2.8":
                  operacion = valorPrincipal * 99980;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 99980";
                  formula.style.color = "black";
                break;

                case "2.10":
                  operacion = valorPrincipal * 7.78e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 7,78e+7";
                  formula.style.color = "black";
                break;
              }
            break;
 
            case "2.10":

              switch (valor2) {
              
                case "2.1":
                  operacion = valorPrincipal * 1.356;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 1,356";
                  formula.style.color = "black";
                break;
                
                case "2.2":
                  operacion = valorPrincipal / 737.6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 737,6";
                  formula.style.color = "black";
                break;

                case "2.3":
                  operacion = valorPrincipal / 3.086;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 3,086";
                  formula.style.color = "black";
                break;

                case "2.4":
                  operacion = valorPrincipal / 3086;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 3086";
                  formula.style.color = "black";
                break;

                case "2.5":
                  operacion = valorPrincipal / 2655;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 2655";
                  formula.style.color = "black";
                break;

                case "2.6":
                  operacion = valorPrincipal / 2.655e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 2,655e+6";
                  formula.style.color = "black";
                break;

                case "2.7":
                  operacion = valorPrincipal * 8.462e+18;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de energía por 8,462e+18";
                  formula.style.color = "black";
                break;

                case "2.8":
                  operacion = valorPrincipal / 778.2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 778,2";
                  formula.style.color = "black";
                break;

                case "2.9":
                  operacion = valorPrincipal / 7.78e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de energía entre 7,78e+7";
                  formula.style.color = "black";
                break;
              }
            break;
          }
        }
      }

      inputIngreso.addEventListener('input', function(){
        FormulaEnergia(select1.value, select2.value);
      });

      select1.addEventListener('change', function(){
        FormulaEnergia(select1.value, select2.value);
      });

      select2.addEventListener('change', function(){
        FormulaEnergia(select1.value, select2.value);
      })
    break;

    case 'valor3': 
      traerValoresAndTexto(datos.valor3.valor, datos.valor3.texto);

      function FormulaFrecuencia(valor1, valor2){
        let valorPrincipal = inputIngreso.value;
        let operacion; 

        if (valor1 == valor2 || valor1 == "3.0" && valor2 || valor1 && valor2 == "3.0"){
          NoValido();
        } else {

          switch (valor1) {

            case "3.1": 

              switch (valor2) {
                 
                case "3.2":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de frecuencia entre 1.000";
                  formula.style.color = 'black';
                break;

                case "3.3":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de frecuencia entre 1e+6 o 1.000.000";
                  formula.style.color = 'black';
                break;

                case "3.4":
                  operacion = valorPrincipal / 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de frecuencia entre 1e+9 o 1.000.000.000"
                  formula.style.color = 'black';
                break;
              }
              
            break;

            case "3.2": 

              switch (valor2) {
                 
                case "3.1":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de frecuencia por 1.000";
                  formula.style.color = 'black';
                break;

                case "3.3":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de frecuencia entre 1.000";
                  formula.style.color = 'black';
                break;

                case "3.4":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de frecuencia entre 1e+6 o 1.000.000"
                  formula.style.color = 'black';
                break;
              }

            break;

            case "3.3": 

              switch (valor2) {
                 
                case "3.1":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de frecuencia por 1e+6 o 1.000.000";
                  formula.style.color = 'black';
                break;

                case "3.2":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de frecuencia por 1.000";
                  formula.style.color = 'black';
                break;

                case "3.4":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de frecuencia entre 1.000"
                  formula.style.color = 'black';
                break;
              }

            break;

            case "3.4": 

              switch (valor2) {
                 
                case "3.1":
                  operacion = valorPrincipal * 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de frecuencia por 1e+9 o 1.000.000.000";
                  formula.style.color = 'black';
                break;

                case "3.2":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de frecuencia por 1e+6 o 1.000.000";
                  formula.style.color = 'black';
                break;

                case "3.3":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de frecuencia por 1.000"
                  formula.style.color = 'black';
                break;
              }

            break;

          }
        }
      }
      inputIngreso.addEventListener('input', function(){
        FormulaFrecuencia(select1.value, select2.value);
      })

      select1.addEventListener('change', function(){
        FormulaFrecuencia(select1.value, select2.value);
      });

      select2.addEventListener('change', function(){
        FormulaFrecuencia(select1.value, select2.value);
      })
    break

    case 'valor4': 
      traerValoresAndTexto(datos.valor4.valor, datos.valor4.texto);
      
      function FormulaLongitud(valor1, valor2){
        let valorPrincipal = inputIngreso.value;
        let operacion;

        if (valor1 == valor2 || valor1 == "4.0" && valor2 || valor1 && valor2 == "4.0"){
          NoValido();
        }  else {

          switch (valor1){

            case "4.1":

              switch (valor2) {
              
                case "4.2":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1000";
                  formula.style.color = "black";
                break;
                
                case "4.3":
                  operacion = valorPrincipal * 100000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 100000";
                  formula.style.color = "black";
                break;

                case "4.4":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1e+6";
                  formula.style.color = "black";
                break;

                case "4.5":
                  operacion = valorPrincipal * 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1e+9";
                  formula.style.color = "black";
                break;

                case "4.6":
                  operacion = valorPrincipal * 1e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 1e+12";
                  formula.style.color = "black";
                break;

                case "4.7":
                  operacion = valorPrincipal / 1.609;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1,609";
                  formula.style.color = "black";
                break;

                case "4.8":
                  operacion = valorPrincipal * 1094;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 1094";
                  formula.style.color = "black";
                break;

                case "4.9":
                  operacion = valorPrincipal * 3281;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 3281";
                  formula.style.color = "black";
                break;

                case "4.10":
                  operacion = valorPrincipal * 39370;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 39370";
                  formula.style.color = "black";
                break;

                case "4.11":
                  operacion = valorPrincipal * 1.852;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1,852";
                  formula.style.color = "black";
                break;
              }
            break;  
          
            case "4.2":

              switch (valor2) {
              
                case "4.1":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1000";
                  formula.style.color = "black";
                break;
                
                case "4.3":
                  operacion = valorPrincipal * 100;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 100";
                  formula.style.color = "black";
                break;

                case "4.4":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1000";
                  formula.style.color = "black";
                break;

                case "4.5":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1e+6";
                  formula.style.color = "black";
                break;

                case "4.6":
                  operacion = valorPrincipal * 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 1e+9";
                  formula.style.color = "black";
                break;

                case "4.7":
                  operacion = valorPrincipal / 1609;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1609";
                  formula.style.color = "black";
                break;

                case "4.8":
                  operacion = valorPrincipal * 1.094;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 1,094";
                  formula.style.color = "black";
                break;

                case "4.9":
                  operacion = valorPrincipal * 3.281;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 3,281";
                  formula.style.color = "black";
                break;

                case "4.10":
                  operacion = valorPrincipal * 39.37;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 39,37";
                  formula.style.color = "black";
                break;

                case "4.11":
                  operacion = valorPrincipal / 1852;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1852";
                  formula.style.color = "black";
                break;
              }
            break;
                 
            case "4.3":

              switch (valor2) {
              
                case "4.1":
                  operacion = valorPrincipal / 100000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 100000";
                  formula.style.color = "black";
                break;
                
                case "4.2":
                  operacion = valorPrincipal / 100;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 100";
                  formula.style.color = "black";
                break;

                case "4.4":
                  operacion = valorPrincipal * 10;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 10";
                  formula.style.color = "black";
                break;

                case "4.5":
                  operacion = valorPrincipal * 10000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 10000";
                  formula.style.color = "black";
                break;

                case "4.6":
                  operacion = valorPrincipal * 1e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1e+7";
                  formula.style.color = "black";
                break;

                case "4.7":
                  operacion = valorPrincipal / 160900;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 160900";
                  formula.style.color = "black";
                break;

                case "4.8":
                  operacion = valorPrincipal / 91.44;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 91,44";
                  formula.style.color = "black";
                break;

                case "4.9":
                  operacion = valorPrincipal / 30.48;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 30,48";
                  formula.style.color = "black";
                break;

                case "4.10":
                  operacion = valorPrincipal / 2.54;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 2,54";
                  formula.style.color = "black";
                break;

                case "4.11":
                  operacion = valorPrincipal / 185200;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 185200";
                  formula.style.color = "black";
                break;
              }
            break;

            case "4.4":

              switch (valor2) {
              
                case "4.1":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1e+6";
                  formula.style.color = "black";
                break;
                
                case "4.2":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1000";
                  formula.style.color = "black";
                break;

                case "4.3":
                  operacion = valorPrincipal / 10;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 10";
                  formula.style.color = "black";
                break;

                case "4.5":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1000";
                  formula.style.color = "black";
                break;

                case "4.6":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1e+6";
                  formula.style.color = "black";
                break;

                case "4.7":
                  operacion = valorPrincipal / 1.609e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1,609e+6";
                  formula.style.color = "black";
                break;

                case "4.8":
                  operacion = valorPrincipal / 914.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 914,4";
                  formula.style.color = "black";
                break;

                case "4.9":
                  operacion = valorPrincipal / 304.8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 304,8";
                  formula.style.color = "black";
                break;

                case "4.10":
                  operacion = valorPrincipal / 25.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 25,4";
                  formula.style.color = "black";
                break;

                case "4.11":
                  operacion = valorPrincipal / 1.852e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1,852e+6";
                  formula.style.color = "black";
                break;
              }
            break;

            case "4.5":

              switch (valor2) {
              
                case "4.1":
                  operacion = valorPrincipal / 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1e+9";
                  formula.style.color = "black";
                break;
                
                case "4.2":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1e+6";
                  formula.style.color = "black";
                break;

                case "4.3":
                  operacion = valorPrincipal / 10000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 10000";
                  formula.style.color = "black";
                break;

                case "4.4":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1000";
                  formula.style.color = "black";
                break;

                case "4.6":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1000";
                  formula.style.color = "black";
                break;

                case "4.7":
                  operacion = valorPrincipal / 1.609e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1,609e+9";
                  formula.style.color = "black";
                break;

                case "4.8":
                  operacion = valorPrincipal / 914400;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 914400";
                  formula.style.color = "black";
                break;

                case "4.9":
                  operacion = valorPrincipal / 304800;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 304800";
                  formula.style.color = "black";
                break;

                case "4.10":
                  operacion = valorPrincipal / 25400;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 25400";
                  formula.style.color = "black";
                break;

                case "4.11":
                  operacion = valorPrincipal / 1.852e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1,852e+9";
                  formula.style.color = "black";
                break;
              }
            break;

            case "4.6":

              switch (valor2) {
              
                case "4.1":
                  operacion = valorPrincipal / 1e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1e+12";
                  formula.style.color = "black";
                break;
                
                case "4.2":
                  operacion = valorPrincipal / 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1e+9";
                  formula.style.color = "black";
                break;

                case "4.3":
                  operacion = valorPrincipal / 1e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1e+7";
                  formula.style.color = "black";
                break;

                case "4.4":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1e+6";
                  formula.style.color = "black";
                break;

                case "4.5":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1000";
                  formula.style.color = "black";
                break;

                case "4.7":
                  operacion = valorPrincipal / 1.609e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1,609e+12";
                  formula.style.color = "black";
                break;

                case "4.8":
                  operacion = valorPrincipal / 9.144e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 9,144e+8";
                  formula.style.color = "black";
                break;

                case "4.9":
                  operacion = valorPrincipal / 3.048e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 3,048e+8";
                  formula.style.color = "black";
                break;

                case "4.10":
                  operacion = valorPrincipal / 2.54e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 2,54e+7";
                  formula.style.color = "black";
                break;

                case "4.11":
                  operacion = valorPrincipal / 1.852+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1,852e+12";
                  formula.style.color = "black";
                break;
              }
            break;
            
            case "4.7":

              switch (valor2) {
              
                case "4.1":
                  operacion = valorPrincipal * 1.609;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 1,609";
                  formula.style.color = "black";
                break;
                
                case "4.2":
                  operacion = valorPrincipal * 1609;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 1609";
                  formula.style.color = "black";
                break;

                case "4.3":
                  operacion = valorPrincipal * 160900;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 160900";
                  formula.style.color = "black";
                break;

                case "4.4":
                  operacion = valorPrincipal * 1.609e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 1,609e+6";
                  formula.style.color = "black";
                break;

                case "4.5":
                  operacion = valorPrincipal * 1.609e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 1,609e+9";
                  formula.style.color = "black";
                break;

                case "4.6":
                  operacion = valorPrincipal * 1.609e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 1,609e+12";
                  formula.style.color = "black";
                break;

                case "4.8":
                  operacion = valorPrincipal * 1760;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1760";
                  formula.style.color = "black";
                break;

                case "4.9":
                  operacion = valorPrincipal * 5280;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 5280";
                  formula.style.color = "black";
                break;

                case "4.10":
                  operacion = valorPrincipal * 63360;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 63360";
                  formula.style.color = "black";
                break;

                case "4.11":
                  operacion = valorPrincipal * 1.151;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1,151";
                  formula.style.color = "black";
                break;
              }
            break;

            case "4.8":

              switch (valor2) {
              
                case "4.1":
                  operacion = valorPrincipal / 1094;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1094";
                  formula.style.color = "black";
                break;
                
                case "4.2":
                  operacion = valorPrincipal / 1.094;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1.094";
                  formula.style.color = "black";
                break;

                case "4.3":
                  operacion = valorPrincipal * 91.44;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 91,44";
                  formula.style.color = "black";
                break;

                case "4.4":
                  operacion = valorPrincipal * 914.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 914,4";
                  formula.style.color = "black";
                break;

                case "4.5":
                  operacion = valorPrincipal * 914400;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 914400";
                  formula.style.color = "black";
                break;

                case "4.6":
                  operacion = valorPrincipal * 9.144e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 9,144e+8";
                  formula.style.color = "black";
                break;

                case "4.7":
                  operacion = valorPrincipal / 1760;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 1760";
                  formula.style.color = "black";
                break;

                case "4.9":
                  operacion = valorPrincipal * 3;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 3";
                  formula.style.color = "black";
                break;

                case "4.10":
                  operacion = valorPrincipal * 36;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 36";
                  formula.style.color = "black";
                break;

                case "4.11":
                  operacion = valorPrincipal / 2025;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 2025";
                  formula.style.color = "black";
                break;
              }
            break;
        
            case "4.9":

              switch (valor2) {
              
                case "4.1":
                  operacion = valorPrincipal / 3281;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 3281";
                  formula.style.color = "black";
                break;
                
                case "4.2":
                  operacion = valorPrincipal / 3.281;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 3,281";
                  formula.style.color = "black";
                break;

                case "4.3":
                  operacion = valorPrincipal * 30.48;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 30,48";
                  formula.style.color = "black";
                break;

                case "4.4":
                  operacion = valorPrincipal * 304.8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 304,8";
                  formula.style.color = "black";
                break;

                case "4.5":
                  operacion = valorPrincipal * 304800;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 304800";
                  formula.style.color = "black";
                break;

                case "4.6":
                  operacion = valorPrincipal * 3.048e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 3,048e+8";
                  formula.style.color = "black";
                break;

                case "4.7":
                  operacion = valorPrincipal / 5280;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 5280";
                  formula.style.color = "black";
                break;

                case "4.8":
                  operacion = valorPrincipal / 3;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 3";
                  formula.style.color = "black";
                break;

                case "4.10":
                  operacion = valorPrincipal * 12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 12";
                  formula.style.color = "black";
                break;

                case "4.11":
                  operacion = valorPrincipal / 6076;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 6076";
                  formula.style.color = "black";
                break;
              }
            break;
 
            case "4.10":

              switch (valor2) {
              
                case "4.1":
                  operacion = valorPrincipal / 39370;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 39370";
                  formula.style.color = "black";
                break;
                
                case "4.2":
                  operacion = valorPrincipal / 39.37;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 39,37";
                  formula.style.color = "black";
                break;

                case "4.3":
                  operacion = valorPrincipal * 2.54;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 2,54";
                  formula.style.color = "black";
                break;

                case "4.4":
                  operacion = valorPrincipal * 25.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 25,4";
                  formula.style.color = "black";
                break;

                case "4.5":
                  operacion = valorPrincipal * 25400;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 25400";
                  formula.style.color = "black";
                break;

                case "4.6":
                  operacion = valorPrincipal * 2.54e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 2,54e+7";
                  formula.style.color = "black";
                break;

                case "4.7":
                  operacion = valorPrincipal / 63360;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 63360";
                  formula.style.color = "black";
                break;

                case "4.8":
                  operacion = valorPrincipal / 36;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 36";
                  formula.style.color = "black";
                break;

                case "4.9":
                  operacion = valorPrincipal / 12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 12";
                  formula.style.color = "black";
                break;

                case "4.11":
                  operacion = valorPrincipal / 72910;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de longitud entre 72910";
                  formula.style.color = "black";
                break;
              }
            break;
          
            case "4.11":

              switch (valor2) {
              
                case "4.1":
                  operacion = valorPrincipal * 1.852;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1,852";
                  formula.style.color = "black";
                break;
                
                case "4.2":
                  operacion = valorPrincipal * 1852;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1852";
                  formula.style.color = "black";
                break;

                case "4.3":
                  operacion = valorPrincipal * 185200;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 185200";
                  formula.style.color = "black";
                break;

                case "4.4":
                  operacion = valorPrincipal * 1.852e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1,852e+6";
                  formula.style.color = "black";
                break;

                case "4.5":
                  operacion = valorPrincipal * 1.852e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1,852e+9";
                  formula.style.color = "black";
                break;

                case "4.6":
                  operacion = valorPrincipal * 1.852e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de longitud por 1,852e+12";
                  formula.style.color = "black";
                break;

                case "4.7":
                  operacion = valorPrincipal * 1.151;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 1,151";
                  formula.style.color = "black";
                break;

                case "4.8":
                  operacion = valorPrincipal * 2025;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 2025";
                  formula.style.color = "black";
                break;

                case "4.9":
                  operacion = valorPrincipal * 6076;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 6076";
                  formula.style.color = "black";
                break;

                case "4.10":
                  operacion = valorPrincipal * 72910;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de longitud por 72910";
                  formula.style.color = "black";
                break;
              }
            break;
        
          }
        }
      }

      inputIngreso.addEventListener('input', function(){
        FormulaLongitud(select1.value, select2.value);
      })

      select1.addEventListener('change', function(){
        FormulaLongitud(select1.value, select2.value);          
      })

      select2.addEventListener('change', function(){
        FormulaLongitud(select1.value, select2.value);
      })
    break;

    case 'valor5': 
      traerValoresAndTexto(datos.valor5.valor, datos.valor5.texto);
      
      function FormulaMasa(valor1, valor2){
        let valorPrincipal = inputIngreso.value;
        let operacion;

        if (valor1 == valor2 || valor1 == "5.0" && valor2 || valor1 && valor2 == "5.0"){
          NoValido();
        }  else {

          switch (valor1){

            case "5.1":

              switch (valor2) {
              
                case "5.2":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 1000";
                  formula.style.color = "black";
                break;
                
                case "5.3":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 1e+6";
                  formula.style.color = "black";
                break;

                case "5.4":
                  operacion = valorPrincipal * 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 1e+9";
                  formula.style.color = "black";
                break;

                case "5.5":
                  operacion = valorPrincipal * 1e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 1e+12";
                  formula.style.color = "black";
                break;

                case "5.6":
                  operacion = valorPrincipal / 1.016;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1,016";
                  formula.style.color = "black";
                break;

                case "5.7":
                  operacion = valorPrincipal * 1.102;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 1,102";
                  formula.style.color = "black";
                break;

                case "5.8":
                  operacion = valorPrincipal * 157.5;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 157,5";
                  formula.style.color = "black";
                break;

                case "5.9":
                  operacion = valorPrincipal * 2205;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 2205";
                  formula.style.color = "black";
                break;

                case "5.10":
                  operacion = valorPrincipal * 35270;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 35270";
                  formula.style.color = "black";
                break;
              }
            break;  
          
            case "5.2":

              switch (valor2) {
              
                case "5.1":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1000";
                  formula.style.color = "black";
                break;
                
                case "5.3":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 1000";
                  formula.style.color = "black";
                break;

                case "5.4":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 1e+6";
                  formula.style.color = "black";
                break;

                case "5.5":
                  operacion = valorPrincipal * 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 1e+9";
                  formula.style.color = "black";
                break;

                case "5.6":
                  operacion = valorPrincipal / 1016;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1016";
                  formula.style.color = "black";
                break;

                case "5.7":
                  operacion = valorPrincipal / 907.2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 907,2";
                  formula.style.color = "black";
                break;

                case "5.8":
                  operacion = valorPrincipal / 6.35;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 6,35";
                  formula.style.color = "black";
                break;

                case "5.9":
                  operacion = valorPrincipal * 2.205;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 2,205";
                  formula.style.color = "black";
                break;

                case "5.10":
                  operacion = valorPrincipal * 35.274;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 35,274";
                  formula.style.color = "black";
                break;
              }
            break;
                 
            case "5.3":

              switch (valor2) {
              
                case "5.1":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1e+6";
                  formula.style.color = "black";
                break;
                
                case "5.2":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1000";
                  formula.style.color = "black";
                break;

                case "5.4":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 1000";
                  formula.style.color = "black";
                break;

                case "5.5":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 1e+6";
                  formula.style.color = "black";
                break;

                case "5.6":
                  operacion = valorPrincipal / 1.016e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1,016e+6";
                  formula.style.color = "black";
                break;

                case "5.7":
                  operacion = valorPrincipal / 907200;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 907200";
                  formula.style.color = "black";
                break;

                case "5.8":
                  operacion = valorPrincipal / 6350;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 6350";
                  formula.style.color = "black";
                break;

                case "5.9":
                  operacion = valorPrincipal / 453.6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 453,6";
                  formula.style.color = "black";
                break;

                case "5.10":
                  operacion = valorPrincipal / 28.35;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 28,35";
                  formula.style.color = "black";
                break;
              }
            break;

            case "5.4":

              switch (valor2) {
              
                case "5.1":
                  operacion = valorPrincipal / 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1e+9";
                  formula.style.color = "black";
                break;
                
                case "5.2":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1e+6";
                  formula.style.color = "black";
                break;

                case "5.3":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1000";
                  formula.style.color = "black";
                break;

                case "5.5":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 1000";
                  formula.style.color = "black";
                break;

                case "5.6":
                  operacion = valorPrincipal / 1.016e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1,016e+9";
                  formula.style.color = "black";
                break;

                case "5.7":
                  operacion = valorPrincipal / 9.072e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 9,072e+8";
                  formula.style.color = "black";
                break;

                case "5.8":
                  operacion = valorPrincipal / 6.35e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 6,35e+6";
                  formula.style.color = "black";
                break;

                case "5.9":
                  operacion = valorPrincipal / 453600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 453600";
                  formula.style.color = "black";
                break;

                case "5.10":
                  operacion = valorPrincipal / 28350;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 28350";
                  formula.style.color = "black";
                break;
              }
            break;

            case "5.5":

              switch (valor2) {
              
                case "5.1":
                  operacion = valorPrincipal / 1e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1e+12";
                  formula.style.color = "black";
                break;
                
                case "5.2":
                  operacion = valorPrincipal / 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1e+9";
                  formula.style.color = "black";
                break;

                case "5.3":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1e+6";
                  formula.style.color = "black";
                break;

                case "5.4":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1000";
                  formula.style.color = "black";
                break;

                case "5.6":
                  operacion = valorPrincipal / 1.016e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1,016e+12";
                  formula.style.color = "black";
                break;

                case "5.7":
                  operacion = valorPrincipal / 9.072e+11;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 9,072e+11";
                  formula.style.color = "black";
                break;

                case "5.8":
                  operacion = valorPrincipal / 6.35e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 6,35e+9";
                  formula.style.color = "black";
                break;

                case "5.9":
                  operacion = valorPrincipal / 4.536e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 4,536e+8";
                  formula.style.color = "black";
                break;

                case "5.10":
                  operacion = valorPrincipal / 2.835e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 2,835e+7";
                  formula.style.color = "black";
                break;
              }
            break;

            case "5.6":

              switch (valor2) {
              
                case "5.1":
                  operacion = valorPrincipal * 1.016;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 1,016";
                  formula.style.color = "black";
                break;
                
                case "5.2":
                  operacion = valorPrincipal * 1016;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 1016";
                  formula.style.color = "black";
                break;

                case "5.3":
                  operacion = valorPrincipal * 1.016e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 1,016e+6";
                  formula.style.color = "black";
                break;

                case "5.4":
                  operacion = valorPrincipal * 1.016e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 1,016e+9";
                  formula.style.color = "black";
                break;

                case "5.5":
                  operacion = valorPrincipal * 1.016e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 1,016e+12";
                  formula.style.color = "black";
                break;

                case "5.7":
                  operacion = valorPrincipal * 1.12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 1,12";
                  formula.style.color = "black";
                break;

                case "5.8":
                  operacion = valorPrincipal * 160;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 160";
                  formula.style.color = "black";
                break;

                case "5.9":
                  operacion = valorPrincipal * 2240;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 2240";
                  formula.style.color = "black";
                break;

                case "5.10":
                  operacion = valorPrincipal * 35840;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 35840";
                  formula.style.color = "black";
                break;
              }
            break;
            
            case "5.7":

              switch (valor2) {
              
                case "5.1":
                  operacion = valorPrincipal / 1.102;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1,102";
                  formula.style.color = "black";
                break;
                
                case "5.2":
                  operacion = valorPrincipal * 907.2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 907,2";
                  formula.style.color = "black";
                break;

                case "5.3":
                  operacion = valorPrincipal * 907200;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 907200";
                  formula.style.color = "black";
                break;

                case "5.4":
                  operacion = valorPrincipal * 9.072e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 9,072e+8";
                  formula.style.color = "black";
                break;

                case "5.5":
                  operacion = valorPrincipal * 9.072e+11;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 9,072e+11";
                  formula.style.color = "black";
                break;

                case "5.6":
                  operacion = valorPrincipal / 1.12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 1,12";
                  formula.style.color = "black";
                break;

                case "5.8":
                  operacion = valorPrincipal * 142.9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 142,9";
                  formula.style.color = "black";
                break;

                case "5.9":
                  operacion = valorPrincipal * 2000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 2000";
                  formula.style.color = "black";
                break;

                case "5.10":
                  operacion = valorPrincipal * 32000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 32000";
                  formula.style.color = "black";
                break;
              }
            break;

            case "5.8":

              switch (valor2) {
              
                case "5.1":
                  operacion = valorPrincipal / 157.5;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 157,5";
                  formula.style.color = "black";
                break;
                
                case "5.2":
                  operacion = valorPrincipal * 6.35;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 6,35";
                  formula.style.color = "black";
                break;

                case "5.3":
                  operacion = valorPrincipal * 6350;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 6350";
                  formula.style.color = "black";
                break;

                case "5.4":
                  operacion = valorPrincipal * 6.35e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 6,35e+6";
                  formula.style.color = "black";
                break;

                case "5.5":
                  operacion = valorPrincipal * 6.35e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 6,35e+9";
                  formula.style.color = "black";
                break;

                case "5.6":
                  operacion = valorPrincipal / 160;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 160";
                  formula.style.color = "black";
                break;

                case "5.7":
                  operacion = valorPrincipal / 142.9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 142,9";
                  formula.style.color = "black";
                break;

                case "5.9":
                  operacion = valorPrincipal * 14;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 14";
                  formula.style.color = "black";
                break;

                case "5.10":
                  operacion = valorPrincipal * 224;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 224";
                  formula.style.color = "black";
                break;
              }
            break;
        
            case "5.9":

              switch (valor2) {
              
                case "5.1":
                  operacion = valorPrincipal / 2205;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 2205";
                  formula.style.color = "black";
                break;
                
                case "5.2":
                  operacion = valorPrincipal / 2.205;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 2,205";
                  formula.style.color = "black";
                break;

                case "5.3":
                  operacion = valorPrincipal * 453.6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 453,6";
                  formula.style.color = "black";
                break;

                case "5.4":
                  operacion = valorPrincipal * 453600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 453600";
                  formula.style.color = "black";
                break;

                case "5.5":
                  operacion = valorPrincipal * 4.536e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 4,536e+8";
                  formula.style.color = "black";
                break;

                case "5.6":
                  operacion = valorPrincipal / 2240;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 2240";
                  formula.style.color = "black";
                break;

                case "5.7":
                  operacion = valorPrincipal / 2000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 2000";
                  formula.style.color = "black";
                break;

                case "5.8":
                  operacion = valorPrincipal / 14;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 14";
                  formula.style.color = "black";
                break;

                case "5.10":
                  operacion = valorPrincipal * 16;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 16";
                  formula.style.color = "black";
                break;
              }
            break;
 
            case "5.10":

              switch (valor2) {
              
                case "5.1":
                  operacion = valorPrincipal / 35270;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 35270";
                  formula.style.color = "black";
                break;
                
                case "5.2":
                  operacion = valorPrincipal / 35.274;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 35,274";
                  formula.style.color = "black";
                break;

                case "5.3":
                  operacion = valorPrincipal * 28.35;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 28,35";
                  formula.style.color = "black";
                break;

                case "5.4":
                  operacion = valorPrincipal * 28350;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de masa por 28350";
                  formula.style.color = "black";
                break;

                case "5.5":
                  operacion = valorPrincipal * 2.835e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de masa por 2,835e+7";
                  formula.style.color = "black";
                break;

                case "5.6":
                  operacion = valorPrincipal / 35840;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 35840";
                  formula.style.color = "black";
                break;

                case "5.7":
                  operacion = valorPrincipal / 32000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 32000";
                  formula.style.color = "black";
                break;

                case "5.8":
                  operacion = valorPrincipal / 224;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 224";
                  formula.style.color = "black";
                break;

                case "5.9":
                  operacion = valorPrincipal / 16;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de masa entre 16";
                  formula.style.color = "black";
                break;
              }
            break;
          }
        }
      }

      inputIngreso.addEventListener('input', function(){
        FormulaMasa(select1.value, select2.value);
      });

      select1.addEventListener('change', function(){
        FormulaMasa(select1.value, select2.value);
      });

      select2.addEventListener('change', function(){
        FormulaMasa(select1.value, select2.value);
      });
    break;

    case 'valor6': 
      traerValoresAndTexto(datos.valor6.valor, datos.valor6.texto);

      function FormulaPresion(valor1, valor2){
        let valorPrincipal = inputIngreso.value;
        let operacion;

        if (valor1 == valor2 || valor1 == "6.0" && valor2 || valor1 && valor2 == "6.0"){
          NoValido();
        }  else {

          switch (valor1) {

            case "6.1": 

              switch (valor2) {
                 
                case "6.2":
                  operacion = valorPrincipal * 1.013;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de presión por 1,013";
                  formula.style.color = "black";
                break;

                case "6.3":
                  operacion = valorPrincipal * 14.696;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de presión por 14,696";
                  formula.style.color = "black";
                break;

                case "6.4":
                  operacion = valorPrincipal * 101300;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de presión por 101,300";
                  formula.style.color = "black";
                break;

                case "6.5":
                  operacion = valorPrincipal * 760;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de presión por 760";
                  formula.style.color = "black";
                break;
              }
              
            break;

            case "6.2": 

              switch (valor2) {
                 
                case "6.1":
                  operacion = valorPrincipal / 1.013;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de presión entre 1,013";
                  formula.style.color = "black";
                break;

                case "6.3":
                  operacion = valorPrincipal * 14.504;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de presión por 14,504";
                  formula.style.color = "black";
                break;

                case "6.4":
                  operacion = valorPrincipal * 100000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de presión por 100000";
                  formula.style.color = "black";
                break;

                case "6.5":
                  operacion = valorPrincipal * 750.1;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "para obtener un resultado aproximado, multiplica el valor de presión por 750,1";
                  formula.style.color = "black";
                break;
              }

            break;

            case "6.3": 

              switch (valor2) {
                 
                case "6.1":
                  operacion = valorPrincipal / 14.696;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de presión entre 14,696";
                  formula.style.color = "black";
                break;

                case "6.2":
                  operacion = valorPrincipal / 14.504;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de presión entre 14,504";
                  formula.style.color = "black";
                break;

                case "6.4":
                  operacion = valorPrincipal * 6895;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de presión por 6895";
                  formula.style.color = "black";
                break;

                case "6.5":
                  operacion = valorPrincipal * 51.715;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de presión por 51,715";
                  formula.style.color = "black";
                break;
              }

            break;

            case "6.4": 

              switch (valor2) {
                 
                case "6.1":
                  operacion = valorPrincipal / 101300;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de presión entre 101300";
                  formula.style.color = "black";
                break;

                case "6.2":
                  operacion = valorPrincipal / 100000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de presión entre 100000";
                  formula.style.color = "black";
                break;

                case "6.3":
                  operacion = valorPrincipal / 6895;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de presión entre 6895";
                  formula.style.color = "black";
                break;

                case "6.5":
                  operacion = valorPrincipal / 133.3;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de presión entre 133,3";
                  formula.style.color = "black";
                break;
              }

            break;

            case "6.5": 

              switch (valor2) {
                 
                case "6.1":
                  operacion = valorPrincipal / 760;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de presión entre 760";
                  formula.style.color = "black";
                break;

                case "6.2":
                  operacion = valorPrincipal / 750.1;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de presión entre 750,1";
                  formula.style.color = "black";
                break;

                case "6.3":
                  operacion = valorPrincipal / 51.715;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de presión entre 51,715";
                  formula.style.color = "black";
                break;

                case "6.4":
                  operacion = valorPrincipal * 133.3;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de presión por 133,3";
                  formula.style.color = "black";
                break;
              }

            break;
            
          }
        }
      }

      inputIngreso.addEventListener('input', function(){
        FormulaPresion(select1.value, select2.value);
      })

      select1.addEventListener('change', function(){
        FormulaPresion(select1.value, select2.value);
      })

      select2.addEventListener('change', function(){
        FormulaPresion(select1.value, select2.value);
      })
    break;

    case 'valor7':
      traerValoresAndTexto(datos.valor7.valor, datos.valor7.texto);
      
      function FormulaTamañoDatos(valor1, valor2){
        let valorPrincipal = inputIngreso.value;
        let operacion;

        if (valor1 == valor2 || valor1 == "7.0" && valor2 || valor1 && valor2 == "7.0"){
          NoValido();
        } else {

          switch (valor1) {

            case "7.1":

              switch (valor2) {
                
                case "7.2":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1000";
                  formula.style.color = "black";
                break;
                
                case "7.3":
                  operacion = valorPrincipal / 1024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1024";
                  formula.style.color = "black";
                break;

                case "7.4":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1e+6 o 1.000.000";
                  formula.style.color = "black";
                break;

                case "7.5":
                  operacion = valorPrincipal / 1.049e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,049e+6 o 1.049.000";
                  formula.style.color = "black";
                break;

                case "7.6":
                  operacion = valorPrincipal / 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1e+9 o 1.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.7":
                  operacion = valorPrincipal / 1.074e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,074e+9 o 1.074.000.000";
                  formula.style.color = "black";
                break;

                case "7.8":
                  operacion = valorPrincipal / 1e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1e+12 o 1.000.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.9":
                  operacion = valorPrincipal / 1.1e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,1e+12 o 1.100.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.10":
                  operacion = valorPrincipal / 1e+15;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1e+15 o 1.000.000.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.11":
                  operacion = valorPrincipal / 1.126e+15;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,126e+15 o 1.126.000.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.12":
                  operacion = valorPrincipal / 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8";
                  formula.style.color = "black";
                break;

                case "7.13":
                  operacion = valorPrincipal / 8000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8000";
                  formula.style.color = "black";
                break;

                case "7.14":
                  operacion = valorPrincipal / 8192;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8192";
                  formula.style.color = "black";
                break;

                case "7.15":
                  operacion = valorPrincipal / 8e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8e+6 o 8.000.000";
                  formula.style.color = "black";
                break;

                case "7.16":
                  operacion = valorPrincipal / 8.389e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,389e+6 o 8.389.000";
                  formula.style.color = "black";
                break;

                case "7.17":
                  operacion = valorPrincipal / 8e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8e+9 o 8.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.18":
                  operacion = valorPrincipal / 8.59e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,59e+9 o 8.590.000.000";
                  formula.style.color = "black";
                break;

                case "7.19":
                  operacion = valorPrincipal / 8e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8e+12 o 8.000.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.20":
                  operacion = valorPrincipal / 8.796e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,796e+12 o 8.796.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.21":
                  operacion = valorPrincipal / 8e+15;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8e+15 o 8.000.000.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.22":
                  operacion = valorPrincipal / 9.007e+15;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 9,007e+15 o 9.007.000.000.000.000";
                  formula.style.color = "black";
                break;

              }

            break;

            case "7.2":

              switch (valor2) {
                
                case "7.1":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 1000";
                  formula.style.color = "black";
                break;
                
                case "7.3":
                  operacion = valorPrincipal / 1.024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,024";
                  formula.style.color = "black";
                break;

                case "7.4":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1000";
                  formula.style.color = "black";
                break;

                case "7.5":
                  operacion = valorPrincipal / 1049;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1049";
                  formula.style.color = "black";
                break;

                case "7.6":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1e+6 o 1.000.000";
                  formula.style.color = "black";
                break;

                case "7.7":
                  operacion = valorPrincipal / 1.074e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,074e+6 o 1.074.000";
                  formula.style.color = "black";
                break;

                case "7.8":
                  operacion = valorPrincipal / 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1e+9 o 1.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.9":
                  operacion = valorPrincipal / 1.1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,1e+9 o 1.100.000.000";
                  formula.style.color = "black";
                break;

                case "7.10":
                  operacion = valorPrincipal / 1e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1e+12 o 1.000.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.11":
                  operacion = valorPrincipal / 1.126e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,126e+12 o 1.126.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.12":
                  operacion = valorPrincipal * 125;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 125";
                  formula.style.color = "black";
                break;

                case "7.13":
                  operacion = valorPrincipal / 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8";
                  formula.style.color = "black";
                break;

                case "7.14":
                  operacion = valorPrincipal / 8.192;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,192";
                  formula.style.color = "black";
                break;

                case "7.15":
                  operacion = valorPrincipal / 8000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8000";
                  formula.style.color = "black";
                break;

                case "7.16":
                  operacion = valorPrincipal / 8389;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8389";
                  formula.style.color = "black";
                break;

                case "7.17":
                  operacion = valorPrincipal / 8e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8e+6 o 8.000.000";
                  formula.style.color = "black";
                break;

                case "7.18":
                  operacion = valorPrincipal / 8.59e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,59e+6 o 8.590.000";
                  formula.style.color = "black";
                break;

                case "7.19":
                  operacion = valorPrincipal / 8e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8e+9 o 8.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.20":
                  operacion = valorPrincipal / 8.796e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,796e+9 o 8.796.000.000";
                  formula.style.color = "black";
                break;

                case "7.21":
                  operacion = valorPrincipal / 8e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8e+12 o 8.000.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.22":
                  operacion = valorPrincipal / 9.007e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 9,007e+12 o 9.007.000.000.000";
                  formula.style.color = "black";
                break;

              }
            break;

            case "7.3":

              switch (valor2) {
                
                case "7.1":
                  operacion = valorPrincipal * 1024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 1024";
                  formula.style.color = "black";
                break;
                
                case "7.2":
                  operacion = valorPrincipal * 1.024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 1,024";
                  formula.style.color = "black";
                break;

                case "7.4":
                  operacion = valorPrincipal / 976.6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 976,6";
                  formula.style.color = "black";
                break;

                case "7.5":
                  operacion = valorPrincipal / 1024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1024";
                  formula.style.color = "black";
                break;

                case "7.6":
                  operacion = valorPrincipal / 976600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 976600";
                  formula.style.color = "black";
                break;

                case "7.7":
                  operacion = valorPrincipal / 1.049e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,049e+6 o 1.049.000";
                  formula.style.color = "black";
                break;

                case "7.8":
                  operacion = valorPrincipal / 9.766e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 9,766e+8 o 976.600.000";
                  formula.style.color = "black";
                break;

                case "7.9":
                  operacion = valorPrincipal / 1.074e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,074e+9 o 1.074.000.000";
                  formula.style.color = "black";
                break;

                case "7.10":
                  operacion = valorPrincipal / 9,766e+11;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 9,766e+11 o 976.600.000.000";
                  formula.style.color = "black";
                break;

                case "7.11":
                  operacion = valorPrincipal / 1.1e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,1e+12 o 1.100.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.12":
                  operacion = valorPrincipal * 128;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 128";
                  formula.style.color = "black";
                break;

                case "7.13":
                  operacion = valorPrincipal / 7.812;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 7,812";
                  formula.style.color = "black";
                break;

                case "7.14":
                  operacion = valorPrincipal / 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8";
                  formula.style.color = "black";
                break;

                case "7.15":
                  operacion = valorPrincipal / 7813;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 7813";
                  formula.style.color = "black";
                break;

                case "7.16":
                  operacion = valorPrincipal / 8192;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8192";
                  formula.style.color = "black";
                break;

                case "7.17":
                  operacion = valorPrincipal / 7.813e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 7,813e+6 o 7.813.000";
                  formula.style.color = "black";
                break;

                case "7.18":
                  operacion = valorPrincipal / 8.389e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,389e+6 o 8.389.000";
                  formula.style.color = "black";
                break;

                case "7.19":
                  operacion = valorPrincipal / 7.813e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 7,813e+9 o 7.813.000.000";
                  formula.style.color = "black";
                break;

                case "7.20":
                  operacion = valorPrincipal / 8.59e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,59e+9 o 8.590.000.000";
                  formula.style.color = "black";
                break;

                case "7.21":
                  operacion = valorPrincipal / 7.812e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 7,812e+12 o 7.812.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.22":
                  operacion = valorPrincipal / 8.796e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,796e+12 o 8.796.000.000.000";
                  formula.style.color = "black";
                break;

              }

            break;

            case "7.4":

              switch (valor2) {
                
                case "7.1":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+6 o 1.000.000";
                  formula.style.color = "black";
                break;
                
                case "7.2":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 1000";
                  formula.style.color = "black";
                break;

                case "7.3":
                  operacion = valorPrincipal * 976.6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tamaño de datos por 976,6";
                  formula.style.color = "black";
                break;

                case "7.5":
                  operacion = valorPrincipal / 1.049;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,049";
                  formula.style.color = "black";
                break;

                case "7.6":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1000";
                  formula.style.color = "black";
                break;

                case "7.7":
                  operacion = valorPrincipal / 1074;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1074";
                  formula.style.color = "black";
                break;

                case "7.8":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1e+6 o 1.000.000";
                  formula.style.color = "black";
                break;

                case "7.9":
                  operacion = valorPrincipal / 1.1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,1e+6 o 1.100.000";
                  formula.style.color = "black";
                break;

                case "7.10":
                  operacion = valorPrincipal / 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1e+9 o 1.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.11":
                  operacion = valorPrincipal / 1.126e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,126e+9 o 1.126.000.000";
                  formula.style.color = "black";
                break;

                case "7.12":
                  operacion = valorPrincipal * 125000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 125000";
                  formula.style.color = "black";
                break;

                case "7.13":
                  operacion = valorPrincipal * 125;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 125";
                  formula.style.color = "black";
                break;

                case "7.14":
                  operacion = valorPrincipal * 122.1;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tamaño de datos por 122,1";
                  formula.style.color = "black";
                break;

                case "7.15":
                  operacion = valorPrincipal / 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8";
                  formula.style.color = "black";
                break;

                case "7.16":
                  operacion = valorPrincipal / 8.389;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,389";
                  formula.style.color = "black";
                break;

                case "7.17":
                  operacion = valorPrincipal / 8000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8000";
                  formula.style.color = "black";
                break;

                case "7.18":
                  operacion = valorPrincipal / 8590;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8590";
                  formula.style.color = "black";
                break;

                case "7.19":
                  operacion = valorPrincipal / 8e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8e+6 o 8.000.000";
                  formula.style.color = "black";
                break;

                case "7.20":
                  operacion = valorPrincipal / 8.796e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,796e+6 o 8.796.000";
                  formula.style.color = "black";
                break;

                case "7.21":
                  operacion = valorPrincipal / 8e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8e+9 o 8.000.000.000";
                  formula.style.color = "black";
                break;

                case "7.22":
                  operacion = valorPrincipal / 9.007e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 9,007e+9 o 9.007.000.000";
                  formula.style.color = "black";
                break;

              }

            break;

            case "7.5":

              switch (valor2) {
                
                case "7.1":
                  operacion = valorPrincipal * 1.049e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tamaño de datos por 1,049e+6 o 1.049.000";
                  formula.style.color = "black";
                break;
                
                case "7.2":
                  operacion = valorPrincipal * 1049;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tamaño de datos por 1049";
                  formula.style.color = "black";
                break;

                case "7.3":
                  operacion = valorPrincipal * 1024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 1024";
                  formula.style.color = "black";
                break;

                case "7.4":
                  operacion = valorPrincipal * 1.049;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tamaño de datos por 1,049";
                  formula.style.color = "black";
                break;

                case "7.6":
                  operacion = valorPrincipal / 953.7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 953,7";
                  formula.style.color = "black";
                break;

                case "7.7":
                  operacion = valorPrincipal / 1024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1024";
                  formula.style.color = "black";
                break;

                case "7.8":
                  operacion = valorPrincipal / 953700;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 953700";
                  formula.style.color = "black";
                break;

                case "7.9":
                  operacion = valorPrincipal / 1.049e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,049e+6 o 1.049.000";
                  formula.style.color = "black";
                break;

                case "7.10":
                  operacion = valorPrincipal / 9.537e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 9,537e+8 o 953.700.000";
                  formula.style.color = "black";
                break;

                case "7.11":
                  operacion = valorPrincipal / 1.074e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,074e+9 o 1.074.000.000";
                  formula.style.color = "black";
                break;

                case "7.12":
                  operacion = valorPrincipal * 131100;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tamaño de datos por 131100";
                  formula.style.color = "black";
                break;

                case "7.13":
                  operacion = valorPrincipal * 131.1;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tamaño de datos por 131,1";
                  formula.style.color = "black";
                break;

                case "7.14":
                  operacion = valorPrincipal * 128;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 128";
                  formula.style.color = "black";
                break;

                case "7.15":
                  operacion = valorPrincipal / 7.629;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 7,629";
                  formula.style.color = "black";
                break;

                case "7.16":
                  operacion = valorPrincipal / 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8";
                  formula.style.color = "black";
                break;

                case "7.17":
                  operacion = valorPrincipal / 7629;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 7629";
                  formula.style.color = "black";
                break;

                case "7.18":
                  operacion = valorPrincipal / 8192;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8192";
                  formula.style.color = "black";
                break;

                case "7.19":
                  operacion = valorPrincipal / 7.629e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 7,629e+6 o 7.629.000";
                  formula.style.color = "black";
                break;

                case "7.20":
                  operacion = valorPrincipal / 8,389e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,389e+6 o 8.389.000";
                  formula.style.color = "black";
                break;

                case "7.21":
                  operacion = valorPrincipal / 7.629e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 7,629e+9 o 7.629.000.000";
                  formula.style.color = "black";
                break;

                case "7.22":
                  operacion = valorPrincipal / 8.59e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,59e+9 o 8.590.000.000";
                  formula.style.color = "black";
                break;

              }

            break;

            case "7.6":
              
              switch (valor2) {
                
                case "7.1":
                  operacion = valorPrincipal * 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+9 o 1.000.000.000";
                  formula.style.color = "black";
                break;
                
                case "7.2":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+6 o 1.000.000";
                  formula.style.color = "black";
                break;

                case "7.3":
                  operacion = valorPrincipal * 976600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 976600";
                  formula.style.color = "black";
                break;

                case "7.4":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 1000";
                  formula.style.color = "black";
                break;

                case "7.5":
                  operacion = valorPrincipal * 953.7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tamaño de datos por 953,7";
                  formula.style.color = "black";
                break;

                case "7.7":
                  operacion = valorPrincipal / 1.074;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,074";
                  formula.style.color = "black";
                break;

                case "7.8":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1000";
                  formula.style.color = "black";
                break;

                case "7.9":
                  operacion = valorPrincipal / 1100;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1100";
                  formula.style.color = "black";
                break;

                case "7.10":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1e+6 o 1.000.000";
                  formula.style.color = "black";
                break;

                case "7.11":
                  operacion = valorPrincipal / 1.126e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 1,126e+6 o 1.126.000";
                  formula.style.color = "black";
                break;

                case "7.12":
                  operacion = valorPrincipal * 1.25e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 1,25e+8 o 125.000.000";
                  formula.style.color = "black";
                break;

                case "7.13":
                  operacion = valorPrincipal * 125000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 125000";
                  formula.style.color = "black";
                break;

                case "7.14":
                  operacion = valorPrincipal * 122100;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tamaño de datos por 122100";
                  formula.style.color = "black";
                break;

                case "7.15":
                  operacion = valorPrincipal * 125;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tamaño de datos por 125";
                  formula.style.color = "black";
                break;

                case "7.16":
                  operacion = valorPrincipal * 119.2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tamaño de datos por 119,2";
                  formula.style.color = "black";
                break;

                case "7.17":
                  operacion = valorPrincipal / 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8";
                  formula.style.color = "black";
                break;

                case "7.18":
                  operacion = valorPrincipal / 8.59;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8,59";
                  formula.style.color = "black";
                break;

                case "7.19":
                  operacion = valorPrincipal / 8000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8000";
                  formula.style.color = "black";
                break;

                case "7.20":
                  operacion = valorPrincipal / 8796;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8796";
                  formula.style.color = "black";
                break;

                case "7.21":
                  operacion = valorPrincipal / 8e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 8e+6 o 8.000.000";
                  formula.style.color = "black";
                break;

                case "7.22":
                  operacion = valorPrincipal / 9.007e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tamaño de datos entre 9,007e+6 o 9.007.000";
                  formula.style.color = "black";
                break;

              }

            break;

            case "7.7":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 1.074e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,074e+9 o 1.074.000.000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 1.74e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,074e+6 o 1.074.000";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 1.049e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,049e+6 o 1.049.000";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal * 1074;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1074";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal * 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1024";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal * 1.074;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,074";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal / 931.3;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 931,3";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal / 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1024";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal / 931300;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 931300";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal / 1.049e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,049e+6 o 1.049.000";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1.342e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,342e+8 o 134.200.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 134200;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 134200";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal * 131100;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 131100";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal * 134.2;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 134,2";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal * 128;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 128";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal / 7.451;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 7,451";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal / 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 8";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal / 7451;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 7451";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal / 8192;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 8192";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 7.451e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 7,451e+6 o 7.451.000";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 8.389e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 8,389e+6 o 8.389.000";
                formula.style.color = "black";
              break;
            }
            break;
            
            case "7.8":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 1e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+12 o 1.000.000.000.000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 1e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+9 o 1.000.000.000";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 9.766e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 9,766e+8 o 976.600.000";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal * 1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+6";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal * 953700;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 953700";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal * 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1000";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal * 931.3;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 931,3";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal / 1.1;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,1";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal / 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1000";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal / 1126;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1126";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1.25e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,25e+11 o 125.000.000.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 1.25e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,25e+8 o 125.000.000";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal * 1.221e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,221e+8 o 122.100.000";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal * 125000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 125000";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal * 119200;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 119200";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal * 125;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 125";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal * 116.4;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 116,4";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal / 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 8";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal / 8.796;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 8,796";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 8000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 8000";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 9007;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 9007";
                formula.style.color = "black";
              break;

            }
            break;

            case "7.9":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 1.1e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,1e+12 o 1.100.000.000.000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 1.1e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,1e+9 o 1.100.000.000";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 1.074e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,074e+9 o 1.074.000.000";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal * 1.1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,1e+6 o 1.100.000";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal * 1.049e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,049e+6 o 1.049.000";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal * 1100;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1100";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal * 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1024";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal * 1.1;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,1";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal / 909.5;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 909,5";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal / 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1024";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1.374e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,374e+11 o 137.400.000.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 1.374e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,374e+8 o 137.400.000";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal * 1.342e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,342e+8 o 134.200.000";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal * 137400;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 137400";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal * 131100;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 131100";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal * 137.4;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 137,4";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal * 128;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 128";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal / 7.276;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 7,276";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal / 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 8";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 7276;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 7276";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 8192;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 8192";
                formula.style.color = "black";
              break;

            }
            break;

            case "7.10":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 1e+15;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+15 o 1.000.000.000.000.000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 1e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+12 o 1.000.000.000.000";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 9.766e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 9,766e+11 o 976.600.000.000";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal * 1e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+9 o 1.000.000.000";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal * 9.537e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 9,537e+8 o 953.700.000";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal * 1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+6 o 1.000.000";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal * 931300;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 931300";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal * 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1000";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal * 909.5;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 909,5";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal / 1.126;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,126";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1.25e+14;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,25e+14 o 125.000.000.000.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 1.25e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,25e+11 o 125.000.000.000";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal * 1.221e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,221e+11 o 122.100.000.000";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal * 1.25e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,25e+8 o 125.000.000";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal * 1.192e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = " Multiplicar el valor de tamaño de datos por 1,192e+8 o 119.200.000";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal * 125000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 125000";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal * 116400;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 116400";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal * 125;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 125";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal * 113.7;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 113,7";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 8";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 9.007;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 9,007";
                formula.style.color = "black";
              break;

            }
            break;
 
            case "7.11":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 1.126e+15;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "ultiplicar el valor de tamaño de datos por 1,126e+15 o 1.126.000.000.000.000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 1.126e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,126e+12 o 1.126.000.000.000";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 1.1e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,1e+12 o 1.100.000.000.000";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal * 1.126e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,126e+9 o 1.126.000.000";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal * 1.074e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,074e+9 o 1.074.000.000";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal * 1.126e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,126e+6 o 1.126.000";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal * 1.049e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,049e+6 o 1.049.000";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal * 1126;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1126";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal * 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1024";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal * 1.126;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,126";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1.407e+14;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,407e+14 o 140.700.000.000.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 1.407e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,407e+11 o 140.700.000.000";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal * 1.374e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,374e+11 o 137.400.000.000";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal * 1.407e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,407e+8 o 140.700.000";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal * 1.342e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,342e+8 o 134.200.000";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal * 140700;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 140700";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal * 131100;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 131100";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal * 140.7;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 140,7";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal * 128;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 128";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 7.105;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 7,105";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 8";
                formula.style.color = "black";
              break;

            }
            break;

            case "7.12":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal / 125;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 125";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal / 128;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 128";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal / 125000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 125000";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal / 131100;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 131100";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal / 1.25e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,25e+8 o 125.000.000";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal / 1.342e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,342e+8 o 134.200.000";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal / 1.25e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,25e+11 o 125.000.000.000";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal / 1.374e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,374e+11 o 137.400.000.000";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal / 1.25e+14;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,25e+14 o 125.000.000.000.000";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal / 1.407e+14;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,407e+14 o 140.700.000.000.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal / 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1000";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal / 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1024";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal / 1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1e+6 o 1.000.000";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal / 1.049e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,049e+6 o 1.049.000";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal / 1e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1e+9 o 1.000.000.000";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal / 1.074e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,074e+9 o 1.074.000.000";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal / 1e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1e+12 o 1.000.000.000.000";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal / 1.1e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,1e+12 o 1.100.000.000.000";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 1e+15;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1e+15 o 1.000.000.000.000.000";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 1.126e+15;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,126e+15 o 1.126.000.000.000.000";
                formula.style.color = "black";
              break;

            }
            break;

            case "7.13":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 8000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 7.812;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7,812";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal / 125;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 125";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal / 131.1;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 131,1";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal / 125000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 125000";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal / 134200;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 134200";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal / 1.25e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,25e+8 o 125.000.000";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal / 1.374e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,374e+8 o 137.400.000";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal / 1.25e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,25e+11 o 125.000.000.000";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal / 1.407e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,407e+11 o 140.700.000.000";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1000";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal / 1.024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,024";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal / 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1000";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal / 1049;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1049";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal * 1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1e+6 o 1.000.000";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal / 1.074e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,074e+6 o 1.074.000";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal / 1e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1e+9 o 1.000.000.000";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal / 1.1e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,1e+9 o 1.100.000.000";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 1e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1e+12 o 1.000.000.000.000";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 1.126e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,126e+12 o 1.126.000.000.000";
                formula.style.color = "black";
              break;

            }
            break;
           
            case "7.14":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 8192;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8192";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 8.192;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8,192";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal / 122.1;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 122,1";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal / 128;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 128";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal / 122100;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 122100";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal / 131100;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 131100";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal / 1.221e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,221e+8 o 122.100.000";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal / 1.342e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,342e+8 o 134.200.000";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal / 1.221e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,221e+11 o 122.100.000.000";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal / 1.374e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,374e+11 o 137.400.000.000";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1024";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 1.024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "ultiplicar el valor de tamaño de datos por 1,024";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal / 976.6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 976,6";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal / 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1024";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal / 976600;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 976600";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal / 1.049e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,049e+6 o 1.049.000";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal / 9.766e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 9,766e+8 o 976.600.000";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal / 1.074e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,074e+9 o 1.074.000.000";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 9.766e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 9,766e+11 o 976.600.000.000";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 1.1e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,1e+12 o 1.100.000.000.000";
                formula.style.color = "black";
              break;

            }
            break;
 
            case "7.15":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 8e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8e+6 o 8.000.000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 8000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8000";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 7813;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7813";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal * 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal * 7.629;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7,629";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal / 125;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 125";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal / 134.2;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 134,2";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal / 125000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 125000";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal / 137400;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 137400";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal / 1.25e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,25e+8 o 125.000.000";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal / 1.407e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,407e+8 o 140.700.000";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+6 o 1.000.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1000";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal * 976.6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 976,6";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal / 1.049;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,049";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal / 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1000";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal / 1074;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1074";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal / 1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1e+6 o 1.000.000";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal * 1.1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,1e+6 o 1.100.000";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 1e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1e+9 o 1.000.000.000";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 1.126e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,126e+9 o 1.126.000.000";
                formula.style.color = "black";
              break;

            }
            break;

            case "7.16":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 8.389e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 8,389e+6 o 8.389.000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 8389;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 8389";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 8192;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8192";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal * 8.389;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 8,389";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal * 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal / 119.2;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 119,2";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal / 128;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 128";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal / 119200;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 119200";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal / 131100;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 131100";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal / 1.192e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,192e+8 o 119.200.000";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal / 1.342e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,342e+8 o 134.200.000";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1.049e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,049e+6 o 1.049.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 1049;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1049";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal * 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1024";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal * 1.049;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,049";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal / 953.7;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 953,7";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal / 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1024";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal / 953700;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 953700";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal / 1.049e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,049e+6 o 1.049.000";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 9.537e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 9,537e+8 o 953.700.000";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 1.074e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,074e+9 o 1.074.000.000";
                formula.style.color = "black";
              break;

            }
            break;

            case "7.17":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 8e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8e+9 o 8.000.000.000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 8e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8e+6 o 8.000.000";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 7.813e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7,813e+6 o 7.813.000";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal * 8000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8000";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal * 7629;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7629";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal * 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal * 7.451;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7,451";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal / 125;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 125";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal / 137.4;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 137,4";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal / 125000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 125000";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal / 140700;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 140700";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+9 o 1.000.000.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+6 o 1.000.000";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal * 976600;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 976600";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal * 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1000";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal * 953.7;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 953,7";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal / 1.074;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,074";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal / 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1000";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal / 1100;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1100";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1e+6 o 1.000.000";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 1.126e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,126e+6 o 1.126.000";
                formula.style.color = "black";
              break;

            }
            break;

            case "7.18":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 8.59e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8,59e+9 o 8.590.000.000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 8.59e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8,59e+6 o 8.590.000";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 8.389e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 8,389e+6 o 8.389.000";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal * 8590;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 8590";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal * 8192;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8192";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal * 8.59;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8,59";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal * 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal / 116.4;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 116,4";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal / 128;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 128";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal / 116400;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 116400";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal / 131100;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 131100";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1.074e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,074e+9 o 1.074.000.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 1.074e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,074e+6 o 1.074.000";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal * 1.049e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,049e+6 o 1.049.000";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal * 1074;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1074";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal * 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1024";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal * 1.074;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,074";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal / 931.3;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 931,3";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal / 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1024";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 931300;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 931300";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 1.049e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,049e+6 o 1.049.000";
                formula.style.color = "black";
              break;

            }
            break;

            case "7.19":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 8e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8e+12 o 8.000.000.000.000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 8e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8e+9 o 8.000.000.000";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 7.813e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7,813e+9 o 7.813.000.000";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal * 8e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8e+6 o 8.000.000";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal * 7.629e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7,629e+6 o 7.629.000";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal * 8000 ;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8000";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal * 7451;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7451";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal * 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal * 7.276;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 7,276";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal / 125;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 125";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal / 140.7;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 140,7";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+12 o 1.000.000.000.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 1e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+9 o 1.000.000.000";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal * 9.766e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 9,766e+8 o 976.600.000";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal * 1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = " Multiplicar el valor de tamaño de datos por 1e+6 o 1.000.000";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal * 953700;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 953700";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal * 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1000";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal * 931.3;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 931,3";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal / 1.1;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,1";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1000";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 1126;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1126";
                formula.style.color = "black";
              break;

            }
            break;

            case "7.20":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 8.796e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8,796e+12 o 8.796.000.000.000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 8.796e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8,796e+9 o 8.796.000.000";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 8.59e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8,59e+9 o 8.590.000.000";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal * 8.796e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8,796e+6 o 8.796.000";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal * 8.389e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 8,389e+6 o 8.389.000";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal * 8796;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 8796";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal * 8192;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8192";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal * 8.796;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8,796";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal * 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal / 113.7;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 113,7";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal / 128;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 128";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1.1e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,1e+12 o 1.100.000.000.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 1.1e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,1e+9 o 1.100.000.000";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal * 1.074e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,074e+9 o 1.074.000.000";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal * 1.1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,1e+6 o 1.100.000";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal * 1.049e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,049e+6 o 1.049.000";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal * 110;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 110";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal * 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1024";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal * 1.1;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,1";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal / 909.5;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 909,5";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1024";
                formula.style.color = "black";
              break;

            }
            break;

            case "7.21":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 8e+15;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8e+15 o 8.000.000.000.000.000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 8e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8e+12 o 8.000.000.000.000";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 7.813e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7,813e+12 o 7.813.000.000.000";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal * 8e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8e+9 o 8.000.000.000";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal * 7.629e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7,629e+9 o 7.629.000.000";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal * 8e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8e+6 o 8.000.000";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal * 7.451e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7,451e+6 o 7.451.000";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal * 8000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8000";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal * 7276;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7276";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal * 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal * 7.105;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 7,105";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1e+15;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+15 o 1.000.000.000.000.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 1e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+12 o 1.000.000.000.000";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal * 9.766e+11;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 9,766e+11 o 976.600.000.000";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal * 1e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = " Multiplicar el valor de tamaño de datos por 1e+9 o 1.000.000.000";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal * 9.537e+8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 9,537e+8 o 953.700.000";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal * 1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1e+6 o 1.000.000";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal * 931300;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 931300";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal * 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1000";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal * 909.5;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 909,5";
                formula.style.color = "black";
              break;

              case "7.22":
                operacion = valorPrincipal / 1.126;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de tamaño de datos entre 1,126";
                formula.style.color = "black";
              break;

            }
            break;

            case "7.22":

            switch (valor2) {
              
              case "7.1":
                operacion = valorPrincipal * 9.007e+15;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 9,007e+15 o 9.007.000.000.000.000";
                formula.style.color = "black";
              break;
              
              case "7.2":
                operacion = valorPrincipal * 9.007e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 9,007e+12 o 9.007.000.000.000";
                formula.style.color = "black";
              break;

              case "7.3":
                operacion = valorPrincipal * 8.796e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8,796e+12 o 8.796.000.000.000";
                formula.style.color = "black";
              break;

              case "7.4":
                operacion = valorPrincipal * 9.007e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 9,007e+9 o 9.007.000.000";
                formula.style.color = "black";
              break;

              case "7.5":
                operacion = valorPrincipal * 8.59e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8,59e+9 o 8.590.000.000";
                formula.style.color = "black";
              break;

              case "7.6":
                operacion = valorPrincipal * 9.007e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 9,007e+6 o 9.007.000";
                formula.style.color = "black";
              break;

              case "7.7":
                operacion = valorPrincipal * 8.389e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 8,389e+6 o 8.389.000";
                formula.style.color = "black";
              break;

              case "7.8":
                operacion = valorPrincipal * 9007;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 9007";
                formula.style.color = "black";
              break;

              case "7.9":
                operacion = valorPrincipal * 8192;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8192";
                formula.style.color = "black";
              break;

              case "7.10":
                operacion = valorPrincipal / 9.007;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 9,007";
                formula.style.color = "black";
              break;

              case "7.11":
                operacion = valorPrincipal * 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 8";
                formula.style.color = "black";
              break;

              case "7.12":
                operacion = valorPrincipal * 1.126e+1;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,126e+15 o 1.126.000.000.000.000";
                formula.style.color = "black";
              break;

              case "7.13":
                operacion = valorPrincipal * 1.126e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,126e+12 o 1.126.000.000.000";
                formula.style.color = "black";
              break;

              case "7.14":
                operacion = valorPrincipal * 1.1e+12;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,1e+12 o 1.100.000.000.000";
                formula.style.color = "black";
              break;

              case "7.15":
                operacion = valorPrincipal * 1.126e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,126e+9 o 1.126.000.000";
                formula.style.color = "black";
              break;

              case "7.16":
                operacion = valorPrincipal * 1.074e+9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,074e+9 o 1.074.000.000";
                formula.style.color = "black";
              break;

              case "7.17":
                operacion = valorPrincipal * 1.126e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,126e+6 o 1.126.000";
                formula.style.color = "black";
              break;

              case "7.18":
                operacion = valorPrincipal * 1.049e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1,049e+6 o 1.049.000";
                formula.style.color = "black";
              break;

              case "7.19":
                operacion = valorPrincipal * 1126;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de tamaño de datos por 1126";
                formula.style.color = "black";
              break;

              case "7.20":
                operacion = valorPrincipal * 1024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1024";
                formula.style.color = "black";
              break;

              case "7.21":
                operacion = valorPrincipal * 1.126;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de tamaño de datos por 1,126";
                formula.style.color = "black";
              break;

            }
          break;
          
        }

        }
      }

      inputIngreso.addEventListener('input', function(){
        FormulaTamañoDatos(select1.value, select2.value);
      })

      select1.addEventListener('change', function(){
        FormulaTamañoDatos(select1.value, select2.value);
      })
      
      select2.addEventListener('change', function(){
        FormulaTamañoDatos(select1.value, select2.value);
      })

    break;

    case 'valor8': 
      traerValoresAndTexto(datos.valor8.valor, datos.valor8.texto);
      
      function FormulaTransmisionDatos(valor1, valor2){
        let valorPrincipal = inputIngreso.value;
        let operacion;

        if (valor1 == valor2 || valor1 == "8.0" && valor2 || valor1 && valor2 == "8.0"){
          NoValido();
        }  else {

          switch (valor1){

            case "8.1":

              switch (valor2) {
              
                case "8.2":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1000";
                  formula.style.color = "black";
                break;
                
                case "8.3":
                  operacion = valorPrincipal / 8000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8000";
                  formula.style.color = "black";
                break;

                case "8.4":
                  operacion = valorPrincipal / 1024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1024";
                  formula.style.color = "black";
                break;

                case "8.5":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1e+6";
                  formula.style.color = "black";
                break;

                case "8.6":
                  operacion = valorPrincipal / 8e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8e+6";
                  formula.style.color = "black";
                break;

                case "8.7":
                  operacion = valorPrincipal / 1.049e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,049e+6";
                  formula.style.color = "black";
                break;

                case "8.8":
                  operacion = valorPrincipal / 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1e+9";
                  formula.style.color = "black";
                break;

                case "8.9":
                  operacion = valorPrincipal / 8e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8e+9";
                  formula.style.color = "black";
                break;

                case "8.10":
                  operacion = valorPrincipal / 1.074e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,074e+9";
                  formula.style.color = "black";
                break;

                case "8.11":
                  operacion = valorPrincipal / 1e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1e+12";
                  formula.style.color = "black";
                break;

                case "8.12":
                  operacion = valorPrincipal / 8e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8e+12";
                  formula.style.color = "black";
                break;

                case "8.13":
                  operacion = valorPrincipal / 1.1e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,1e+12";
                  formula.style.color = "black";
                break;
              }
            break;  
          
            case "8.2":

              switch (valor2) {
              
                case "8.1":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1000";
                  formula.style.color = "black";
                break;
                
                case "8.3":
                  operacion = valorPrincipal / 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8";
                  formula.style.color = "black";
                break;

                case "8.4":
                  operacion = valorPrincipal / 1.024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,024";
                  formula.style.color = "black";
                break;

                case "8.5":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1000";
                  formula.style.color = "black";
                break;

                case "8.6":
                  operacion = valorPrincipal / 8000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8000";
                  formula.style.color = "black";
                break;

                case "8.7":
                  operacion = valorPrincipal / 1049;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1049";
                  formula.style.color = "black";
                break;

                case "8.8":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1e+6";
                  formula.style.color = "black";
                break;

                case "8.9":
                  operacion = valorPrincipal / 8e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8e+6";
                  formula.style.color = "black";
                break;

                case "8.10":
                  operacion = valorPrincipal / 1.074e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,074e+6";
                  formula.style.color = "black";
                break;

                case "8.11":
                  operacion = valorPrincipal / 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1e+9";
                  formula.style.color = "black";
                break;

                case "8.12":
                  operacion = valorPrincipal / 8e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8e+9";
                  formula.style.color = "black";
                break;

                case "8.13":
                  operacion = valorPrincipal / 1.1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1.1e+9";
                  formula.style.color = "black";
                break;
              }
            break;
                 
            case "8.3":

              switch (valor2) {
              
                case "8.1":
                  operacion = valorPrincipal * 8000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8000";
                  formula.style.color = "black";
                break;
                
                case "8.2":
                  operacion = valorPrincipal * 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8";
                  formula.style.color = "black";
                break;

                case "8.4":
                  operacion = valorPrincipal * 7.812;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 7,812";
                  formula.style.color = "black";
                break;

                case "8.5":
                  operacion = valorPrincipal / 125;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 125";
                  formula.style.color = "black";
                break;

                case "8.6":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1000";
                  formula.style.color = "black";
                break;

                case "8.7":
                  operacion = valorPrincipal / 131.1;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 131,1";
                  formula.style.color = "black";
                break;

                case "8.8":
                  operacion = valorPrincipal / 125000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 125000";
                  formula.style.color = "black";
                break;

                case "8.9":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1e+6";
                  formula.style.color = "black";
                break;

                case "8.10":
                  operacion = valorPrincipal / 134200;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 134200";
                  formula.style.color = "black";
                break;

                case "8.11":
                  operacion = valorPrincipal / 1.25e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,25e+8";
                  formula.style.color = "black";
                break;

                case "8.12":
                  operacion = valorPrincipal / 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1e+9";
                  formula.style.color = "black";
                break;

                case "8.13":
                  operacion = valorPrincipal / 1.374e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,374e+8";
                  formula.style.color = "black";
                break;
              }
            break;

            case "8.4":

              switch (valor2) {
              
                case "8.1":
                  operacion = valorPrincipal * 1024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1024";
                  formula.style.color = "black";
                break;
                
                case "8.2":
                  operacion = valorPrincipal * 1.024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1.024";
                  formula.style.color = "black";
                break;

                case "8.3":
                  operacion = valorPrincipal * 7.812;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 7,812";
                  formula.style.color = "black";
                break;

                case "8.5":
                  operacion = valorPrincipal / 976.6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 976,6";
                  formula.style.color = "black";
                break;

                case "8.6":
                  operacion = valorPrincipal / 7813;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 7813";
                  formula.style.color = "black";
                break;

                case "8.7":
                  operacion = valorPrincipal / 1024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1024";
                  formula.style.color = "black";
                break;

                case "8.8":
                  operacion = valorPrincipal / 976600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 976600";
                  formula.style.color = "black";
                break;

                case "8.9":
                  operacion = valorPrincipal / 7.813e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 7,813e+6";
                  formula.style.color = "black";
                break;

                case "8.10":
                  operacion = valorPrincipal / 1.049e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,049e+6";
                  formula.style.color = "black";
                break;

                case "8.11":
                  operacion = valorPrincipal / 9.766+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 9,766e+8";
                  formula.style.color = "black";
                break;

                case "8.12":
                  operacion = valorPrincipal / 7.813e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 7,813e+9";
                  formula.style.color = "black";
                break;

                case "8.13":
                  operacion = valorPrincipal / 1.074e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,074e+9";
                  formula.style.color = "black";
                break;
              }
            break;

            case "8.5":

              switch (valor2) {
              
                case "8.1":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1e+6";
                  formula.style.color = "black";
                break;
                
                case "8.2":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1000";
                  formula.style.color = "black";
                break;

                case "8.3":
                  operacion = valorPrincipal * 125;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 125";
                  formula.style.color = "black";
                break;

                case "8.4":
                  operacion = valorPrincipal * 976.6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 976,6";
                  formula.style.color = "black";
                break;

                case "8.6":
                  operacion = valorPrincipal / 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8";
                  formula.style.color = "black";
                break;

                case "8.7":
                  operacion = valorPrincipal / 1.049;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,049";
                  formula.style.color = "black";
                break;

                case "8.8":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1000";
                  formula.style.color = "black";
                break;

                case "8.9":
                  operacion = valorPrincipal / 8000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8000";
                  formula.style.color = "black";
                break;

                case "8.10":
                  operacion = valorPrincipal / 1074;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1074";
                  formula.style.color = "black";
                break;

                case "8.11":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1e+6";
                  formula.style.color = "black";
                break;

                case "8.12":
                  operacion = valorPrincipal / 8e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8e+6";
                  formula.style.color = "black";
                break;

                case "8.13":
                  operacion = valorPrincipal / 1.1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,1e+6";
                  formula.style.color = "black";
                break;
              }
            break;

            case "8.6":

              switch (valor2) {
              
                case "8.1":
                  operacion = valorPrincipal * 8e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8e+6";
                  formula.style.color = "black";
                break;
                
                case "8.2":
                  operacion = valorPrincipal * 8000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8000";
                  formula.style.color = "black";
                break;

                case "8.3":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1000";
                  formula.style.color = "black";
                break;

                case "8.4":
                  operacion = valorPrincipal * 7813;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 7813";
                  formula.style.color = "black";
                break;

                case "8.5":
                  operacion = valorPrincipal * 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8";
                  formula.style.color = "black";
                break;

                case "8.7":
                  operacion = valorPrincipal * 7.629;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 7,629";
                  formula.style.color = "black";
                break;

                case "8.8":
                  operacion = valorPrincipal / 125;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 125";
                  formula.style.color = "black";
                break;

                case "8.9":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1000";
                  formula.style.color = "black";
                break;

                case "8.10":
                  operacion = valorPrincipal / 134.2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 134,2";
                  formula.style.color = "black";
                break;

                case "8.11":
                  operacion = valorPrincipal / 125000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 125000";
                  formula.style.color = "black";
                break;

                case "8.12":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1e+6";
                  formula.style.color = "black";
                break;

                case "8.13":
                  operacion = valorPrincipal / 137400;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 137400";
                  formula.style.color = "black";
                break;
              }
            break;
            
            case "8.7":

              switch (valor2) {
              
                case "8.1":
                  operacion = valorPrincipal * 1.049e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1,049e+6";
                  formula.style.color = "black";
                break;
                
                case "8.2":
                  operacion = valorPrincipal * 1049;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1049";
                  formula.style.color = "black";
                break;

                case "8.3":
                  operacion = valorPrincipal * 131.1;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 131,1";
                  formula.style.color = "black";
                break;

                case "8.4":
                  operacion = valorPrincipal * 1024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1024";
                  formula.style.color = "black";
                break;

                case "8.5":
                  operacion = valorPrincipal * 1.049;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1,049";
                  formula.style.color = "black";
                break;

                case "8.6":
                  operacion = valorPrincipal / 7.629;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 7,629";
                  formula.style.color = "black";
                break;

                case "8.8":
                  operacion = valorPrincipal / 953.7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 953,7";
                  formula.style.color = "black";
                break;

                case "8.9":
                  operacion = valorPrincipal / 7629;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 7629";
                  formula.style.color = "black";
                break;

                case "8.10":
                  operacion = valorPrincipal / 1024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1024";
                  formula.style.color = "black";
                break;

                case "8.11":
                  operacion = valorPrincipal / 953700;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 953700";
                  formula.style.color = "black";
                break;

                case "8.12":
                  operacion = valorPrincipal / 7.629e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 7,629e+6";
                  formula.style.color = "black";
                break;

                case "8.13":
                  operacion = valorPrincipal / 1.049e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,049e+6";
                  formula.style.color = "black";
                break;
              }
            break;

            case "8.8":

              switch (valor2) {
              
                case "8.1":
                  operacion = valorPrincipal * 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1e+9";
                  formula.style.color = "black";
                break;
                
                case "8.2":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1e+6";
                  formula.style.color = "black";
                break;

                case "8.3":
                  operacion = valorPrincipal * 125000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 125000";
                  formula.style.color = "black";
                break;

                case "8.4":
                  operacion = valorPrincipal * 976600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 976600";
                  formula.style.color = "black";
                break;

                case "8.5":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1000";
                  formula.style.color = "black";
                break;

                case "8.6":
                  operacion = valorPrincipal * 125;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 125";
                  formula.style.color = "black";
                break;

                case "8.7":
                  operacion = valorPrincipal * 953.7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 953,7";
                  formula.style.color = "black";
                break;

                case "8.9":
                  operacion = valorPrincipal / 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8";
                  formula.style.color = "black";
                break;

                case "8.10":
                  operacion = valorPrincipal / 1.074;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,074";
                  formula.style.color = "black";
                break;

                case "8.11":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1000";
                  formula.style.color = "black";
                break;

                case "8.12":
                  operacion = valorPrincipal / 8000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8000";
                  formula.style.color = "black";
                break;

                case "8.13":
                  operacion = valorPrincipal / 1100;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1100";
                  formula.style.color = "black";
                break;
              }
            break;
        
            case "8.9":

              switch (valor2) {
              
                case "8.1":
                  operacion = valorPrincipal * 8e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8e+9";
                  formula.style.color = "black";
                break;
                
                case "8.2":
                  operacion = valorPrincipal * 8e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8e+6";
                  formula.style.color = "black";
                break;

                case "8.3":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "ultiplicar el valor de tasa de transmisión de datos por 1e+6";
                  formula.style.color = "black";
                break;

                case "8.4":
                  operacion = valorPrincipal * 7.813e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 7,813e+6";
                  formula.style.color = "black";
                break;

                case "8.5":
                  operacion = valorPrincipal * 8000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8000";
                  formula.style.color = "black";
                break;

                case "8.6":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1000";
                  formula.style.color = "black";
                break;

                case "8.7":
                  operacion = valorPrincipal * 7629;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 7629";
                  formula.style.color = "black";
                break;

                case "8.8":
                  operacion = valorPrincipal * 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8";
                  formula.style.color = "black";
                break;

                case "8.10":
                  operacion = valorPrincipal / 7.451;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 7,451";
                  formula.style.color = "black";
                break;

                case "8.11":
                  operacion = valorPrincipal / 125;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 125";
                  formula.style.color = "black";
                break;

                case "8.12":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1000";
                  formula.style.color = "black";
                break;

                case "8.13":
                  operacion = valorPrincipal / 137.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 137,4";
                  formula.style.color = "black";
                break;
              }
            break;
 
            case "8.10":

              switch (valor2) {
              
                case "8.1":
                  operacion = valorPrincipal * 1.074e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1,074e+9";
                  formula.style.color = "black";
                break;
                
                case "8.2":
                  operacion = valorPrincipal * 1.074e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1,074e+6";
                  formula.style.color = "black";
                break;

                case "8.3":
                  operacion = valorPrincipal * 134200;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 134200";
                  formula.style.color = "black";
                break;

                case "8.4":
                  operacion = valorPrincipal * 1.049e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1,049e+6";
                  formula.style.color = "black";
                break;

                case "8.5":
                  operacion = valorPrincipal * 1074;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1074";
                  formula.style.color = "black";
                break;

                case "8.6":
                  operacion = valorPrincipal * 134.2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Mltiplica el valor de tasa de transmisión de datos por 134,2";
                  formula.style.color = "black";
                break;

                case "8.7":
                  operacion = valorPrincipal * 1024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1024";
                  formula.style.color = "black";
                break;

                case "8.8":
                  operacion = valorPrincipal * 1.074;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1,074";
                  formula.style.color = "black";
                break;

                case "8.9":
                  operacion = valorPrincipal / 7.412;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 7,451";
                  formula.style.color = "black";
                break;

                case "8.11":
                  operacion = valorPrincipal / 931.3;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 931,3";
                  formula.style.color = "black";
                break;

                case "8.12":
                  operacion = valorPrincipal / 7451;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 7451";
                  formula.style.color = "black";
                break;

                case "8.13":
                  operacion = valorPrincipal / 1024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1024";
                  formula.style.color = "black";
                break;
              }
            break;
          
            case "8.11":

              switch (valor2) {
              
                case "8.1":
                  operacion = valorPrincipal * 1e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1e+12";
                  formula.style.color = "black";
                break;
                
                case "8.2":
                  operacion = valorPrincipal * 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1e+9";
                  formula.style.color = "black";
                break;

                case "8.3":
                  operacion = valorPrincipal * 1.25e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1,25e+8";
                  formula.style.color = "black";
                break;

                case "8.4":
                  operacion = valorPrincipal * 9.766e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 9,766e+8";
                  formula.style.color = "black";
                break;

                case "8.5":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1e+6";
                  formula.style.color = "black";
                break;

                case "8.6":
                  operacion = valorPrincipal * 125000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 125000";
                  formula.style.color = "black";
                break;

                case "8.7":
                  operacion = valorPrincipal * 953700;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 953700";
                  formula.style.color = "black";
                break;

                case "8.8":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1000";
                  formula.style.color = "black";
                break;

                case "8.9":
                  operacion = valorPrincipal * 125;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 125";
                  formula.style.color = "black";
                break;

                case "8.10":
                  operacion = valorPrincipal * 931.3;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 931,3";
                  formula.style.color = "black";
                break;

                case "8.12":
                  operacion = valorPrincipal / 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 8";
                  formula.style.color = "black";
                break;

                case "8.13":
                  operacion = valorPrincipal / 1.1;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 1,1";
                  formula.style.color = "black";
                break;
              }
            break;
        
            case "8.12":

              switch (valor2) {
              
                case "8.1":
                  operacion = valorPrincipal * 8e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8e+12";
                  formula.style.color = "black";
                break;
                
                case "8.2":
                  operacion = valorPrincipal * 8e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8e+9";
                  formula.style.color = "black";
                break;

                case "8.3":
                  operacion = valorPrincipal * 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1e+9";
                  formula.style.color = "black";
                break;

                case "8.4":
                  operacion = valorPrincipal * 7.813e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 7,813e+9";
                  formula.style.color = "black";
                break;

                case "8.5":
                  operacion = valorPrincipal * 8e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8e+6";
                  formula.style.color = "black";
                break;

                case "8.6":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1e+6";
                  formula.style.color = "black";
                break;

                case "8.7":
                  operacion = valorPrincipal * 7.629e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 7,629e+6";
                  formula.style.color = "black";
                break;

                case "8.8":
                  operacion = valorPrincipal * 8000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8000";
                  formula.style.color = "black";
                break;

                case "8.9":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1000";
                  formula.style.color = "black";
                break;

                case "8.10":
                  operacion = valorPrincipal * 7451;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 7451";
                  formula.style.color = "black";
                break;

                case "8.11":
                  operacion = valorPrincipal * 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 8";
                  formula.style.color = "black";
                break;

                case "8.13":
                  operacion = valorPrincipal * 7.276;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 7,276";
                  formula.style.color = "black";
                break;
              }
              
            break;
          
            case "8.13":

              switch (valor2) {
              
                case "8.1":
                  operacion = valorPrincipal * 1.1e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1,1e+12";
                  formula.style.color = "black";
                break;
                
                case "8.2":
                  operacion = valorPrincipal * 1.1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1,1e+9";
                  formula.style.color = "black";
                break;

                case "8.3":
                  operacion = valorPrincipal * 1.374e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1,374e+8";
                  formula.style.color = "black";
                break;

                case "8.4":
                  operacion = valorPrincipal * 1.074e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1,074e+9";
                  formula.style.color = "black";
                break;

                case "8.5":
                  operacion = valorPrincipal * 1.1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1,1e+6";
                  formula.style.color = "black";
                break;

                case "8.6":
                  operacion = valorPrincipal * 137400;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 137400";
                  formula.style.color = "black";
                break;

                case "8.7":
                  operacion = valorPrincipal * 1.049e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1,049e+6";
                  formula.style.color = "black";
                break;

                case "8.8":
                  operacion = valorPrincipal * 1100;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1100";
                  formula.style.color = "black";
                break;

                case "8.9":
                  operacion = valorPrincipal * 137.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 137,4";
                  formula.style.color = "black";
                break;

                case "8.10":
                  operacion = valorPrincipal * 1024;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tasa de transmisión de datos por 1024";
                  formula.style.color = "black";
                break;

                case "8.11":
                  operacion = valorPrincipal * 1.1;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tasa de transmisión de datos por 1,1";
                  formula.style.color = "black";
                break;

                case "8.12":
                  operacion = valorPrincipal / 7.276;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tasa de transmisión de datos entre 7,276";
                  formula.style.color = "black";
                break;
              }
              
            break;
          
          }
        }
      }

      inputIngreso.addEventListener('input', function(){
        FormulaTransmisionDatos(select1.value, select2.value);
      })

      select1.addEventListener('change', function(){
        FormulaTransmisionDatos(select1.value, select2.value);
      })

      select2.addEventListener('change', function(){
        FormulaTransmisionDatos(select1.value, select2.value);
      })
    break;
    
    case 'valor9':
      traerValoresAndTexto(datos.valor9.valor, datos.valor9.texto);

      function FormulaTemperatura(valor1, valor2,) {
        let valorPrincipal = parseFloat(inputIngreso.value);
        let operacion;

        if (valor1 == valor2 || valor1 == "9.0" && valor2 || valor1 && valor2 == "9.0"){
          NoValido();
        } else {

          switch(valor1) {
  
            case "9.1": 
  
              switch (valor2) {
  
                case "9.2": 
                  operacion = (valorPrincipal * 9/5) + 32;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "("+valorPrincipal+"°C × 9/5) + 32 = "+operacion+"°F";
                  formula.style.color = "black";
                break;
  
                case "9.3":
                  operacion = valorPrincipal + 273.15;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+"°C + 273.15 = "+operacion+"K";
                  formula.style.color = "black";
                break;
              }
  
            break;
  
            case "9.2":
  
              switch (valor2) {
  
                case "9.1":
                  operacion = (valorPrincipal - 32) * 5/9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "("+valorPrincipal+"°F − 32) × 5/9 = "+operacion+"°C";
                  formula.style.color = "black";
                break;
  
                case "9.3":
                  operacion = (valorPrincipal - 32) * 5/9 + 273.15;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "("+valorPrincipal+"°F − 32) × 5/9 + 273.15 = "+operacion+"K";
                  formula.style.color = "black";
                break;
              }
            break;
  
            case "9.3":
  
              switch(valor2) {
                
                case "9.1":
                  operacion = valorPrincipal - 273.15;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+"K − 273.15 = "+operacion+"°C";
                  formula.style.color = "black";
                break;
  
                case "9.2":
                  operacion = (valorPrincipal - 273.15) * 9/5 + 32;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "("+valorPrincipal+"K − 273.15) × 9/5 + 32 = "+operacion+"°F";
                  formula.style.color = "black";
                break;
              }

            break;

          }
        }
      }

      inputIngreso.addEventListener("input", function(){
        FormulaTemperatura(select1.value, select2.value);
      });

      select1.addEventListener("change", function(){
        FormulaTemperatura(select1.value, select2.value);
      });
      
      select2.addEventListener("change", function(){
        FormulaTemperatura(select1.value, select2.value);
      });
      
    break;

    case 'valor10': 
      traerValoresAndTexto(datos.valor10.valor, datos.valor10.texto);
      
      function FormulaTiempo(valor1, valor2){
        let valorPrincipal = inputIngreso.value;
        let operacion;

        if (valor1 == valor2 || valor1 == "10.0" && valor2 || valor1 && valor2 == "10.0"){
          NoValido();
        }  else {

          switch (valor1){

            case "10.1":

              switch (valor2) {
              
                case "10.2":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 1000";
                  formula.style.color = "black";
                break;
                
                case "10.3":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 1e+6";
                  formula.style.color = "black";
                break;

                case "10.4":
                  operacion = valorPrincipal / 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 1e+9";
                  formula.style.color = "black";
                break;

                case "10.5":
                  operacion = valorPrincipal / 6e+10;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 6e+10";
                  formula.style.color = "black";
                break;

                case "10.6":
                  operacion = valorPrincipal / 3.6e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,6e+12";
                  formula.style.color = "black";
                break;

                case "10.7":
                  operacion = valorPrincipal / 8.64e+13;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 8,64e+13";
                  formula.style.color = "black";
                break;

                case "10.8":
                  operacion = valorPrincipal / 6.048e+14;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 6,048e+14";
                  formula.style.color = "black";
                break;

                case "10.9":
                  operacion = valorPrincipal / 2.628e+15;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 2,628e+15";
                  formula.style.color = "black";
                break;

                case "10.10":
                  operacion = valorPrincipal / 3.154e+16;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,154e+16";
                  formula.style.color = "black";
                break;

                case "10.11":
                  operacion = valorPrincipal / 3.154e+17;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,154e+17";
                  formula.style.color = "black";
                break;

                case "10.12":
                  operacion = valorPrincipal / 3.154e+18;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,154e+18";
                  formula.style.color = "black";
                break;
              }
            break;  
          
            case "10.2":

              switch (valor2) {
              
                case "10.1":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 1000";
                  formula.style.color = "black";
                break;
                
                case "10.3":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 1000";
                  formula.style.color = "black";
                break;

                case "10.4":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 1e+6";
                  formula.style.color = "black";
                break;

                case "10.5":
                  operacion = valorPrincipal / 6e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 6e+7";
                  formula.style.color = "black";
                break;

                case "10.6":
                  operacion = valorPrincipal / 3.6e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,6e+9";
                  formula.style.color = "black";
                break;

                case "10.7":
                  operacion = valorPrincipal / 8.64e+10;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 8,64e+10";
                  formula.style.color = "black";
                break;

                case "10.8":
                  operacion = valorPrincipal / 6.048e+11;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 6,048e+11";
                  formula.style.color = "black";
                break;

                case "10.9":
                  operacion = valorPrincipal / 2.628e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 2,628e+12";
                  formula.style.color = "black";
                break;

                case "10.10":
                  operacion = valorPrincipal / 3.154e+13;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,154e+13";
                  formula.style.color = "black";
                break;

                case "10.11":
                  operacion = valorPrincipal / 3.154e+14;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,154e+14";
                  formula.style.color = "black";
                break;

                case "10.12":
                  operacion = valorPrincipal / 3.154e+15;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,154e+15";
                  formula.style.color = "black";
                break;
              }
            break;
                 
            case "10.3":

              switch (valor2) {
              
                case "10.1":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 1e+6";
                  formula.style.color = "black";
                break;
                
                case "10.2":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 1000";
                  formula.style.color = "black";
                break;

                case "10.4":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 1000";
                  formula.style.color = "black";
                break;

                case "10.5":
                  operacion = valorPrincipal / 60000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 60000";
                  formula.style.color = "black";
                break;

                case "10.6":
                  operacion = valorPrincipal / 3.6e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,6e+6";
                  formula.style.color = "black";
                break;

                case "10.7":
                  operacion = valorPrincipal / 8.64e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 8,64e+7";
                  formula.style.color = "black";
                break;

                case "10.8":
                  operacion = valorPrincipal / 6.048e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 6,048e+8";
                  formula.style.color = "black";
                break;

                case "10.9":
                  operacion = valorPrincipal / 2.628e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 2,628e+9";
                  formula.style.color = "black";
                break;

                case "10.10":
                  operacion = valorPrincipal / 3.154e+10;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,154e+10";
                  formula.style.color = "black";
                break;

                case "10.11":
                  operacion = valorPrincipal / 3.154e+11;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,154e+11";
                  formula.style.color = "black";
                break;

                case "10.12":
                  operacion = valorPrincipal / 3.154e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,154e+12";
                  formula.style.color = "black";
                break;
              }
            break;

            case "10.4":

              switch (valor2) {
              
                case "10.1":
                  operacion = valorPrincipal * 1e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 1e+9";
                  formula.style.color = "black";
                break;
                
                case "10.2":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 1e+6";
                  formula.style.color = "black";
                break;

                case "10.3":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 1000";
                  formula.style.color = "black";
                break;

                case "10.5":
                  operacion = valorPrincipal / 60;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 60";
                  formula.style.color = "black";
                break;

                case "10.6":
                  operacion = valorPrincipal / 3600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3600";
                  formula.style.color = "black";
                break;

                case "10.7":
                  operacion = valorPrincipal / 186400;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 86400";
                  formula.style.color = "black";
                break;

                case "10.8":
                  operacion = valorPrincipal / 604800;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 604800";
                  formula.style.color = "black";
                break;

                case "10.9":
                  operacion = valorPrincipal / 2.628e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 2,628e+6";
                  formula.style.color = "black";
                break;

                case "10.10":
                  operacion = valorPrincipal / 3.154e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,154e+7";
                  formula.style.color = "black";
                break;

                case "10.11":
                  operacion = valorPrincipal / 3.154e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,154e+8";
                  formula.style.color = "black";
                break;

                case "10.12":
                  operacion = valorPrincipal / 3.154e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3,154e+9";
                  formula.style.color = "black";
                break;
              }
            break;

            case "10.5":

              switch (valor2) {
              
                case "10.1":
                  operacion = valorPrincipal * 6e+10;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 6e+10";
                  formula.style.color = "black";
                break;
                
                case "10.2":
                  operacion = valorPrincipal * 6e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Dultiplicar el valor de tiempo por 6e+7";
                  formula.style.color = "black";
                break;

                case "10.3":
                  operacion = valorPrincipal * 60000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 60000";
                  formula.style.color = "black";
                break;

                case "10.4":
                  operacion = valorPrincipal * 60;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 60";
                  formula.style.color = "black";
                break;

                case "10.6":
                  operacion = valorPrincipal / 60;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 60";
                  formula.style.color = "black";
                break;

                case "10.7":
                  operacion = valorPrincipal / 1440;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 1440";
                  formula.style.color = "black";
                break;

                case "10.8":
                  operacion = valorPrincipal / 10080;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 10080";
                  formula.style.color = "black";
                break;

                case "10.9":
                  operacion = valorPrincipal / 43800;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 43800";
                  formula.style.color = "black";
                break;

                case "10.10":
                  operacion = valorPrincipal / 525600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 525600";
                  formula.style.color = "black";
                break;

                case "10.11":
                  operacion = valorPrincipal / 5.256e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 5,256e+6";
                  formula.style.color = "black";
                break;

                case "10.12":
                  operacion = valorPrincipal / 5.256e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 5,256e+7";
                  formula.style.color = "black";
                break;
              }
            break;

            case "10.6":

              switch (valor2) {
              
                case "10.1":
                  operacion = valorPrincipal * 3.6e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 3,6e+12";
                  formula.style.color = "black";
                break;
                
                case "10.2":
                  operacion = valorPrincipal * 3.6e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 3,6e+9";
                  formula.style.color = "black";
                break;

                case "10.3":
                  operacion = valorPrincipal * 3.6e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 3,6e+6";
                  formula.style.color = "black";
                break;

                case "10.4":
                  operacion = valorPrincipal * 3600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 3600";
                  formula.style.color = "black";
                break;

                case "10.5":
                  operacion = valorPrincipal * 60;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 60";
                  formula.style.color = "black";
                break;

                case "10.7":
                  operacion = valorPrincipal / 24;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 24";
                  formula.style.color = "black";
                break;

                case "10.8":
                  operacion = valorPrincipal / 168;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 168";
                  formula.style.color = "black";
                break;

                case "10.9":
                  operacion = valorPrincipal / 730;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 730";
                  formula.style.color = "black";
                break;

                case "10.10":
                  operacion = valorPrincipal / 8760;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 8760";
                  formula.style.color = "black";
                break;

                case "10.11":
                  operacion = valorPrincipal / 87600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 87600";
                  formula.style.color = "black";
                break;

                case "10.12":
                  operacion = valorPrincipal / 876000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 876000";
                  formula.style.color = "black";
                break;
              }
            break;
            
            case "10.7":

              switch (valor2) {
              
                case "10.1":
                  operacion = valorPrincipal * 8.64e+13;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 8,64e+13";
                  formula.style.color = "black";
                break;
                
                case "10.2":
                  operacion = valorPrincipal * 8.64e+10;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 8,64e+10";
                  formula.style.color = "black";
                break;

                case "10.3":
                  operacion = valorPrincipal * 8.64e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 8,64e+7";
                  formula.style.color = "black";
                break;

                case "10.4":
                  operacion = valorPrincipal * 86400;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 86400";
                  formula.style.color = "black";
                break;

                case "10.5":
                  operacion = valorPrincipal * 1440;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 1440";
                  formula.style.color = "black";
                break;

                case "10.6":
                  operacion = valorPrincipal * 24;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 24";
                  formula.style.color = "black";
                break;

                case "10.8":
                  operacion = valorPrincipal / 7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 7";
                  formula.style.color = "black";
                break;

                case "10.9":
                  operacion = valorPrincipal / 30.417;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 30,417";
                  formula.style.color = "black";
                break;

                case "10.10":
                  operacion = valorPrincipal / 365;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 365";
                  formula.style.color = "black";
                break;

                case "10.11":
                  operacion = valorPrincipal / 3650;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 3650";
                  formula.style.color = "black";
                break;

                case "10.12":
                  operacion = valorPrincipal / 36500;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 36500";
                  formula.style.color = "black";
                break;
              }
            break;

            case "10.8":

              switch (valor2) {
              
                case "10.1":
                  operacion = valorPrincipal * 6.048e+14;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 6,048e+14";
                  formula.style.color = "black";
                break;
                
                case "10.2":
                  operacion = valorPrincipal * 6.048e+11;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 6,048e+11";
                  formula.style.color = "black";
                break;

                case "10.3":
                  operacion = valorPrincipal * 6.048e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 6,048e+8";
                  formula.style.color = "black";
                break;

                case "10.4":
                  operacion = valorPrincipal * 604800;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 604800";
                  formula.style.color = "black";
                break;

                case "10.5":
                  operacion = valorPrincipal * 10080;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 10080";
                  formula.style.color = "black";
                break;

                case "10.6":
                  operacion = valorPrincipal * 168;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 168";
                  formula.style.color = "black";
                break;

                case "10.7":
                  operacion = valorPrincipal * 7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 7";
                  formula.style.color = "black";
                break;

                case "10.9":
                  operacion = valorPrincipal / 4.345;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 4,345";
                  formula.style.color = "black";
                break;

                case "10.10":
                  operacion = valorPrincipal / 52.143;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 52,143";
                  formula.style.color = "black";
                break;

                case "10.11":
                  operacion = valorPrincipal / 521.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 521,4";
                  formula.style.color = "black";
                break;

                case "10.12":
                  operacion = valorPrincipal / 5214;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 5214";
                  formula.style.color = "black";
                break;
              }
            break;
        
            case "10.9":

              switch (valor2) {
              
                case "10.1":
                  operacion = valorPrincipal * 2.628e+15;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 2,628e+15";
                  formula.style.color = "black";
                break;
                
                case "10.2":
                  operacion = valorPrincipal * 2.628e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 2,628e+12";
                  formula.style.color = "black";
                break;

                case "10.3":
                  operacion = valorPrincipal * 2.628e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 2,628e+9";
                  formula.style.color = "black";
                break;

                case "10.4":
                  operacion = valorPrincipal * 2.628e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 2,628e+6";
                  formula.style.color = "black";
                break;

                case "10.5":
                  operacion = valorPrincipal * 43800;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 43800";
                  formula.style.color = "black";
                break;

                case "10.6":
                  operacion = valorPrincipal * 730;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 730";
                  formula.style.color = "black";
                break;

                case "10.7":
                  operacion = valorPrincipal * 30.417;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 30,417";
                  formula.style.color = "black";
                break;

                case "10.8":
                  operacion = valorPrincipal * 4.345;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 4,345";
                  formula.style.color = "black";
                break;

                case "10.10":
                  operacion = valorPrincipal / 12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 12";
                  formula.style.color = "black";
                break;

                case "10.11":
                  operacion = valorPrincipal / 120;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 120";
                  formula.style.color = "black";
                break;

                case "10.12":
                  operacion = valorPrincipal / 1200;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 1200";
                  formula.style.color = "black";
                break;
              }
            break;
 
            case "10.10":

              switch (valor2) {
              
                case "10.1":
                  operacion = valorPrincipal * 3.154e+16;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 3,154e+16";
                  formula.style.color = "black";
                break;
                
                case "10.2":
                  operacion = valorPrincipal * 3.154e+13;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 3,154e+13";
                  formula.style.color = "black";
                break;

                case "10.3":
                  operacion = valorPrincipal * 3.154e+10;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 3,154e+10";
                  formula.style.color = "black";
                break;

                case "10.4":
                  operacion = valorPrincipal * 3.154e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 3,154e+7";
                  formula.style.color = "black";
                break;

                case "10.5":
                  operacion = valorPrincipal * 525600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 525600";
                  formula.style.color = "black";
                break;

                case "10.6":
                  operacion = valorPrincipal * 8760;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 8760";
                  formula.style.color = "black";
                break;

                case "10.7":
                  operacion = valorPrincipal * 365;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "MMultiplicar el valor de tiempo por 365";
                  formula.style.color = "black";
                break;

                case "10.8":
                  operacion = valorPrincipal * 52.143;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 52,143";
                  formula.style.color = "black";
                break;

                case "10.9":
                  operacion = valorPrincipal * 12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 12";
                  formula.style.color = "black";
                break;

                case "10.11":
                  operacion = valorPrincipal / 10;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 10";
                  formula.style.color = "black";
                break;

                case "10.12":
                  operacion = valorPrincipal / 100;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 100";
                  formula.style.color = "black";
                break;
              }
            break;
          
            case "10.11":

              switch (valor2) {
              
                case "10.1":
                  operacion = valorPrincipal * 3.154e+17;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 3,154e+17";
                  formula.style.color = "black";
                break;
                
                case "10.2":
                  operacion = valorPrincipal * 3.154e+14;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 3,154e+14";
                  formula.style.color = "black";
                break;

                case "10.3":
                  operacion = valorPrincipal * 3.154e+11;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 3,154e+11";
                  formula.style.color = "black";
                break;

                case "10.4":
                  operacion = valorPrincipal * 3.154e+8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 3,154e+8";
                  formula.style.color = "black";
                break;

                case "10.5":
                  operacion = valorPrincipal * 5.256e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 5,256e+6";
                  formula.style.color = "black";
                break;

                case "10.6":
                  operacion = valorPrincipal * 87600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 87600";
                  formula.style.color = "black";
                break;

                case "10.7":
                  operacion = valorPrincipal * 3650;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 3650";
                  formula.style.color = "black";
                break;

                case "10.8":
                  operacion = valorPrincipal * 521.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 521,4";
                  formula.style.color = "black";
                break;

                case "10.9":
                  operacion = valorPrincipal * 120;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 120";
                  formula.style.color = "black";
                break;

                case "10.10":
                  operacion = valorPrincipal * 10;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 10";
                  formula.style.color = "black";
                break;

                case "10.12":
                  operacion = valorPrincipal / 10;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de tiempo entre 10";
                  formula.style.color = "black";
                break;
              }
            break;
        
            case "10.12":

              switch (valor2) {
              
                case "10.1":
                  operacion = valorPrincipal * 3.154e+18;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 3,154e+18";
                  formula.style.color = "black";
                break;
                
                case "10.2":
                  operacion = valorPrincipal * 3.154e+15;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 3,154e+15";
                  formula.style.color = "black";
                break;

                case "10.3":
                  operacion = valorPrincipal * 3.154e+12;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 3,154e+12";
                  formula.style.color = "black";
                break;

                case "10.4":
                  operacion = valorPrincipal * 3.154e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 3,154e+9";
                  formula.style.color = "black";
                break;

                case "10.5":
                  operacion = valorPrincipal * 5.256e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 5,256e+7";
                  formula.style.color = "black";
                break;

                case "10.6":
                  operacion = valorPrincipal * 876000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 876000";
                  formula.style.color = "black";
                break;

                case "10.7":
                  operacion = valorPrincipal * 36500;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 36500";
                  formula.style.color = "black";
                break;

                case "10.8":
                  operacion = valorPrincipal * 5214;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 5214";
                  formula.style.color = "black";
                break;

                case "10.9":
                  operacion = valorPrincipal * 1200;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de tiempo por 1200";
                  formula.style.color = "black";
                break;

                case "10.10":
                  operacion = valorPrincipal * 100;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 100";
                  formula.style.color = "black";
                break;

                case "10.11":
                  operacion = valorPrincipal * 10;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de tiempo por 10";
                  formula.style.color = "black";
                break;
              }
            break;
          }
        }
      }

      inputIngreso.addEventListener('input', function(){
        FormulaTiempo(select1.value, select2.value);
      })

      select1.addEventListener('change', function(){
        FormulaTiempo(select1.value, select2.value);
      })

      select2.addEventListener('change', function(){
        FormulaTiempo(select1.value, select2.value);
      })
    break;

    case 'valor11': 
      traerValoresAndTexto(datos.valor11.valor, datos.valor11.texto);
      
      function FormulaVelocidad(valor1, valor2){
        let valorPrincipal = inputIngreso.value;
        let operacion;

        if (valor1 == valor2 || valor1 == "11.0" && valor2 || valor1 && valor2 == "11.0"){
          NoValido();
        } else {

          switch (valor1) {

            case "11.1": 

              switch (valor2) {
                 
                case "11.2":
                  operacion = valorPrincipal * 1.467;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de velocidad por 1,467";
                  formula.style.color = "black";
                break;

                case "11.3":
                  operacion = valorPrincipal / 2.237;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de velocidad entre 2,237";
                  formula.style.color = "black";
                break;

                case "11.4":
                  operacion = valorPrincipal * 1.609;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de velocidad por 1,609";
                  formula.style.color = "black";
                break;

                case "11.5":
                  operacion = valorPrincipal / 1.151;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de velocidad entre 1,151";
                  formula.style.color = "black";
                break;
              }
              
            break;

            case "11.2": 

              switch (valor2) {
                 
                case "11.1":
                  operacion = valorPrincipal / 1.467;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de velocidad entre 1,467";
                  formula.style.color = "black";
                break;

                case "11.3":
                  operacion = valorPrincipal / 3.281;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de velocidad entre 3,281";
                  formula.style.color = "black";
                break;

                case "11.4":
                  operacion = valorPrincipal * 1.097;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de velocidad por 1,097";
                  formula.style.color = "black";
                break;

                case "11.5":
                  operacion = valorPrincipal / 1.688;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de velocidad entre 1,688";
                  formula.style.color = "black";
                break;
              }

            break;

            case "11.3": 

              switch (valor2) {
                 
                case "11.1":
                  operacion = valorPrincipal * 2.237;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de velocidad por 2,237";
                  formula.style.color = "black";
                break;

                case "11.2":
                  operacion = valorPrincipal * 3.281;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de velocidad por 3,281";
                  formula.style.color = "black";
                break;

                case "11.4":
                  operacion = valorPrincipal * 3.6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de velocidad por 3,6";
                  formula.style.color = "black";
                break;

                case "11.5":
                  operacion = valorPrincipal * 1.944;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de velocidad por 1,944";
                  formula.style.color = "black";
                break;
              }

            break;

            case "11.4": 

              switch (valor2) {
                 
                case "11.1":
                  operacion = valorPrincipal / 1.609;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de velocidad entre 1,609";
                  formula.style.color = "black";
                break;

                case "11.2":
                  operacion = valorPrincipal / 1.097;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de velocidad entre 1,097";
                  formula.style.color = "black";
                break;

                case "11.3":
                  operacion = valorPrincipal / 3.6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de velocidad entre 3,6";
                  formula.style.color = "black";
                break;

                case "11.5":
                  operacion = valorPrincipal / 1.852;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de velocidad entre 1,852";
                  formula.style.color = "black";
                break;
              }

            break;

            case "11.5": 

              switch (valor2) {
                 
                case "11.1":
                  operacion = valorPrincipal * 1.151;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de velocidad por 1,151";
                  formula.style.color = "black";
                break;

                case "11.2":
                  operacion = valorPrincipal * 1.688;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, multiplica el valor de velocidad por 1,688";
                  formula.style.color = "black";
                break;

                case "11.3":
                  operacion = valorPrincipal / 1.944;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Para obtener un resultado aproximado, divide el valor de velocidad entre 1,944";
                  formula.style.color = "black";
                break;

                case "11.4":
                  operacion = valorPrincipal * 1.852;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de velocidad por 1,852";
                  formula.style.color = "black";
                break;
              }

            break;
            
          }
        }
      }

      inputIngreso.addEventListener('input', function(){
        FormulaVelocidad(select1.value, select2.value);
      })

      select1.addEventListener('change', function(){
        FormulaVelocidad(select1.value, select2.value);
      })

      select2.addEventListener('change', function(){
        FormulaVelocidad(select1.value, select2.value);
      })
    break;

    case 'valor12': 
      traerValoresAndTexto(datos.valor12.valor, datos.valor12.texto);
      

      function FormulaVolumen(valor1, valor2){
        let valorPrincipal = inputIngreso.value;
        let operacion;

        
        if (valor1 == valor2 || valor1 == "12.0" && valor2 || valor1 && valor2 == "12.0"){
          NoValido();
        } else {

          switch (valor1) {

            case "12.1":

              switch (valor2) {
                
                case "12.2":
                  operacion = valorPrincipal * 4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 4";
                  formula.style.color = "black";
                break;
                
                case "12.3":
                  operacion = valorPrincipal * 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 8";
                  formula.style.color = "black";
                break;

                case "12.4":
                  operacion = valorPrincipal * 15.773;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 15,773";
                  formula.style.color = "black";
                break;

                case "12.5":
                  operacion = valorPrincipal * 128;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 128";
                  formula.style.color = "black";
                break;

                case "12.6":
                  operacion = valorPrincipal * 256;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 256";
                  formula.style.color = "black";
                break;

                case "12.7":
                  operacion = valorPrincipal * 768;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 768";
                  formula.style.color = "black";
                break;

                case "12.8":
                  operacion = valorPrincipal / 264.2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 264,2";
                  formula.style.color = "black";
                break;

                case "12.9":
                  operacion = valorPrincipal * 3.785;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 3,785";
                  formula.style.color = "black";
                break;

                case "12.10":
                  operacion = valorPrincipal * 3785;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 3785";
                  formula.style.color = "black";
                break;

                case "12.11":
                  operacion = valorPrincipal / 1.201;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 1,201";
                  formula.style.color = "black";
                break;

                case "12.12":
                  operacion = valorPrincipal * 3.331;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 3,331";
                  formula.style.color = "black";
                break;

                case "12.13":
                  operacion = valorPrincipal * 6.661;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 6,661";
                  formula.style.color = "black";
                break;

                case "12.14":
                  operacion = valorPrincipal * 13.323;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 13,323";
                  formula.style.color = "black";
                break;

                case "12.15":
                  operacion = valorPrincipal * 133.2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 133,2";
                  formula.style.color = "black";
                break;

                case "12.16":
                  operacion = valorPrincipal * 213.2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 213,2";
                  formula.style.color = "black";
                break;

                case "12.17":
                  operacion = valorPrincipal * 639.5;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 639,5";
                  formula.style.color = "black";
                break;

                case "12.18":
                  operacion = valorPrincipal / 7.48;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 7,48";
                  formula.style.color = "black";
                break;

                case "12.19":
                  operacion = valorPrincipal * 231;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 231";
                  formula.style.color = "black";
                break;

              }

            break;

            case "12.2":

              switch (valor2) {
                
                case "12.1":
                  operacion = valorPrincipal / 4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 4";
                  formula.style.color = "black";
                break;
                
                case "12.3":
                  operacion = valorPrincipal * 2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 2";
                  formula.style.color = "black";
                break;

                case "12.4":
                  operacion = valorPrincipal * 3.943;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 3,943";
                  formula.style.color = "black";
                break;

                case "12.5":
                  operacion = valorPrincipal * 32;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 32";
                  formula.style.color = "black";
                break;

                case "12.6":
                  operacion = valorPrincipal * 64;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 64";
                  formula.style.color = "black";
                break;

                case "12.7":
                  operacion = valorPrincipal * 192;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 192";
                  formula.style.color = "black";
                break;

                case "12.8":
                  operacion = valorPrincipal / 1057;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 1057";
                  formula.style.color = "black";
                break;

                case "12.9":
                  operacion = valorPrincipal / 1.057;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 1.057";
                  formula.style.color = "black";
                break;

                case "12.10":
                  operacion = valorPrincipal / 946.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 946,4";
                  formula.style.color = "black";
                break;

                case "12.11":
                  operacion = valorPrincipal / 4.804;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 4,804";
                  formula.style.color = "black";
                break;

                case "12.12":
                  operacion = valorPrincipal / 1.201;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 1,201";
                  formula.style.color = "black";
                break;

                case "12.13":
                  operacion = valorPrincipal * 1.665;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 1,665";
                  formula.style.color = "black";
                break;

                case "12.14":
                  operacion = valorPrincipal * 3.331;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 3,331";
                  formula.style.color = "black";
                break;

                case "12.15":
                  operacion = valorPrincipal * 33.307;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 33,307";
                  formula.style.color = "black";
                break;

                case "12.16":
                  operacion = valorPrincipal * 53.291;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 53,291";
                  formula.style.color = "black";
                break;

                case "12.17":
                  operacion = valorPrincipal * 159.9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 159,9";
                  formula.style.color = "black";
                break;

                case "12.18":
                  operacion = valorPrincipal / 29.922;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 29,922";
                  formula.style.color = "black";
                break;

                case "12.19":
                  operacion = valorPrincipal * 57.75;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 57,75";
                  formula.style.color = "black";
                break;
              }
            break;

            case "12.3":

              switch (valor2) {
                
                case "12.1":
                  operacion = valorPrincipal / 8;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 8";
                  formula.style.color = "black";
                break;
                
                case "12.2":
                  operacion = valorPrincipal / 2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 2";
                  formula.style.color = "black";
                break;

                case "12.4":
                  operacion = valorPrincipal * 1.972;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 1,972";
                  formula.style.color = "black";
                break;

                case "12.5":
                  operacion = valorPrincipal * 16;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 16";
                  formula.style.color = "black";
                break;

                case "12.6":
                  operacion = valorPrincipal * 32;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 32";
                  formula.style.color = "black";
                break;

                case "12.7":
                  operacion = valorPrincipal * 96;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 96";
                  formula.style.color = "black";
                break;

                case "12.8":
                  operacion = valorPrincipal / 2113;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 2113";
                  formula.style.color = "black";
                break;

                case "12.9":
                  operacion = valorPrincipal / 2.113;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 2.113";
                  formula.style.color = "black";
                break;

                case "12.10":
                  operacion = valorPrincipal * 473.2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 473,2";
                  formula.style.color = "black";
                break;

                case "12.11":
                  operacion = valorPrincipal / 9.608;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 9,608";
                  formula.style.color = "black";
                break;

                case "12.12":
                  operacion = valorPrincipal / 2.402;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 2,402";
                  formula.style.color = "black";
                break;

                case "12.13":
                  operacion = valorPrincipal / 1.201;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 1,201";
                  formula.style.color = "black";
                break;

                case "12.14":
                  operacion = valorPrincipal * 1.665;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 1,665";
                  formula.style.color = "black";
                break;

                case "12.15":
                  operacion = valorPrincipal * 16.653;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 16,653";
                  formula.style.color = "black";
                break;

                case "12.16":
                  operacion = valorPrincipal * 26.646;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 26,646";
                  formula.style.color = "black";
                break;

                case "12.17":
                  operacion = valorPrincipal * 79.937;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 79,937";
                  formula.style.color = "black";
                break;

                case "12.18":
                  operacion = valorPrincipal / 59.844;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 59,844";
                  formula.style.color = "black";
                break;

                case "12.19":
                  operacion = valorPrincipal * 28.875;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 28,875";
                  formula.style.color = "black";
                break;
              }

            break;

            case "12.4":

              switch (valor2) {
                
                case "12.1":
                  operacion = valorPrincipal / 15.772;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 15,772";
                  formula.style.color = "black";
                break;
                
                case "12.2":
                  operacion = valorPrincipal / 3.943;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 3,943";
                  formula.style.color = "black";
                break;

                case "12.3":
                  operacion = valorPrincipal / 1.972;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 1,972";
                  formula.style.color = "black";
                break;

                case "12.5":
                  operacion = valorPrincipal * 8.115;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 8,115";
                  formula.style.color = "black";
                break;

                case "12.6":
                  operacion = valorPrincipal * 16.231;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 16,231";
                  formula.style.color = "black";
                break;

                case "12.7":
                  operacion = valorPrincipal * 48.692;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 48,692";
                  formula.style.color = "black";
                break;

                case "12.8":
                  operacion = valorPrincipal / 4167;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 4167";
                  formula.style.color = "black";
                break;

                case "12.9":
                  operacion = valorPrincipal / 4.167;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 4.167";
                  formula.style.color = "black";
                break;

                case "12.10":
                  operacion = valorPrincipal * 240;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 240";
                  formula.style.color = "black";
                break;

                case "12.11":
                  operacion = valorPrincipal / 18.942;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 18,942";
                  formula.style.color = "black";
                break;

                case "12.12":
                  operacion = valorPrincipal / 4.736;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 4,736";
                  formula.style.color = "black";
                break;

                case "12.13":
                  operacion = valorPrincipal / 2.368;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 2,368";
                  formula.style.color = "black";
                break;

                case "12.14":
                  operacion = valorPrincipal / 1.184;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 1,184";
                  formula.style.color = "black";
                break;

                case "12.15":
                  operacion = valorPrincipal * 8.447;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 8,447";
                  formula.style.color = "black";
                break;

                case "12.16":
                  operacion = valorPrincipal * 13.515;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 13,515";
                  formula.style.color = "black";
                break;

                case "12.17":
                  operacion = valorPrincipal * 40.545;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 40,545";
                  formula.style.color = "black";
                break;

                case "12.18":
                  operacion = valorPrincipal / 118;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 118";
                  formula.style.color = "black";
                break;

                case "12.19":
                  operacion = valorPrincipal * 14.646;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 14,646";
                  formula.style.color = "black";
                break;

              }

            break;

            case "12.5":

              switch (valor2) {
                
                case "12.1":
                  operacion = valorPrincipal / 128;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 128";
                  formula.style.color = "black";
                break;
                
                case "12.2":
                  operacion = valorPrincipal / 32;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 32";
                  formula.style.color = "black";
                break;

                case "12.3":
                  operacion = valorPrincipal / 16;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 16";
                  formula.style.color = "black";
                break;

                case "12.4":
                  operacion = valorPrincipal / 8.115;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 8,115";
                  formula.style.color = "black";
                break;

                case "12.6":
                  operacion = valorPrincipal * 2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 2";
                  formula.style.color = "black";
                break;

                case "12.7":
                  operacion = valorPrincipal * 6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 6";
                  formula.style.color = "black";
                break;

                case "12.8":
                  operacion = valorPrincipal * 33810;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 33810";
                  formula.style.color = "black";
                break;

                case "12.9":
                  operacion = valorPrincipal / 33.814;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 33.814";
                  formula.style.color = "black";
                break;

                case "12.10":
                  operacion = valorPrincipal * 29.574;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 29,574";
                  formula.style.color = "black";
                break;

                case "12.11":
                  operacion = valorPrincipal / 153.7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 153,7";
                  formula.style.color = "black";
                break;

                case "12.12":
                  operacion = valorPrincipal / 38.43;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 38,43";
                  formula.style.color = "black";
                break;

                case "12.13":
                  operacion = valorPrincipal / 19.215;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 19,215";
                  formula.style.color = "black";
                break;

                case "12.14":
                  operacion = valorPrincipal / 9.608;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 9,608";
                  formula.style.color = "black";
                break;

                case "12.15":
                  operacion = valorPrincipal * 1.041;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 1,041";
                  formula.style.color = "black";
                break;

                case "12.16":
                  operacion = valorPrincipal * 1.665;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 1,665";
                  formula.style.color = "black";
                break;

                case "12.17":
                  operacion = valorPrincipal * 4.996;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 4,996";
                  formula.style.color = "black";
                break;

                case "12.18":
                  operacion = valorPrincipal / 957.5;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 957,5";
                  formula.style.color = "black";
                break;

                case "12.19":
                  operacion = valorPrincipal * 1.805;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 1,805";
                  formula.style.color = "black";
                break;
              }

            break;

            case "12.6":
              
              switch (valor2) {
                
                case "12.1":
                  operacion = valorPrincipal / 256;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 256";
                  formula.style.color = "black";
                break;
                
                case "12.2":
                  operacion = valorPrincipal / 64;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 64";
                  formula.style.color = "black";
                break;

                case "12.3":
                  operacion = valorPrincipal / 32;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 32";
                  formula.style.color = "black";
                break;

                case "12.4":
                  operacion = valorPrincipal / 16.231;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 16,231";
                  formula.style.color = "black";
                break;

                case "12.5":
                  operacion = valorPrincipal / 2;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 2";
                  formula.style.color = "black";
                break;

                case "12.7":
                  operacion = valorPrincipal * 3;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 3";
                  formula.style.color = "black";
                break;

                case "12.8":
                  operacion = valorPrincipal / 67630;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 67630";
                  formula.style.color = "black";
                break;

                case "12.9":
                  operacion = valorPrincipal / 67.628;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 67,628";
                  formula.style.color = "black";
                break;

                case "12.10":
                  operacion = valorPrincipal * 14.787;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de volumen por 14,787";
                  formula.style.color = "black";
                break;

                case "12.11":
                  operacion = valorPrincipal / 307.4;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 307,4";
                  formula.style.color = "black";
                break;

                case "12.12":
                  operacion = valorPrincipal / 76.861;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 76,861";
                  formula.style.color = "black";
                break;

                case "12.13":
                  operacion = valorPrincipal / 38.43;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 38,43";
                  formula.style.color = "black";
                break;

                case "12.14":
                  operacion = valorPrincipal / 19.215;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 19,215";
                  formula.style.color = "black";
                break;

                case "12.15":
                  operacion = valorPrincipal / 1.922;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 1,922";
                  formula.style.color = "black";
                break;

                case "12.16":
                  operacion = valorPrincipal / 1.201;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 1,201";
                  formula.style.color = "black";
                break;

                case "12.17":
                  operacion = valorPrincipal * 2.498;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de volumen por 2,498";
                  formula.style.color = "black";
                break;

                case "12.18":
                  operacion = valorPrincipal / 1915;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 1915";
                  formula.style.color = "black";
                break;

                case "12.19":
                  operacion = valorPrincipal / 1.108;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de volumen entre 1,108";
                  formula.style.color = "black";
                break;

              }

            break;

            case "12.7":

            switch (valor2) {
              
              case "12.1":
                operacion = valorPrincipal / 768;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 768";
                formula.style.color = "black";
              break;
              
              case "12.2":
                operacion = valorPrincipal / 192;     
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 192";
                formula.style.color = "black";
              break;

              case "12.3":
                operacion = valorPrincipal / 96;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 96";
                formula.style.color = "black";
              break;

              case "12.4":
                operacion = valorPrincipal / 48.692;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 48,692";
                formula.style.color = "black";
              break;

              case "12.5":
                operacion = valorPrincipal / 6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 6";
                formula.style.color = "black";
              break;

              case "12.6":
                operacion = valorPrincipal / 3;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 3";
                formula.style.color = "black";
              break;

              case "12.8":
                operacion = valorPrincipal / 202900;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 202900";
                formula.style.color = "black";
              break;

              case "12.9":
                operacion = valorPrincipal / 202.9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 202,9";
                formula.style.color = "black";
              break;

              case "12.10":
                operacion = valorPrincipal * 4.929;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 4,929";
                formula.style.color = "black";
              break;

              case "12.11":
                operacion = valorPrincipal / 922.3;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 922,3";
                formula.style.color = "black";
              break;

              case "12.12":
                operacion = valorPrincipal / 230.6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 230,6";
                formula.style.color = "black";
              break;

              case "12.13":
                operacion = valorPrincipal / 115.3;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 115,3";
                formula.style.color = "black";
              break;

              case "12.14":
                operacion = valorPrincipal / 57.646;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 57,646";
                formula.style.color = "black";
              break;

              case "12.15":
                operacion = valorPrincipal / 5.765;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 5,765";
                formula.style.color = "black";
              break;

              case "12.16":
                operacion = valorPrincipal / 3.603;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 3,603";
                formula.style.color = "black";
              break;

              case "12.17":
                operacion = valorPrincipal / 1.201;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1,201";
                formula.style.color = "black";
              break;

              case "12.18":
                operacion = valorPrincipal / 5745;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 5745";
                formula.style.color = "black";
              break;

              case "12.19":
                operacion = valorPrincipal / 3.325;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 3,325";
                formula.style.color = "black";
              break;
            }
            break;
            
            case "12.8":

            switch (valor2) {
              
              case "12.1":
                operacion = valorPrincipal * 264.2;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 264,2";
                formula.style.color = "black";
              break;
              
              case "12.2":
                operacion = valorPrincipal * 1057;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1057";
                formula.style.color = "black";
              break;

              case "12.3":
                operacion = valorPrincipal * 2113;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 2113";
                formula.style.color = "black";
              break;

              case "12.4":
                operacion = valorPrincipal * 4167;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 4167";
                formula.style.color = "black";
              break;

              case "12.5":
                operacion = valorPrincipal * 33810;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 33810";
                formula.style.color = "black";
              break;

              case "12.6":
                operacion = valorPrincipal * 67630;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 67630";
                formula.style.color = "black";
              break;

              case "12.7":
                operacion = valorPrincipal * 202900;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 202900";
                formula.style.color = "black";
              break;

              case "12.9":
                operacion = valorPrincipal * 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 1000";
                formula.style.color = "black";
              break;

              case "12.10":
                operacion = valorPrincipal * 1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 1e+6";
                formula.style.color = "black";
              break;

              case "12.11":
                operacion = valorPrincipal * 220;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 220";
                formula.style.color = "black";
              break;

              case "12.12":
                operacion = valorPrincipal * 879.9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 879,9";
                formula.style.color = "black";
              break;

              case "12.13":
                operacion = valorPrincipal *1760;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1760";
                formula.style.color = "black";
              break;

              case "12.14":
                operacion = valorPrincipal * 3520;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 3520";
                formula.style.color = "black";
              break;

              case "12.15":
                operacion = valorPrincipal * 35200;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 35200";
                formula.style.color = "black";
              break;

              case "12.16":
                operacion = valorPrincipal * 56310;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 56310";
                formula.style.color = "black";
              break;

              case "12.17":
                operacion = valorPrincipal * 168900;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 168900";
                formula.style.color = "black";
              break;

              case "12.18":
                operacion = valorPrincipal * 35.315;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 35,315";
                formula.style.color = "black";
              break;

              case "12.19":
                operacion = valorPrincipal * 61020;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 61020";
                formula.style.color = "black";
              break;
            }
            break;

            case "12.9":

            switch (valor2) {
              
              case "12.1":
                operacion = valorPrincipal / 3.785;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 3,785";
                formula.style.color = "black";
              break;
              
              case "12.2":
                operacion = valorPrincipal * 1.057;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1,057";
                formula.style.color = "black";
              break;

              case "12.3":
                operacion = valorPrincipal * 2.113;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 2,113";
                formula.style.color = "black";
              break;

              case "12.4":
                operacion = valorPrincipal * 4.167;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 4,167";
                formula.style.color = "black";
              break;

              case "12.5":
                operacion = valorPrincipal * 33.814;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 33,814";
                formula.style.color = "black";
              break;

              case "12.6":
                operacion = valorPrincipal * 67.628;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 67,628";
                formula.style.color = "black";
              break;

              case "12.7":
                operacion = valorPrincipal * 202.9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 202,9";
                formula.style.color = "black";
              break;

              case "12.8":
                operacion = valorPrincipal / 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1000";
                formula.style.color = "black";
              break;

              case "12.10":
                operacion = valorPrincipal * 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 1000";
                formula.style.color = "black";
              break;

              case "12.11":
                operacion = valorPrincipal / 4.546;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 4,546";
                formula.style.color = "black";
              break;

              case "12.12":
                operacion = valorPrincipal / 1.136;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1,136";
                formula.style.color = "black";
              break;

              case "12.13":
                operacion = valorPrincipal * 1.76;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1,76";
                formula.style.color = "black";
              break;

              case "12.14":
                operacion = valorPrincipal * 3.52;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 3,52";
                formula.style.color = "black";
              break;

              case "12.15":
                operacion = valorPrincipal * 35.195;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 35,195";
                formula.style.color = "black";
              break;

              case "12.16":
                operacion = valorPrincipal * 56.312;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 56,312";
                formula.style.color = "black";
              break;

              case "12.17":
                operacion = valorPrincipal * 168.9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 168,9";
                formula.style.color = "black";
              break;

              case "12.18":
                operacion = valorPrincipal / 28.317;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 28,317";
                formula.style.color = "black";
              break;

              case "12.19":
                operacion = valorPrincipal * 61.024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 61,024";
                formula.style.color = "black";
              break;

            }
            break;

            case "12.10":

            switch (valor2) {
              
              case "12.1":
                operacion = valorPrincipal / 3785;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 3785";
                formula.style.color = "black";
              break;
              
              case "12.2":
                operacion = valorPrincipal / 946.4;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 946,4";
                formula.style.color = "black";
              break;

              case "12.3":
                operacion = valorPrincipal / 473.2;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 473,2";
                formula.style.color = "black";
              break;

              case "12.4":
                operacion = valorPrincipal / 240;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 240";
                formula.style.color = "black";
              break;

              case "12.5":
                operacion = valorPrincipal / 29.574;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 29,574";
                formula.style.color = "black";
              break;

              case "12.6":
                operacion = valorPrincipal / 14.787;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 14,787";
                formula.style.color = "black";
              break;

              case "12.7":
                operacion = valorPrincipal / 4.929;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 4,929";
                formula.style.color = "black";
              break;

              case "12.8":
                operacion = valorPrincipal / 1e+6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1e+6";
                formula.style.color = "black";
              break;

              case "12.9":
                operacion = valorPrincipal / 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1000";
                formula.style.color = "black";
              break;

              case "12.11":
                operacion = valorPrincipal / 4546;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 4546";
                formula.style.color = "black";
              break;

              case "12.12":
                operacion = valorPrincipal / 1137;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1137";
                formula.style.color = "black";
              break;

              case "12.13":
                operacion = valorPrincipal / 568.3;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 568,3";
                formula.style.color = "black";
              break;

              case "12.14":
                operacion = valorPrincipal / 284.1;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 284,1";
                formula.style.color = "black";
              break;

              case "12.15":
                operacion = valorPrincipal / 28.413;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 28,413";
                formula.style.color = "black";
              break;

              case "12.16":
                operacion = valorPrincipal / 17.758;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 17,758";
                formula.style.color = "black";
              break;

              case "12.17":
                operacion = valorPrincipal / 5.919;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 5,919";
                formula.style.color = "black";
              break;

              case "12.18":
                operacion = valorPrincipal / 28320;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 28320";
                formula.style.color = "black";
              break;

              case "12.19":
                operacion = valorPrincipal / 16.387;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 16,387";
                formula.style.color = "black";
              break;

            }
            break;
 
            case "12.11":

            switch (valor2) {
              
              case "12.1":
                operacion = valorPrincipal * 1.201;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 1,201";
                formula.style.color = "black";
              break;
              
              case "12.2":
                operacion = valorPrincipal * 4.804;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 4,804";
                formula.style.color = "black";
              break;

              case "12.3":
                operacion = valorPrincipal * 9.608;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 9,608";
                formula.style.color = "black";
              break;

              case "12.4":
                operacion = valorPrincipal * 18.942;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 18,942";
                formula.style.color = "black";
              break;

              case "12.5":
                operacion = valorPrincipal * 153.7;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 153,7";
                formula.style.color = "black";
              break;

              case "12.6":
                operacion = valorPrincipal *307.4;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 307,4";
                formula.style.color = "black";
              break;

              case "12.7":
                operacion = valorPrincipal * 922.3;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 922,3";
                formula.style.color = "black";
              break;

              case "12.8":
                operacion = valorPrincipal / 220;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 220";
                formula.style.color = "black";
              break;

              case "12.9":
                operacion = valorPrincipal * 4.546;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 4,546";
                formula.style.color = "black";
              break;

              case "12.10":
                operacion = valorPrincipal * 1000;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 1000";
                formula.style.color = "black";
              break;

              case "12.12":
                operacion = valorPrincipal * 4;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 4";
                formula.style.color = "black";
              break;

              case "12.13":
                operacion = valorPrincipal * 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 8";
                formula.style.color = "black";
              break;

              case "12.14":
                operacion = valorPrincipal * 16;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 16";
                formula.style.color = "black";
              break;

              case "12.15":
                operacion = valorPrincipal * 160;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 160";
                formula.style.color = "black";
              break;

              case "12.16":
                operacion = valorPrincipal * 256;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 256";
                formula.style.color = "black";
              break;

              case "12.17":
                operacion = valorPrincipal * 768;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 768";
                formula.style.color = "black";
              break;

              case "12.18":
                operacion = valorPrincipal * 6.229;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 6,229";
                formula.style.color = "black";
              break;

              case "12.19":
                operacion = valorPrincipal * 277.4;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 277,4";
                formula.style.color = "black";
              break;

            }
            break;

            case "12.12":

            switch (valor2) {
              
              case "12.1":
                operacion = valorPrincipal / 3.331;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 3,331";
                formula.style.color = "black";
              break;
              
              case "12.2":
                operacion = valorPrincipal * 1.201;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 1,201";
                formula.style.color = "black";
              break;

              case "12.3":
                operacion = valorPrincipal * 2.402;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 2,402";
                formula.style.color = "black";
              break;

              case "12.4":
                operacion = valorPrincipal * 4.736;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 4,736";
                formula.style.color = "black";
              break;

              case "12.5":
                operacion = valorPrincipal * 38.43;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 38,43";
                formula.style.color = "black";
              break;

              case "12.6":
                operacion = valorPrincipal * 76.861;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 76,861";
                formula.style.color = "black";
              break;

              case "12.7":
                operacion = valorPrincipal * 230.6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 230,6";
                formula.style.color = "black";
              break;

              case "12.8":
                operacion = valorPrincipal / 879.9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 879,9";
                formula.style.color = "black";
              break;

              case "12.9":
                operacion = valorPrincipal * 1.137;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1,137";
                formula.style.color = "black";
              break;

              case "12.10":
                operacion = valorPrincipal * 1137;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1137";
                formula.style.color = "black";
              break;

              case "12.11":
                operacion = valorPrincipal / 4;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 4";
                formula.style.color = "black";
              break;

              case "12.13":
                operacion = valorPrincipal * 2;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 2";
                formula.style.color = "black";
              break;

              case "12.14":
                operacion = valorPrincipal * 4;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 4";
                formula.style.color = "black";
              break;

              case "12.15":
                operacion = valorPrincipal * 40;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 40";
                formula.style.color = "black";
              break;

              case "12.16":
                operacion = valorPrincipal * 64;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 64";
                formula.style.color = "black";
              break;

              case "12.17":
                operacion = valorPrincipal * 192;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 192";
                formula.style.color = "black";
              break;

              case "12.18":
                operacion = valorPrincipal / 24.915;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 24,915";
                formula.style.color = "black";
              break;

              case "12.19":
                operacion = valorPrincipal * 69.355;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 69,355";
                formula.style.color = "black";
              break;

            }
            break;

            case "12.13":

            switch (valor2) {
              
              case "12.1":
                operacion = valorPrincipal / 6.661;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 6,661";
                formula.style.color = "black";
              break;
              
              case "12.2":
                operacion = valorPrincipal / 1,665;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1,665";
                formula.style.color = "black";
              break;

              case "12.3":
                operacion = valorPrincipal * 1.201;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 1,201";
                formula.style.color = "black";
              break;

              case "12.4":
                operacion = valorPrincipal * 2.368;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 2,368";
                formula.style.color = "black";
              break;

              case "12.5":
                operacion = valorPrincipal * 19.215;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 19,215";
                formula.style.color = "black";
              break;

              case "12.6":
                operacion = valorPrincipal / 38.43;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 38,43";
                formula.style.color = "black";
              break;

              case "12.7":
                operacion = valorPrincipal * 115.3;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 115,3";
                formula.style.color = "black";
              break;

              case "12.8":
                operacion = valorPrincipal / 1760;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1760";
                formula.style.color = "black";
              break;

              case "12.9":
                operacion = valorPrincipal / 1.76;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1,76";
                formula.style.color = "black";
              break;

              case "12.10":
                operacion = valorPrincipal * 568.3;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 568,3";
                formula.style.color = "black";
              break;

              case "12.11":
                operacion = valorPrincipal / 8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 8";
                formula.style.color = "black";
              break;

              case "12.12":
                operacion = valorPrincipal / 2;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 2";
                formula.style.color = "black";
              break;

              case "12.14":
                operacion = valorPrincipal * 2;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 2";
                formula.style.color = "black";
              break;

              case "12.15":
                operacion = valorPrincipal * 20;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 20";
                formula.style.color = "black";
              break;

              case "12.16":
                operacion = valorPrincipal * 32;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 32";
                formula.style.color = "black";
              break;

              case "12.17":
                operacion = valorPrincipal * 96;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 96";
                formula.style.color = "black";
              break;

              case "12.18":
                operacion = valorPrincipal / 49.831;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 49,831";
                formula.style.color = "black";
              break;

              case "12.19":
                operacion = valorPrincipal * 34.677;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 34,677";
                formula.style.color = "black";
              break;
            }
            break;
           
            case "12.14":

            switch (valor2) {
              
              case "12.1":
                operacion = valorPrincipal * 1.184;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1,184";
                formula.style.color = "black";
              break;
              
              case "12.2":
                operacion = valorPrincipal / 3.331;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 3,331";
                formula.style.color = "black";
              break;

              case "12.3":
                operacion = valorPrincipal / 1.665;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1,665";
                formula.style.color = "black";
              break;

              case "12.4":
                operacion = valorPrincipal * 1.184;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1,184";
                formula.style.color = "black";
              break;

              case "12.5":
                operacion = valorPrincipal * 9.608;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 9,608";
                formula.style.color = "black";
              break;

              case "12.6":
                operacion = valorPrincipal * 19.215;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 19,215";
                formula.style.color = "black";
              break;

              case "12.7":
                operacion = valorPrincipal / 57.646;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 57,646";
                formula.style.color = "black";
              break;

              case "12.8":
                operacion = valorPrincipal / 3520;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 3520";
                formula.style.color = "black";
              break;

              case "12.9":
                operacion = valorPrincipal / 3.52;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 3,52";
                formula.style.color = "black";
              break;

              case "12.10":
                operacion = valorPrincipal * 284.1;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 284,1";
                formula.style.color = "black";
              break;

              case "12.11":
                operacion = valorPrincipal / 16;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 16";
                formula.style.color = "black";
              break;

              case "12.12":
                operacion = valorPrincipal / 4;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 4";
                formula.style.color = "black";
              break;

              case "12.13":
                operacion = valorPrincipal / 2;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 2";
                formula.style.color = "black";
              break;

              case "12.15":
                operacion = valorPrincipal * 10;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 10";
                formula.style.color = "black";
              break;

              case "12.16":
                operacion = valorPrincipal * 16;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 16";
                formula.style.color = "black";
              break;

              case "12.17":
                operacion = valorPrincipal * 48;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 48";
                formula.style.color = "black";
              break;

              case "12.18":
                operacion = valorPrincipal / 99.661;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 99,661";
                formula.style.color = "black";
              break;

              case "12.19":
                operacion = valorPrincipal * 17.339;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 17,339";
                formula.style.color = "black";
              break;
            }
            break;
 
            case "12.15":

            switch (valor2) {
              
              case "12.1":
                operacion = valorPrincipal / 133.2;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 133,2";
                formula.style.color = "black";
              break;
              
              case "12.2":
                operacion = valorPrincipal / 33.307;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 33,307";
                formula.style.color = "black";
              break;

              case "12.3":
                operacion = valorPrincipal / 16.654;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 16,654";
                formula.style.color = "black";
              break;

              case "12.4":
                operacion = valorPrincipal / 8.447;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 8,447";
                formula.style.color = "black";
              break;

              case "12.5":
                operacion = valorPrincipal / 1.041;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1,041";
                formula.style.color = "black";
              break;

              case "12.6":
                operacion = valorPrincipal * 1.922;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1,922";
                formula.style.color = "black";
              break;

              case "12.7":
                operacion = valorPrincipal * 5.765;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 5,765";
                formula.style.color = "black";
              break;

              case "12.8":
                operacion = valorPrincipal / 35200;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 35200";
                formula.style.color = "black";
              break;

              case "12.9":
                operacion = valorPrincipal / 35.195;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 35,195";
                formula.style.color = "black";
              break;

              case "12.10":
                operacion = valorPrincipal * 28.413;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 28,413";
                formula.style.color = "black";
              break;

              case "12.11":
                operacion = valorPrincipal / 160;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 160";
                formula.style.color = "black";
              break;

              case "12.12":
                operacion = valorPrincipal / 40;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 40";
                formula.style.color = "black";
              break;

              case "12.13":
                operacion = valorPrincipal * 20;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 20";
                formula.style.color = "black";
              break;

              case "12.14":
                operacion = valorPrincipal * 10;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 10";
                formula.style.color = "black";
              break;

              case "12.16":
                operacion = valorPrincipal * 1.6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 1,6";
                formula.style.color = "black";
              break;

              case "12.17":
                operacion = valorPrincipal / 4.8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 4,8";
                formula.style.color = "black";
              break;

              case "12.18":
                operacion = valorPrincipal / 996.6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 996,6";
                formula.style.color = "black";
              break;

              case "12.19":
                operacion = valorPrincipal * 1.734;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1,734";
                formula.style.color = "black";
              break;

            }
            break;

            case "12.16":

            switch (valor2) {
              
              case "12.1":
                operacion = valorPrincipal / 213.2;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 213,2";
                formula.style.color = "black";
              break;
              
              case "12.2":
                operacion = valorPrincipal / 53.291;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 53,291";
                formula.style.color = "black";
              break;

              case "12.3":
                operacion = valorPrincipal / 26.646;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 26,646";
                formula.style.color = "black";
              break;

              case "12.4":
                operacion = valorPrincipal / 13.515;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 13,515";
                formula.style.color = "black";
              break;

              case "12.5":
                operacion = valorPrincipal / 1.665;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1,665";
                formula.style.color = "black";
              break;

              case "12.6":
                operacion = valorPrincipal * 1.201;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 1,201";
                formula.style.color = "black";
              break;

              case "12.7":
                operacion = valorPrincipal * 3.603;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 3,603";
                formula.style.color = "black";
              break;

              case "12.8":
                operacion = valorPrincipal / 56310;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 56310";
                formula.style.color = "black";
              break;

              case "12.9":
                operacion = valorPrincipal / 56.315;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 56,312";
                formula.style.color = "black";
              break;

              case "12.10":
                operacion = valorPrincipal * 17.758;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 17,758";
                formula.style.color = "black";
              break;

              case "12.11":
                operacion = valorPrincipal / 256;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 256";
                formula.style.color = "black";
              break;

              case "12.12":
                operacion = valorPrincipal / 64;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 64";
                formula.style.color = "black";
              break;

              case "12.13":
                operacion = valorPrincipal / 32;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 32";
                formula.style.color = "black";
              break;

              case "12.14":
                operacion = valorPrincipal / 16;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 16";
                formula.style.color = "black";
              break;

              case "12.15":
                operacion = valorPrincipal / 1.6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1.6";
                formula.style.color = "black";
              break;

              case "12.17":
                operacion = valorPrincipal * 3;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 3";
                formula.style.color = "black";
              break;

              case "12.18":
                operacion = valorPrincipal / 1595;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1595";
                formula.style.color = "black";
              break;

              case "12.19":
                operacion = valorPrincipal * 1.084;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1,084";
                formula.style.color = "black";
              break;

            }
            break;

            case "12.17":

            switch (valor2) {
              
              case "12.1":
                operacion = valorPrincipal / 639.5;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 639,5";
                formula.style.color = "black";
              break;
              
              case "12.2":
                operacion = valorPrincipal / 159.9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 159,9";
                formula.style.color = "black";
              break;

              case "12.3":
                operacion = valorPrincipal / 79.937;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 79,937";
                formula.style.color = "black";
              break;

              case "12.4":
                operacion = valorPrincipal / 40.545;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 40,545";
                formula.style.color = "black";
              break;

              case "12.5":
                operacion = valorPrincipal / 4.996;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 4,996";
                formula.style.color = "black";
              break;

              case "12.6":
                operacion = valorPrincipal / 2.498;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 2,498";
                formula.style.color = "black";
              break;

              case "12.7":
                operacion = valorPrincipal * 1.201;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 1,201";
                formula.style.color = "black";
              break;

              case "12.8":
                operacion = valorPrincipal / 168900;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 168900";
                formula.style.color = "black";
              break;

              case "12.9":
                operacion = valorPrincipal / 168.9;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 168,9";
                formula.style.color = "black";
              break;

              case "12.10":
                operacion = valorPrincipal / 5.919;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 5,919";
                formula.style.color = "black";
              break;

              case "12.11":
                operacion = valorPrincipal / 768;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 768";
                formula.style.color = "black";
              break;

              case "12.12":
                operacion = valorPrincipal / 192;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 192";
                formula.style.color = "black";
              break;

              case "12.13":
                operacion = valorPrincipal / 96;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 96";
                formula.style.color = "black";
              break;

              case "12.14":
                operacion = valorPrincipal / 48;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 48";
                formula.style.color = "black";
              break;

              case "12.15":
                operacion = valorPrincipal / 4.8;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 4,8";
                formula.style.color = "black";
              break;

              case "12.16":
                operacion = valorPrincipal / 3;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 3";
                formula.style.color = "black";
              break;

              case "12.18":
                operacion = valorPrincipal / 4784;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 4784";
                formula.style.color = "black";
              break;

              case "12.19":
                operacion = valorPrincipal / 2.768;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 2,768";
                formula.style.color = "black";
              break;

            }
            break;

            case "12.18":

            switch (valor2) {
              
              case "12.1":
                operacion = valorPrincipal * 7.481;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 7,481";
                formula.style.color = "black";
              break;
              
              case "12.2":
                operacion = valorPrincipal * 29.922;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 29,922";
                formula.style.color = "black";
              break;

              case "12.3":
                operacion = valorPrincipal * 59.844;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 59,844";
                formula.style.color = "black";
              break;

              case "12.4":
                operacion = valorPrincipal * 118;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 118";
                formula.style.color = "black";
              break;

              case "12.5":
                operacion = valorPrincipal * 957.5;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 957,5";
                formula.style.color = "black";
              break;

              case "12.6":
                operacion = valorPrincipal * 1915;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1915";
                formula.style.color = "black";
              break;

              case "12.7":
                operacion = valorPrincipal * 5745;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 5745";
                formula.style.color = "black";
              break;

              case "12.8":
                operacion = valorPrincipal / 35.315;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 35,315";
                formula.style.color = "black";
              break;

              case "12.9":
                operacion = valorPrincipal * 28.317;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 28,317";
                formula.style.color = "black";
              break;

              case "12.10":
                operacion = valorPrincipal * 28320;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 28320";
                formula.style.color = "black";
              break;

              case "12.11":
                operacion = valorPrincipal * 6.229;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 6,229";
                formula.style.color = "black";
              break;

              case "12.12":
                operacion = valorPrincipal * 24.915;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 24,915";
                formula.style.color = "black";
              break;

              case "12.13":
                operacion = valorPrincipal * 49.831;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 49,831";
                formula.style.color = "black";
              break;

              case "12.14":
                operacion = valorPrincipal * 99.661;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 99,661";
                formula.style.color = "black";
              break;

              case "12.15":
                operacion = valorPrincipal * 996.6;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 996,6";
                formula.style.color = "black";
              break;

              case "12.16":
                operacion = valorPrincipal * 1595;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1595";
                formula.style.color = "black";
              break;

              case "12.17":
                operacion = valorPrincipal * 4784;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 4784";
                formula.style.color = "black";
              break;

              case "12.19":
                operacion = valorPrincipal * 1728;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 1728";
                formula.style.color = "black";
              break;

            }
            break;

            case "12.19":

            switch (valor2) {
              
              case "12.1":
                operacion = valorPrincipal / 231;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 231";
                formula.style.color = "black";
              break;
              
              case "12.2":
                operacion = valorPrincipal / 57.75;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 57,75";
                formula.style.color = "black";
              break;

              case "12.3":
                operacion = valorPrincipal / 28.875;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 28,875";
                formula.style.color = "black";
              break;

              case "12.4":
                operacion = valorPrincipal / 14.646;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 14,646";
                formula.style.color = "black";
              break;

              case "12.5":
                operacion = valorPrincipal / 1.805;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1,805";
                formula.style.color = "black";
              break;

              case "12.6":
                operacion = valorPrincipal * 1.108 ;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 1,108";
                formula.style.color = "black";
              break;

              case "12.7":
                operacion = valorPrincipal * 3.325;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 3,325";
                formula.style.color = "black";
              break;

              case "12.8":
                operacion = valorPrincipal / 61020;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 61020";
                formula.style.color = "black";
              break;

              case "12.9":
                operacion = valorPrincipal / 61.024;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 61,024";
                formula.style.color = "black";
              break;

              case "12.10":
                operacion = valorPrincipal * 16.387;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplicar el valor de volumen por 16,387";
                formula.style.color = "black";
              break;

              case "12.11":
                operacion = valorPrincipal / 277.4;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 277,4";
                formula.style.color = "black";
              break;

              case "12.12":
                operacion = valorPrincipal * 69.355;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 69,355";
                formula.style.color = "black";
              break;

              case "12.13":
                operacion = valorPrincipal / 34.677;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 34,677";
                formula.style.color = "black";
              break;

              case "12.14":
                operacion = valorPrincipal / 17.339;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 17,339";
                formula.style.color = "black";
              break;

              case "12.15":
                operacion = valorPrincipal / 1.734;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1,734";
                formula.style.color = "black";
              break;

              case "12.16":
                operacion = valorPrincipal / 1.084;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1,084";
                formula.style.color = "black";
              break;

              case "12.17":
                operacion = valorPrincipal * 2.768;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Multiplica el valor de volumen por 2,768";
                formula.style.color = "black";
              break;

              case "12.18":
                operacion = valorPrincipal / 1728;
                document.getElementById('valorFinal').value = operacion;
                formula.textContent = "Divide el valor de volumen entre 1728";
                formula.style.color = "black";
              break;
            }
            break;
          }
        }
      }

      inputIngreso.addEventListener('input', function(){
        FormulaVolumen(select1.value, select2.value);
      })

      select1.addEventListener('change', function(){
        FormulaVolumen(select1.value, select2.value);
      })

      select2.addEventListener('change', function(){
        FormulaVolumen(select1.value, select2.value);
      })
    break;

    case 'valor13': 
      traerValoresAndTexto(datos.valor13.valor, datos.valor13.texto);

      function FormulaAngulo(valor1, valor2) {
        let valorPrincipal = inputIngreso.value;
        let operacion;

        if (valor1 == valor2 || valor1 == "13.0" && valor2 || valor1 && valor2 == "13.0"){
          NoValido();
        } else {

          switch (valor1) {

            case "13.1":

              switch (valor2) {
                
                case "13.2":
                  operacion = valorPrincipal * 200/180;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+"° × 200/180 = "+operacion+" g";
                  formula.style.color = "black";
                break;
                
                case "13.3":
                  operacion = valorPrincipal * 1000 * 3.1416 /180;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+"° × 1000π/180 ="+operacion+" mrad";
                  formula.style.color = "black";
                break;

                case "13.4":
                  operacion = valorPrincipal * 60;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Ángulo plano por 60";
                  formula.style.color = "black";
                break;

                case "13.5":
                  operacion = valorPrincipal * 3.1416 / 180;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+"° × π/180 = "+operacion+"rad";
                  formula.style.color = "black";
                break;

                case "13.6":
                  operacion = valorPrincipal * 3600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Ángulo plano por 3600";
                  formula.style.color = "black";
                break;
              }
            break

            case "13.2":

              switch (valor2) {
                
                case "13.1":
                  operacion = valorPrincipal * 180 / 200;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+"g × 180/200 = "+operacion+"°";
                  formula.style.color = "black";
                break;
                
                case "13.3":
                  operacion = valorPrincipal * 1000 * 3.1416 / 200;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+" g × 1000π/200 = "+operacion+" mrad";
                  formula.style.color = "black";
                break;

                case "13.4":
                  operacion = valorPrincipal * 54;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Ángulo plano por 54";
                  formula.style.color = "black";
                break;

                case "13.5":
                  operacion = valorPrincipal * 3.1416 / 200;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+" g × π/200 = "+operacion+" rad";
                  formula.style.color = "black";
                break;

                case "13.6":
                  operacion = valorPrincipal * 3240;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Ángulo plano por 3240";
                  formula.style.color = "black";
                break;

              }
            break;

            case "13.3":

              switch (valor2) {
                
                case "13.1":
                  operacion = valorPrincipal * 180 / (1000 * 3.1416);
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+" mrad × 180/1000π = "+operacion+"°";
                  formula.style.color = "black";
                break;
                
                case "13.2":
                  operacion = valorPrincipal * 200 / (1000 * 3.1416);
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+" mrad × 200/1000π = "+operacion+" g";
                  formula.style.color = "black";
                break;

                case "13.4":
                  operacion = valorPrincipal * (60 * 180) / (1000 * 3.1416);
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+" mrad × (60 × 180)/1000π = "+operacion+"'";
                  formula.style.color = "black";
                break;

                case "13.5":
                  operacion = valorPrincipal / 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Ángulo plano entre 1000";
                  formula.style.color = "black";
                break;

                case "13.6":
                  operacion = valorPrincipal * (3600 * 180) / (1000 * 3.1416);
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+" mrad × (3600 × 180)/1000π = "+operacion+'"';
                  formula.style.color = "black";
                break;

              }
            break;

            case "13.4":

              switch (valor2) {
                
                case "13.1":
                  operacion = valorPrincipal / 60;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Ángulo plano entre 60";
                  formula.style.color = "black";
                break;
                
                case "13.2":
                  operacion = valorPrincipal / 54;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Ángulo plano entre 54";
                  formula.style.color = "black";
                break;

                case "13.3":
                  operacion = valorPrincipal * (1000 * 3.1416) / (60 * 180) ;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+"' × 1000π/(60 × 180) = "+operacion+" mrad";
                  formula.style.color = "black";
                break;

                case "13.5":
                  operacion = valorPrincipal * 3.1416 / (60 * 180);
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+"' × π/(60 × 180) = "+operacion+" rad";
                  formula.style.color = "black";
                break;

                case "13.6":
                  operacion = valorPrincipal * 60;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Ángulo plano por 60";
                  formula.style.color = "black";
                break;

              }
            break;

            case "13.5":

              switch (valor2) {
                
                case "13.1":
                  operacion = valorPrincipal * (180 * 3.1416);
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+" rad × 180/π = "+operacion+"°";
                  formula.style.color = "black";
                break;
                
                case "13.2":
                  operacion = valorPrincipal * (200 * 3.1416);
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+" rad × 200/π = "+operacion+"g";
                  formula.style.color = "black";
                break;

                case "13.3":
                  operacion = valorPrincipal * 1000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Ángulo plano por 1000";
                  formula.style.color = "black";
                break;

                case "13.4":
                  operacion = valorPrincipal * (60 * 180) / 3.1416;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+" rad × (60 × 180)/π = "+operacion+"'";
                  formula.style.color = "black";
                break;

                case "13.6":
                  operacion = valorPrincipal * (3600 * 180) / 3.1416;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+" rad × (3600 × 180)/π = "+operacion+'"';
                  formula.style.color = "black";
                break;

              }
              break;

            case "13.6":

              switch (valor2) {
                
                case "13.1":
                  operacion = valorPrincipal / 3600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Ángulo plano entre 3600";
                  formula.style.color = "black";
                break;
                
                case "13.2":
                  operacion = valorPrincipal / 3240;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Ángulo plano entre 3240";
                  formula.style.color = "black";
                break;

                case "13.3":
                  operacion = valorPrincipal / (1000 * 3.1416) / (180 * 3600);
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+'" × 1000π/(180 × 3600) = '+operacion+' mrad';
                  formula.style.color = "black";
                break;

                case "13.4":
                  operacion = valorPrincipal / 60;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Ángulo plano entre 60";
                  formula.style.color = "black";
                break;

                case "13.5":
                  operacion = valorPrincipal * 3.1416 / (180 * 3600) ;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = valorPrincipal+'" × π/(180 × 3600) = '+operacion+' rad';
                  formula.style.color = "black";
                break;
              }
              break;


              switch (valor2) {
                
                case "14.1":
                  operacion = valorPrincipal / 247.1;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 247,1";
                  formula.style.color = "black";
                break;
                
                case "14.2":
                  operacion = valorPrincipal * 4047;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de Área por 4047";
                  formula.style.color = "black";
                break;

                case "14.3":
                  operacion = valorPrincipal / 640;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 640";
                  formula.style.color = "black";
                break;

                case "14.4":
                  operacion = valorPrincipal * 4840;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 4840";
                  formula.style.color = "black";
                break;

                case "14.5":
                  operacion = valorPrincipal * 43560;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 43560";
                  formula.style.color = "black";
                break;

                case "14.6":
                  operacion = valorPrincipal * 6.273e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de Área por 6,273e+6 o 6.273.000";
                  formula.style.color = "black";
                break;

                case "14.7":
                  operacion = valorPrincipal / 2.471;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 2,471";
                  formula.style.color = "black";
                break;

              }
              break;
          }

        }
      }

      inputIngreso.addEventListener('input', function(){
        FormulaAngulo(select1.value, select2.value);
      })

      select1.addEventListener('change', function(){
        FormulaAngulo(select1.value, select2.value);
      })
      
      select2.addEventListener('change', function(){
        FormulaAngulo(select1.value, select2.value);
      })

    break;

    case 'valor14': 

      traerValoresAndTexto(datos.valor14.valor, datos.valor14.texto);

      function FormulaArea(valor1, valor2) {
        let valorPrincipal = inputIngreso.value;
        let operacion;

        if (valor1 == valor2 || valor1 == "14.0" && valor2 || valor1 && valor2 == "14.0"){
          NoValido();
        } else {

          switch (valor1) {

            case "14.1":

              switch (valor2) {
                
                case "14.2":
                  operacion = valorPrincipal * 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 1e+6 o 1.000.000";
                  formula.style.color = "black";
                break;
                
                case "14.3":
                  operacion = valorPrincipal / 2.59;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 2,59";
                  formula.style.color = "black";
                break;

                case "14.4":
                  operacion = valorPrincipal * 1.196e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 1,196e+6 o 1.196.000";
                  formula.style.color = "black";
                break;

                case "14.5":
                  operacion = valorPrincipal * 1.076e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de Área por 1,076e+7 o 17.760.000";
                  formula.style.color = "black";
                break;

                case "14.6":
                  operacion = valorPrincipal * 1.55e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 1,55e+9 o 1.550.000.000";
                  formula.style.color = "black";
                break;

                case "14.7":
                  operacion = valorPrincipal * 100;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 100";
                  formula.style.color = "black";
                break;

                case "14.8":
                  operacion = valorPrincipal * 247.1;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de Área por 247,1";
                  formula.style.color = "black";
                break;

              }
            break

            case "14.2":

              switch (valor2) {
                
                case "14.1":
                  operacion = valorPrincipal / 1e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 1e+6 o 1.000.000";
                  formula.style.color = "black";
                break;
                
                case "14.3":
                  operacion = valorPrincipal / 2.59e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 2,59e+6 o 2.590.000";
                  formula.style.color = "black";
                break;

                case "14.4":
                  operacion = valorPrincipal * 1.196;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 1,196";
                  formula.style.color = "black";
                break;

                case "14.5":
                  operacion = valorPrincipal * 10.764;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 10,764";
                  formula.style.color = "black";
                break;

                case "14.6":
                  operacion = valorPrincipal * 1550;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de Área por 1550";
                  formula.style.color = "black";
                break;

                case "14.7":
                  operacion = valorPrincipal / 10000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 10000";
                  formula.style.color = "black";
                break;

                case "14.8":
                  operacion = valorPrincipal / 4047;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 4047";
                  formula.style.color = "black";
                break;

              }
            break;

            case "14.3":

              switch (valor2) {
                
                case "14.1":
                  operacion = valorPrincipal * 2.59;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 2,59";
                  formula.style.color = "black";
                break;
                
                case "14.2":
                  operacion = valorPrincipal * 2,59e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 2,59e+6 o 2.590.000";
                  formula.style.color = "black";
                break;

                case "14.4":
                  operacion = valorPrincipal * 3.098e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de Área por 3,098e+6 o 3.098.000";
                  formula.style.color = "black";
                break;

                case "14.5":
                  operacion = valorPrincipal * 2.788e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de Área por 2,788e+7 o 27.880.000";
                  formula.style.color = "black";
                break;

                case "14.6":
                  operacion = valorPrincipal * 4.014e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de Área por 4,014e+9 o 4.014.000.000";
                  formula.style.color = "black";
                break;

                case "14.7":
                  operacion = valorPrincipal * 259;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de Área por 259";
                  formula.style.color = "black";
                break;

                case "14.8":
                  operacion = valorPrincipal * 640;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 640";
                  formula.style.color = "black";
                break;

              }
            break;

            case "14.4":

              switch (valor2) {
                
                case "14.1":
                  operacion = valorPrincipal / 1.196e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 1,196e+6 o 1.196.000";
                  formula.style.color = "black";
                break;
                
                case "14.2":
                  operacion = valorPrincipal / 1.196;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 1,196";
                  formula.style.color = "black";
                break;

                case "14.3":
                  operacion = valorPrincipal / 3.098e+6 ;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 3,098e+6 o 3.098.000";
                  formula.style.color = "black";
                break;

                case "14.5":
                  operacion = valorPrincipal * 9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 9";
                  formula.style.color = "black";
                break;

                case "14.6":
                  operacion = valorPrincipal * 1296;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 1296";
                  formula.style.color = "black";
                break;

                case "14.7":
                  operacion = valorPrincipal / 11960;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 11960";
                  formula.style.color = "black";
                break;

                case "14.8":
                  operacion = valorPrincipal / 4840;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 4840";
                  formula.style.color = "black";
                break;

              }
            break;

            case "14.5":

              switch (valor2) {
                
                case "14.1":
                  operacion = valorPrincipal / 1.076e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 1,076e+7 o 10.760.000";
                  formula.style.color = "black";
                break;
                
                case "14.2":
                  operacion = valorPrincipal / 10.764;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 10,764";
                  formula.style.color = "black";
                break;

                case "14.3":
                  operacion = valorPrincipal / 2.788e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 2,788e+7 o 27.880.000";
                  formula.style.color = "black";
                break;

                case "14.4":
                  operacion = valorPrincipal / 9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 9";
                  formula.style.color = "black";
                break;

                case "14.6":
                  operacion = valorPrincipal * 144;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 144";
                  formula.style.color = "black";
                break;

                case "14.7":
                  operacion = valorPrincipal / 107600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 107600";
                  formula.style.color = "black";
                break;

                case "14.8":
                  operacion = valorPrincipal / 43560;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 43560";
                  formula.style.color = "black";
                break;

              }
              break;

            case "14.6":

              switch (valor2) {
                
                case "14.1":
                  operacion = valorPrincipal / 1.55e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 1,55e+9 o 1.550.000.000";
                  formula.style.color = "black";
                break;
                
                case "14.2":
                  operacion = valorPrincipal / 1550;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 1550";
                  formula.style.color = "black";
                break;

                case "14.3":
                  operacion = valorPrincipal / 4.014e+9;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 4,014e+9 o 4.014.000.000";
                  formula.style.color = "black";
                break;

                case "14.4":
                  operacion = valorPrincipal / 1296;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 1296";
                  formula.style.color = "black";
                break;

                case "14.5":
                  operacion = valorPrincipal / 144;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 144";
                  formula.style.color = "black";
                break;

                case "14.7":
                  operacion = valorPrincipal / 1.55e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 1,55e+7 o 15.500.000";
                  formula.style.color = "black";
                break;

                case "14.8":
                  operacion = valorPrincipal / 6.273e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 6,273e+6 o 6.273.000";
                  formula.style.color = "black";
                break;

              }
              break;

            case "14.7":

              switch (valor2) {
                
                case "14.1":
                  operacion = valorPrincipal / 100;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 100";
                  formula.style.color = "black";
                break;
                
                case "14.2":
                  operacion = valorPrincipal * 10000;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 10000";
                  formula.style.color = "black";
                break;

                case "14.3":
                  operacion = valorPrincipal / 259;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 259";
                  formula.style.color = "black";
                break;

                case "14.4":
                  operacion = valorPrincipal * 11960;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de Área por 11960";
                  formula.style.color = "black";
                break;

                case "14.5":
                  operacion = valorPrincipal * 107600;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de Área por 107600";
                  formula.style.color = "black";
                break;

                case "14.6":
                  operacion = valorPrincipal * 1.55e+7;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 1,55e+7 o 15.500.000";
                  formula.style.color = "black";
                break;

                case "14.8":
                  operacion = valorPrincipal * 2.471;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 2,471";
                  formula.style.color = "black";
                break;

              }
              break;
              
            case "14.8":

              switch (valor2) {
                
                case "14.1":
                  operacion = valorPrincipal / 247.1;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 247,1";
                  formula.style.color = "black";
                break;
                
                case "14.2":
                  operacion = valorPrincipal * 4047;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de Área por 4047";
                  formula.style.color = "black";
                break;

                case "14.3":
                  operacion = valorPrincipal / 640;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 640";
                  formula.style.color = "black";
                break;

                case "14.4":
                  operacion = valorPrincipal * 4840;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 4840";
                  formula.style.color = "black";
                break;

                case "14.5":
                  operacion = valorPrincipal * 43560;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplicar el valor de Área por 43560";
                  formula.style.color = "black";
                break;

                case "14.6":
                  operacion = valorPrincipal * 6.273e+6;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Multiplica el valor de Área por 6,273e+6 o 6.273.000";
                  formula.style.color = "black";
                break;

                case "14.7":
                  operacion = valorPrincipal / 2.471;
                  document.getElementById('valorFinal').value = operacion;
                  formula.textContent = "Divide el valor de Área entre 2,471";
                  formula.style.color = "black";
                break;

              }
              break;
          }

        }
      }

      inputIngreso.addEventListener('input', function(){
        FormulaArea(select1.value, select2.value);
      })

      select1.addEventListener('change', function(){
        FormulaArea(select1.value, select2.value);
      })
      
      select2.addEventListener('change', function(){
        FormulaArea(select1.value, select2.value);
      })

    break;
  }
})
