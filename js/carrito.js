class carrito{

    //Añadir el producto al carrito
    compraProducto(e){
        e.preventDefault();
        if(e.target.classlist.contains('add-cart')){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }
}