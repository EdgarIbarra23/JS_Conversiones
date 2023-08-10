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
      valor : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      texto : ['Julio', 'KiloJulio', 'Cáloria-Gramo', 'KiloCaloría', 'Vatio-Hora', 'Kilovatio-Hora', 'Electronvoltio', 'Unidad Términca Británica', 'Termia EstadoUnidense', 'Pie-Libra-Fuerza']
    },

    valor3 : {
      valor : ['3.0','3.1', '3.2', '3.3', '3.4'],
      texto : [optionPredeterminados, 'Hercio', 'KiloHercio', 'MegaHercio', 'GigaHercio']
    },

    valor4 : {
      valor : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      texto : ['Kilómetro', 'Metro', 'Centímetro', 'Milímetro', 'Micrómetro', 'Nanómetro', 'Milla', 'Yarda', 'Pie', 'Pulgada', 'Milla Náutica']
    },

    valor5 : {
      valor : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      texto : ['Tonelada', 'Kilogramo', 'Gramo', 'Miligramo', 'Microgramo', 'Tonelada Larga', 'Tonelada Corta', 'Stone', 'Libra', 'Onza']
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
      valor : ['1','2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12', '13'],
      texto : ['Bit por Segundo', 'Kilobit por Segundo', 'Kilobyte por Segundo', 'Kibibit por Segundo', 'Megabit por Segundo', 'Megabyte por Segundo', 'Mebibir por Segundo', 'Gigabit por Segundo', 'Gigabyte por Segundo', 'Gibibit por Segundo', 'Terabit por Segundo', 'Terabyte por Segundo', 'Tebibit por Segundo']
    },

    valor9 : {
      valor : ['9.0','9.1', '9.2', '9.3'],
      texto : [optionPredeterminados, 'Grado Celsius', 'Grado Fahrenheit', 'Kelvin']
    }, 

    valor10: {
      valor : ['1','2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12'],
      texto : ['Nanosegundo', 'Microsegundo', 'Milisegundo', 'Segundo', 'Minuto', 'Hora', 'Día', 'Semana', 'Mes', 'Año', 'Década', 'Síglo']
    },

    valor11 : {
      valor : ['11.0', '11.1', '11.2', '11.3', '11.4', '11.5'],
      texto : [optionPredeterminados, 'Milla por Hora', 'Pie por Segundo', 'Metro por Segundo', 'Kilómetro por Hora', 'Nudo']
    },

    valor12 : {
      valor : ['1','2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12', '13', '14', '15', '16', '17', '18', '19'],
      texto : ['Galón Estadounidense', 'Cuarto Estadounidense', 'Pinta Estadounidense', 'Taza Americana Oficial', 'Onza Líquida Estadounidense', 'Cucharada Estadounidense', 'Cucharadita Estadounidense', 'Metro Cúbico', 'Litro', 'Mililitro', 'Galón Imperial', 'Cuarto Imperial', 'Pinta Imperial', 'Taza Imperial', 'Onza Liquida Imperial', 'Cucharada Imperial', 'Cucharadita Imperial', 'Pie Cúbico', 'Pulgada Cúbica']
    },

    valor13 : {
      valor : ['1','2', '3', '4', '5', '6'],
      texto : ['Grado', 'Grado Centesimal', 'Milirradián', 'Minuto de Arco', 'Radián', 'Segundo de Arco']
    },

    valor14 : {
      valor : ['1','2', '3', '4', '5', '6', '7', '8'],
      texto : ['Kilómetro Cuadrado', 'Metro Cuadrado', 'Milla Cuadrada', 'Yarda Cuadrada', 'Pie Cuadrado', 'Pulgada Cuadrada', 'Hectaria', 'Acre']
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

  switch (miSelect.value) {
    
    case 'valor1':
      traerValoresAndTexto(datos.valor1.valor, datos.valor1.texto);
      
      function FormulaCombustible(valor1, valor2) {
        let valorPrincipal = parseFloat(inputIngreso.value);
        let operacion;

        if (valor1 == valor2 || valor1 == "1.0" && valor2 || valor1 && valor2 == "1.0"){
          formula.textContent = "Seleccione las unidades para realizar la conversión.";
          formula.style.color = "RED";
          document.getElementById('valorFinal').value = '';
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
      select2.value = Diferenciar(select1.value, select2.value);
    break;

    case 'valor3': 
      traerValoresAndTexto(datos.valor3.valor, datos.valor3.texto);

      function FormulaFrecuencia(valor1, valor2){
        let valorPrincipal = inputIngreso.value;
        let operacion; 

        if (valor1 == valor2 || valor1 == "3.0" && valor2 || valor1 && valor2 == "3.0"){
          formula.textContent = "Seleccione las unidades para realizar la conversión.";
          formula.style.color = "RED";
          document.getElementById('valorFinal').value = '';
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
      select2.value = Diferenciar(select1.value, select2.value);
    break;

    case 'valor5': 
      traerValoresAndTexto(datos.valor5.valor, datos.valor5.texto);
      select2.value = Diferenciar(select1.value, select2.value);
    break;

    case 'valor6': 
      traerValoresAndTexto(datos.valor6.valor, datos.valor6.texto);

      function FormulaPresion(valor1, valor2){
        let valorPrincipal = inputIngreso.value;
        let operacion;

        if (valor1 == valor2 || valor1 == "6.0" && valor2 || valor1 && valor2 == "6.0"){
          formula.textContent = "Seleccione las unidades para realizar la conversión.";
          formula.style.color = "RED";
          document.getElementById('valorFinal').value = '';
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
          formula.textContent = "Seleccione las unidades para realizar la conversión.";
          formula.style.color = "RED";
          document.getElementById('valorFinal').value = '';
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
                  operacion = valorPrincipal / 1.116e+15;
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
      select2.value = Diferenciar(select1.value, select2.value);
    break;
    
    case 'valor9':
      traerValoresAndTexto(datos.valor9.valor, datos.valor9.texto);

      function FormulaTemperatura(valor1, valor2,) {
        let valorPrincipal = parseFloat(inputIngreso.value);
        let operacion;

        if (valor1 == valor2 || valor1 == "9.0" && valor2 || valor1 && valor2 == "9.0"){
          formula.textContent = "Seleccione las unidades para realizar la conversión.";
          formula.style.color = "RED";
          document.getElementById('valorFinal').value = '';
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
      select2.value = Diferenciar(select1.value, select2.value);
    break;

    case 'valor11': 
      traerValoresAndTexto(datos.valor11.valor, datos.valor11.texto);
      
      function FormulaVelocidad(valor1, valor2){
        let valorPrincipal = inputIngreso.value;
        let operacion;

        if (valor1 == valor2 || valor1 == "11.0" && valor2 || valor1 && valor2 == "11.0"){
          formula.textContent = "Seleccione las unidades para realizar la conversión.";
          formula.style.color = "RED";
          document.getElementById('valorFinal').value = '';
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
      select2.value = Diferenciar(select1.value, select2.value);
    break;

    case 'valor13': 
      traerValoresAndTexto(datos.valor13.valor, datos.valor13.texto);
      select2.value = Diferenciar(select1.value, select2.value);
    break;

    case 'valor14': 
      traerValoresAndTexto(datos.valor14.valor, datos.valor14.texto);
      select2.value = Diferenciar(select1.value, select2.value);
    break;
  }
})
