export const onRenderCallback = (
  id, // la prop "id" del árbol Profiler que acaba de ser "confirmado"
  phase, // ya sea "mount" (si el árbol acaba de ser montado) o "update" (si se volvió a renderizar)
  actualDuration, // tiempo dedicado a procesar la actualización confirmada
  baseDuration, // tiempo estimado para renderizar todo el subárbol sin memoización
  startTime, // cuando React comenzó a procesar esta actualización
  commitTime, // cuando React confirmó esta actualización
  interactions // el conjunto de interacciones pertenecientes a esta actualización
) => {
  if (phase === "mount") {
    console.group("Render Mount");
    console.log("Interactions", interactions);
    console.table({
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
    });
    console.groupEnd();
  }

  if (phase === "update") {
    console.group("Render Update");
    console.log("Interactions", interactions);
    console.table({
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
    });
    console.groupEnd();
  }
};

export const compose = (...fns) => {
  if (fns.length === 0) return (arg) => arg;
  if (fns.length === 1) return fns[0];

  return fns.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
};
