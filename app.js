document.getElementById("formlista_tareas").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const fecha = document.getElementById("fecha").value;
    const descripcion = document.getElementById("descripcion").value.trim();
    const tipo = document.getElementById("tipo").value;
    const prioridad = document.querySelector('input[name="prioridad"]:checked');
  
    if (!nombre || !nombretarea || !fecha || !tipo || !prioridad) {
      alert("Completa todos los campos obligatorios.");
      return;
    }
  
    const tarea = {
      nombre,
      fecha,
      descripcion,
      tipo,
      prioridad: prioridad.value
    };
  
    mostrarTarea(tarea);
    this.reset();
  });
  
  
  function mostrarTarea(tarea) {
    const contenedor = document.getElementById("lista");
  
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarea");
  
    tarjeta.innerHTML = `
      <h3>${tarea.nombre} <small>(${tarea.prioridad})</small></h3>
      <p><strong>Fecha límite:</strong> ${tarea.fecha}</p>
      <p><strong>Tipo:</strong> ${tarea.tipo}</p>
      <p>${tarea.descripcion}</p>
    `;
  
    contenedor.appendChild(tarjeta);
  }