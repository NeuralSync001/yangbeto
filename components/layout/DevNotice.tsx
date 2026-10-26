/** Aviso visível apenas no ambiente local para diferenciar a prévia da loja oficial. */
export function DevNotice() {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <div role="note" className="border-b border-line bg-mist px-4 py-1.5 text-center text-[0.68rem] text-grafite/70">
      Prévia local · ilustrações e catálogo demonstrativos; confirme as informações antes de publicar.
    </div>
  );
}
