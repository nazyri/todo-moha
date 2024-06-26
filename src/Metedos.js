const getTarea = async () => {
    try {
        const respuesta = await fetch('http://localhost:3000/api/task',{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        let registro = await respuesta.json()
        console.log(registro);

    } catch (error) {
        console.error(error);
    }  
}

//post
const darDatos = async (tarea) => {
    try {
        let tarea={
            nombre:input.value,
            estado:false
        }
        console.log(JSON.stringify(tarea))
        const respuesta = await fetch('http://localhost:3000/api/task',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarea)
        })
        let registro = await respuesta.json()
        console.log(registro);
        getTarea()
        console.log(`La tarea ${tarea.id} fue agregada`);
    } catch (error) {
        console.error(error);
    }  
}

//PUT 
async function onComplete(id) {
    try {

        tarea.state=!tarea.state;

        const respuesta = await fetch(`http://localhost:3000/api/task/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(id)
        })

        let actual = await respuesta.json()
        console.log(actual);

    } catch (error) {
        console.error(error);
    }  
}

const onDeleteItem = async (id) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/api/task/${id}`,{
            method: "DELETE",
        })
    } catch (error) {
        console.error(error);
    }
}

export {getTarea, darDatos, onComplete, onDeleteItem}