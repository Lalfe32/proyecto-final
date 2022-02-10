/**
 * ========= ¿que es javaScrpit? =========
 *  -Lenguaje de programcion
 *  -Interpretado.
 *  -Orientado a objetos.
 *  -Imperativo.
 *  -Case sensitive (Upper and Lower Case).
 *  -Basado en prototipos / instancias / classless.
 *  -Tipado debil.
 *  -Lenguaje dinamico.
 * 
 *  -ECMASCRIPT (5.1, Y 6, 7, 8, NEXT) 
 */

/**
 * ============ ¿porque es un lenguaje de programacion? ==========================
 * 
 *  JavaScript o JS es un lenguaje de programacion orientado a objetos.
 *  Esta es una herramineta que nos permite darle instrucciones al
 *  ordernador a traves de codigo, codigo el cual esta estructurado que
 *  los programadores puedan escribirlo siguiendo una logica para que cuando
 *  el codigo se termine, este pueda complir la funcion que nosotros queriamos.
 * ================================================================================
 */

/**
 * =============== Interpretado =================
 *  JS es interpretado por que el codigo que
 *  escribimos no tiene que ser pasado por un compilador,
 *  si no que se ejecuta directamente en el navegador,
 *  la cual tiene un herramienta que se llama interprete
 *  lo que hace que esta herramienta es interpretar todo el
 *  codigo en tiempo real.
 * ====================================================
 */

/**
 * ================== Orientado a objetos ==============
 *  un lenguaje orientado a objetos significa que
 *  su estuctura abarca todas las caracteristicas que tiene
 *  la programacion orientada a objetos como son las clases,
 *  la herencia, etc.
 * =========================================================
 */

/**
 * ==================== Imperativo =======================
 *  es imperativo por que todas las instucciones van de linea en linea
 *  =======================================================
 */

/**
 * ================== Case Sensitive ===================
 * case sensitive significa que sensible a MAYUSCULAS y
 *  minusculas. ejemplo ("hola" "HOLA" "Hola" "hOLA")
 *  esto no lo interpreta de la misma forma.
 * ======================================================
 */

/**
 * ================= Tipado debil ============
 *  Tipado debil significa que el valor de las
 *  variables puede cambia a traves del tiempo.
 * ============================================
 */

/**
 * =============== lenguaje dinamico ================
 *  que sea dinamico significa que la  variable no se 
 *  ajusta al dato si no que el dato se ajusta a la variable.
 * =====================================================
 */

/**
 * ========== ¿Para que se usa JS? =============
 *  -dinamismo en los sitios web
 *  -Servidor de Node JS
 *  -Tecnologia Frontend como Angular, ReactJS o Vue.JS
 * 
 *      Otros usos no tan comunes:
 * 
 *  -Inteligencia Artificial
 *  -Placas Electronicas (Jhonny Five)
 *  -Mobile Apps
 *  -Desktop Apps
 *  -ETC...
 * ==================================================
 */

/**
 * =============== Formas de enlazar JS ====================
 *  - En linea: sobre una etiqueta (<h1 onclick=""></h1>). NO recomendable
 *  - Como contenido en la etiqueta <script>. NO recomendable
 *  - Como contenido en un archivo formato .js. RECOMENDABLE
 *  - Con un require
 * ============================================================
 */

/**
 * ======================== Variable =================
 * una variable es un espacio que guardamos en memoria.
 *  Por ejemplo: yo tengo un vaso (el vaso seria la variable) en el cual
 *  adentro meto un papel (papel seria el dato).
 */

//=============== NAV ==========================
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras= document.querySelectorAll('.ham span')

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
});

//============== modo oscuro ===================

const toggle = document.querySelector('#toggle');
const themeActual = localStorage.getItem('theme')

if (themeActual) {
    document.documentElement.setAttribute('data-theme', themeActual);
}

if (themeActual === 'oscuro') {
    toggle.checked = true;
}

const cambiarTheme = (event) => {
    if(event.target.checked){
        document.documentElement.setAttribute
        ('data-theme', 'oscuro');
        localStorage.setItem('theme', 'oscuro');
    }else{
        document.documentElement.setAttribute
        ('data-theme', null);
        localStorage.setItem('theme', null);
    };
}

toggle.addEventListener('click', cambiarTheme);