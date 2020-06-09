ej.QueryDesigner.Locale['es-ES'] = {
    storeParameter: {
        title: 'Parámetros',
        ok: 'DE ACUERDO',
        cancel: 'Cancelar',
        parameterLable: 'Parámetro',
        nullLable: 'Nulo',
        valueLable: 'Valor',
        dataTypeLable: 'Tipo de datos',
        closeToolTip: 'Cerca'
    },
    parameter: {
        title: 'Parámetros',
        ok: 'DE ACUERDO',
        cancel: 'Cancelar',
        parameterLable: 'Parámetro',
        nullLable: 'Nulo',
        valueLable: 'Valor',
        dataTypeLable: 'Tipo de datos',
        auto: 'Auto',
        text: 'texto',
        closeToolTip: 'Cerca'
    },
    filter: {
        title: 'Filtros de consulta',
        descriptionLable: 'Lista de filtros de tabla',
        add: 'AÑADIR',
        save: 'DE ACUERDO',
        cancel: 'Cancelar',
        nullLable: 'Nulo',
        trueLable: 'Cierto',
        falseLable: 'Falso',
        parameterTooltip: 'Incluir como parámetro',
        closeToolTip: 'Cerca',
        intOperatorType: {
            equals: 'Igual',
            doesNotEqual: 'No es igual',
            greaterThan: 'Mas grande que',
            greaterThanOrEqual: 'Pero grande que',
            lessThan: 'Menos que',
            lessThanOrEqual: 'Menos que o igual a',
            between: 'Entre',
            notBetween: 'No entre'
        },
        stringOpertorType: {
            equals: 'Igual',
            startsWith: 'Comienza con',
            endWith: 'Termina con',
            contains: 'Contiene',
            notContains: 'No contiene'
        },
        errorMessage: {
            dateValidation: 'El valor es un formato de fecha no válido.',
            commonContent: 'El filtro en ',
            booleanValidation: ' no tiene ningún valor para filtrar. Proporcione los valores para el filtro.',
            stringValidation: ' no tiene los valores adecuados para filtrar. '
        }
    },
    previewArea: {
        dataPreview: 'Vista previa de datos',
        noRecords: 'No hay registros que mostrar',
        generatePreview: 'Generar vista previa',
        executeRecords: 'Ejecutar para previsualizar registros',
        record: 'Grabar',
        records: 'Archivos',
        retrieved: 'Obtenido',
        loadRecord: 'Carga más',
        update: 'Actualizar',
        previewContainer: 'Contenedor de vista previa de datos'
    },
    schemaArea: {
        search: 'Buscar',
        matchesFound: 'No se encontraron coincidencias',
        rename: 'Rebautizar',
        searchInfo: 'Recupera la información coincidente del esquema recuperado actualmente',
        aggregation: 'Agregación',
        dialogHeader: 'Conjunto de datos',
        alertMessage: {
            datasourceAlert: 'Seleccione una fuente de datos para configurar el conjunto de datos de informe',
            removeTable: 'Las tablas asociadas a continuación se eliminarán con esto',
            duplicateName: 'El nombre de columna especificado ya existe',
            duplicateDatasetName: 'El nombre especificado ya existe en la lista de conjuntos de datos',
            datasetSpecialCharacter: 'El nombre no debe contener espacios ni caracteres especiales',
            specialCharacter: 'El nombre de la columna no debe contener caracteres especiales.',
            switcherAlert: 'El cambio al dise�ador visual descartar� los cambios manuales realizados en la consulta. �Quieres usar el dise�ador visual de todos modos? '
        },
        errorMessage: {
            specifyName: 'Especifique el nombre de la columna',
            specifyDatasetName: 'Especifique el nombre del conjunto de datos',
            previewFailed: 'El conjunto de datos no pudo obtener una vista previa de la tabla seleccionada',
            specifyQuery: 'Especifique la consulta del conjunto de datos.',
            selectTable: 'Seleccione la tabla para guardar el conjunto de datos',
            queryFailed: 'El conjunto de datos no pudo guardar la consulta de la tabla seleccionada',
            tableProcedure: 'El conjunto de datos no pudo recuperar el procedimiento de tabla seleccionado',
            deleteTableFailure: 'Error al eliminar la tabla seleccionada',
            joinTableFailure: 'Error al unir las tablas seleccionadas',
            confirmPermission: 'Se recuperaron grandes registros, la renderización llevará tiempo. ¿Quieres cargar de todos modos? ?'
        },
        dragSurface: 'Arrastre Contenedor de superficie',
        searchSchema: 'Esquema de búsqueda',
        fieldTable: 'Tabla de campo',
        closeFieldTable: 'Cerrar tabla',
        fieldSelection: 'Selector de campo',
        selectAndDeselectAll: 'Seleccionar y anular la selección de todas las columnas'
    },
    toolBar: {
        datasourceLable: 'Fuente de datos',
        datasetName: 'Nombre',
        run: 'correr',
        join: 'Unirse',
        expression: 'Expresión',
        filter: 'Filtrar',
        code: 'Código',
        finish: 'Terminar',
        cancel: 'Cancelar',
        parameter: 'Parámetro',
        datasourceWaterMark: 'Seleccione una fuente de datos',
        autoPreview: 'Vista previa automática'
    },
    joiner: {
        title: 'Query Joiner',
        descriptionLable: 'Lista de relaciones de tabla',
        add: 'AÑADIR',
        save: 'DE ACUERDO',
        cancel: 'Cancelar',
        closeToolTip: 'Cerca',
        addField: 'Agregue campo',
        leftTableWaterMark: 'Tabla izquierda',
        rightTableWaterMark: 'Mesa derecha',
        leftFieldWaterMark: 'Jardín izquierdo',
        rightFieldWaterMark: 'El jardín derecho',
        operatorWaterMark: 'Operador',
        joinTypeWaterMark: 'Unirse al tipo',
        joinTypes: {
            inner: 'Interior',
            outer: 'Izquierda Exterior',
            rightOuter: 'Derecha Exterior',
            fullOuter: 'Completo exterior'
        },
        errorMessage: {
            removeField: 'Cada relación debe tener una condición de campo. Por lo tanto, no permite borrar este campo ',
            noRelationAlert: ' no tiene relación con otras tablas',
            selectLeftTable: 'Seleccione el valor de la tabla izquierda',
            selectRightTable: 'Seleccione el valor de la tabla correcta',
            selectRelation: 'Seleccione la relación para las tablas',
            selectLeftColumn: 'Seleccione el valor de la columna izquierda del campo fila #',
            selectRightColumn: 'Seleccione el valor de la columna derecha de la fila del campo #',
            selectOperator: 'Seleccione el operador de la fila de campo #',
            relationExists: 'Ya existe relación entre tablas',
            saveJoinerAlert: 'Error al unir las tablas seleccionadas'
        }
    },
    credentialDialog: {
        title: 'Diálogo de credenciales',
        userName: 'Nombre de usuario',
        password: 'Contraseña',
        userNameWaterMark: 'Nombre de usuario',
        passwordWaterMark: 'Contraseña',
        userNameErrorMessage: 'Por favor ingrese el nombre de usuario',
        passwordErrorMessage: 'Por favor, ingrese contraseña',
        connect: 'Conectar',
        close: 'Cerca',
        credential: 'Credencial'
    },
    queryExpression: {
        title: 'Expresiones de consulta',
        functionLabel: 'Funciones',
        columnLabel: 'Configuración de columna',
        expressionLabel: 'Expresión',
        nameLabel: 'Nombre',
        descriptionLabel: 'Descripción ',
        exampleLabelText: 'Ejemplo',
        ok: 'Salvar',
        cancel: 'Cancelar',
        add: 'AÑADIR',
        textAreaWaterMark: 'Expresión de consulta',
        nameFieldWaterMark: 'Nombre de expresión',
        closeToolTip: 'Cerca',
        errorMessage: {
            saveAlert: 'La expresión no se guarda. ¿Quieres guardar y continuar?',
            bracketSyntax: 'Sintaxis incorrecta cerca de abrir / cerrar paréntesis.',
            parseAlert: 'El diseñador de informes no pudo analizar la expresión especificada.',
            nameAlert: 'El campo de nombre no debe estar vacío.',
            emptyAlert: 'El campo de expresión no debe estar vacío.',
            duplicateName: 'El nombre de expresión especificado ya existe',
            specialCharacter: 'El nombre de la expresión no debe contener caracteres especiales.',
            referenceError: '¡La columna no puede ser referida dentro de su propia expresión!',
            invalidSyntax: 'Sintaxis inválida cerca de Abrir / Cerrar grupo (s).',
            retrieveExpression: 'ReportDesigner no pudo recuperar la expresión especificada.',
        },
        datasetTitle: 'Conjunto de datos',
        expressions: {
            all: 'Todas',
            numbers: 'Números',
            logical: 'Lógico',
            conditional: 'Condicional',
            date: 'Fecha',
            stringType: 'Cuerda',
            text: 'Texto',
            miscellenuous: 'Diverso ',
            abs: 'Devuelve el valor absoluto de la expresión dada.',
            acos: 'Devuelve el coseno inverso (también conocido como arcocoseno) de la expresión numérica dada.',
            asin: 'Devuelve el seno inverso (también conocido como arcoseno) de la expresión numérica dada.',
            atan: 'Devuelve la tangente inversa (también conocida como arcotangente) de la expresión numérica dada.',
            cos: 'Devuelve el coseno del ángulo especificado en radianes de la expresión dada.',
            degree: 'Devuelve el ángulo en grados para el que se especifica en radianes de la expresión numérica dada.',
            exponent: 'Devuelve el valor exponencial de la expresión dada.',
            logrithm: 'Devuelve el logaritmo de la expresión dada a la base especificada.',
            pi: 'Devuelve el valor constante de PI.',
            power: 'Devuelve el valor de la expresión dada (expresión1) a la potencia especificada (expresión2).',
            radians: 'Devuelve el ángulo en radianes para el que se especifica en grados en la expresión numérica dada.',
            round: 'Devuelve un valor redondeado.',
            sign: 'Devuelve un valor que representa el signo positivo (+1), cero (0) o negativo (-1) de la expresión numérica dada.',
            sin: 'Devuelve el seno del ángulo especificado en radianes de la expresión dada.',
            squareRoot: 'Devuelve la raíz cuadrada de la expresión numérica dada.',
            tan: 'Devuelve la tangente de la expresión numérica dada.',
            ifCondition: 'Devuelve una parte verdadera o una parte falsa, según la evaluación de la expresión.',
            ifNull: 'Si la expresión es numérica / cadena / fecha, devuelve la primera expresión. Si la primera expresión es NULL, devuelve la segunda expresión.',
            isNotNull: 'Si numérica / cuerda / date_expression es NULL, devuelve una cadena que representa falso; de lo contrario representa verdadero.',
            isNull: 'Si numérica / cuerda / date_expression es NULL, devuelve una cadena que representa verdadero; de lo contrario representa falso.',
            and: 'Devuelve verdadero si ambas expresiones se evalúan como verdaderas.',
            notOperation: 'Devuelve verdadero si ambas expresiones se evalúan como verdaderas.',
            orOperation: 'Devuelve verdadero si alguna de las expresiones se evalúa como verdadera.',
            addDate: 'Agrega la cantidad de días a la fecha especificada.',
            name: 'Devuelve una cadena que representa la parte de fecha especificada de la expresión de fecha dada.',
            part: 'Devuelve un valor entero que representa la parte de fecha especificada de la expresión de fecha dada.',
            sub: 'Devuelve la fecha restada de la fecha especificada.',
            day: 'Devuelve un valor numérico que representa la parte del día de la fecha especificada.',
            daydiff: 'Devuelve un valor numérico que representa la diferencia entre dos fechas especificadas.',
            hour: 'Devuelve la hora de la fecha dada como un entero.',
            minute: 'Devuelve un valor numérico que representa la parte de los minutos de la fecha resultante de la expresión de fecha especificada.',
            month: 'Devuelve un valor numérico que representa la parte del mes de la fecha resultante de la expresión de fecha especificada.',
            now: 'Devuelve la fecha y hora actual.',
            today: 'Devuelve la fecha actual.',
            year: 'Devuelve un valor numérico que representa la parte del año de la fecha resultante de la expresión de fecha especificada.',
            char: 'Convierte el código ASCII entero dado en un personaje.',
            concat: 'Devuelve un valor de cadena resultante de la concatenación de dos o más valores de cadena.',
            contains: 'Devuelve true si la expresión de cadena dada contiene la expresión de subcadena especificada.',
            endsWith: 'Devuelve verdadero si la expresión de cadena dada finaliza con la expresión de subcadena especificada.',
            left: 'Devuelve el número especificado de caracteres desde el inicio de la expresión de cadena dada.',
            length: 'Devuelve el logaritmo natural de la expresión dada.',
            lower: 'Devuelve un valor de cadena convertido en minúsculas a partir de la expresión de cadena dada.',
            leftTrim: 'Devuelve el valor de cadena con los espacios en blanco iniciales eliminados de la expresión de cadena.',
            maximum: 'Devuelve el valor máximo en la expresión dada.',
            minimum: 'Devuelve el valor mínimo en la expresión dada.',
            right: 'Devuelve el número especificado de caracteres desde el final de la expresión de cadena dada.',
            rightTrim: 'Devuelve la cadena sin espacios finales del lado derecho en la cadena dada.',
            startswith: 'Devuelve verdadero si las expresiones de cadena dadas comienzan con la expresión de subcadena especificada.',
            subString: 'Devuelve una longitud específica de cadena a partir del índice específico de la expresión de cadena dada.',
            upper: 'Devuelve un valor de cadena convertido en mayúscula a partir de una expresión de cadena determinada.'
        }
    },
    alertMessage: {
        yes: 'Sí',
        no: 'No',
        showDetails: 'Mostrar detalles',
        hideDetails: 'Ocultar detalles',
        close: 'Cerca'
    }
};
