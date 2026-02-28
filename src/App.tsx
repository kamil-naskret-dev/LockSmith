export const App = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-r from-ds-primary-900 to-ds-primary-950 text-white px-4">
      <div className="w-full max-w-135 text-center flex flex-col gap-8">
        <h1 className="text-ds-gray-600 text-2xl">Password Generator</h1>
        <section className="flex flex-col gap-6">
          <div className="px-8 py-4 bg-ds-primary-800">TOP</div>
          <form className="px-8 py-6 bg-ds-primary-800">BOTTOM</form>
        </section>
      </div>
    </main>
  );
};
