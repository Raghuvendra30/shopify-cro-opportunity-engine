export function ExportButton() {

  function handleClick() {

    window.print();

  }

  return (
    <button
      onClick={handleClick}
      className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
    >
      Export PDF
    </button>
  );
}