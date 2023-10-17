import { TextCleaner } from './TextCleaner'; // Asegúrate de importar la función desde el archivo correcto

// eslint-disable-next-line no-undef
test('TextCleaner reemplaza caracteres correctamente', () => {
    const textoEntrada = 'Ã¡ Ã© Ã­ Ã³ Ãº';

    const textoLimpio = TextCleaner(textoEntrada);

    const resultadoEsperado = 'á é í ó ú';

    // Comprueba si el resultado de la función es igual al resultado esperado
    // eslint-disable-next-line no-undef
    expect(textoLimpio).toBe(resultadoEsperado);
});
