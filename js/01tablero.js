class tablero {
    constructor(rows, cols) {
        this.i = 0;
        this.x = 0;
        this.rows = rows;
        this.cols = cols;
        this.tabla = document.getElementById("tabla");
        this.t = document.getElementById("tbodyt");

    }



    dibujar_tablero() {
        while (this.i < this.cols) {
            /* tr */
            this.tr = document.createElement("tr");
            this.x = 0;
            while (this.x < this.rows) {
                /* td */
                this.cas = new casilla();
                this.cas.crear_celda(this.i, this.x, this.tr);
                this.x += 1;
            }
            this.t.appendChild(this.tr);
            this.i += 1;
        }
    }


}
